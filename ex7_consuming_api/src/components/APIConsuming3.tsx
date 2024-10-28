import axios from "axios";
import { createSignal, Component, Show } from "solid-js";

const AxiosFetchComponent: Component<{ userId: string }> = (props) => {
  const [userData, setUserData] = createSignal<any>(null);
  const [loading, setLoading] = createSignal(false);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/" + props.userId
      );
      setUserData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={fetchUser}>Fetch User</button>
      <Show when={!loading()} fallback={<p>Loading...</p>}>
        <Show when={userData()} fallback={<p>No Data Available</p>}>
          {(user) => (
            <div>
              <h2>{user().name}</h2>
              <pre>{JSON.stringify(user(), null, 2)}</pre>
            </div>
          )}
        </Show>
      </Show>
    </div>
  );
};

export default AxiosFetchComponent;