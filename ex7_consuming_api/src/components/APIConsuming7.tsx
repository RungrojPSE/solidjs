import axios from "axios";
import { createSignal, Component, Show, JSX } from "solid-js";
import { Toast } from "./Toast";

interface FetchComponentProps<T> {
  fetchFunction: () => Promise<T>;
  render: (data: T) => JSX.Element;
}

const AxiosFetchComponent = <T,>(props: FetchComponentProps<T>) => {
  const [data, setData] = createSignal<T | null>(null);
  const [loading, setLoading] = createSignal(false);
  const [toastMessage, setToastMessage] = createSignal("");
  const [showToast, setShowToast] = createSignal(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await props.fetchFunction();
      setData(() => result);
    } catch (error) {
      setData(null);
      setToastMessage("Error fetching data: " + (error as Error).message);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); // Hide after 3 seconds
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <Show when={!loading()} fallback={<p>Loading...</p>}>
        <Show when={data()} fallback={<p>No Data Available</p>}>
          {(fetchedData) => props.render(fetchedData())}
        </Show>
      </Show>
      <Show when={showToast()}>
        <Toast message={toastMessage()} onClose={() => setShowToast(false)} />
      </Show>
    </div>
  );
};

// USAGE: 1. Create API and 2. Create component for results
interface UserDataRequest {
  id: string;
}
interface UserDataResponse {
  id: string;
  name: string;
  email: string;
}

const DisplayUser: Component<UserDataResponse> = (props) => {
  return (
    <div>
      <p>{props.id}</p>
      <p>{props.name}</p>
      <p>{props.email}</p>
    </div>
  );
};

// Update `fetchUserData` to accept `UserDataRequest`:
const fetchUserData = async (request: UserDataRequest) => {
  const { data } = await axios.get<UserDataResponse>(
    `https://jsonplaceholder.typicode.com/users/${request.id}`
  );
  return data;
};

const GenericAxiosFetchComponent = () => {
  // this value can bring from store
  const [sample, setSample] = createSignal<UserDataRequest>({ id: "1" });

  return (
    <div>
      <input type="text" onchange={(e) => setSample({ id: e.target.value })} />
      <AxiosFetchComponent
        fetchFunction={() => fetchUserData(sample())}
        render={(user) => <DisplayUser {...user} />}
      />
    </div>
  );
};

export default GenericAxiosFetchComponent;
