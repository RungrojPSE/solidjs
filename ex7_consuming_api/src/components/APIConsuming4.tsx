/*
In this code, if there are many api and keep the clean, is there a tips to assembly these
1. input request type
2. output response type
3. component for output
to make it as generic, let's say that the response have id, name, email
*/

import axios from "axios";
import { createSignal, Component, Show } from "solid-js";
import { Toast } from "./Toast";

const AxiosFetchComponent: Component<{ userId: string }> = (props) => {
  const [userData, setUserData] = createSignal<any>(null);
  const [loading, setLoading] = createSignal(false);
  const [toastMessage, setToastMessage] = createSignal("");
  const [showToast, setShowToast] = createSignal(false);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/" + props.userId
      );
      setUserData(data);
    } catch (error) {
      setUserData(null);
      setToastMessage("Error fetching data: " + (error as Error).message);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); // Hide after 3 seconds
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
      <Show when={showToast()}>
        <Toast message={toastMessage()} onClose={() => setShowToast(false)} />
      </Show>
    </div>
  );
};

export default AxiosFetchComponent;
