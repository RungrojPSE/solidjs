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

interface UserProp {
  id: string;
  name: string;
  email: string;
}

const DisplayUser: Component<UserProp> = (props) => {
  return (
    <div>
      <p>{props.id}</p>
      <p>{props.name}</p>
      <p>{props.email}</p>
    </div>
  );
};

// Usage Example
const fetchUserData = async () => {
  const { data } = await axios.get<UserProp>(
    "https://jsonplaceholder.typicode.com/users/a"
  );
  return data;
};

const GenericAxiosFetchComponent = () => {
  return (
    <AxiosFetchComponent
      fetchFunction={fetchUserData}
      render={(user) => <DisplayUser {...user} />}
    />
  );
};

export default GenericAxiosFetchComponent;
