import { createSignal, Component, Show } from "solid-js";

const ManualFetchComponent: Component<{ userId: string }> = (props) => {
  const [userData, setUserData] = createSignal<any>(null);
  const [loading, setLoading] = createSignal(false);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/" + props.userId
      );
      if (!response.ok) throw new Error("Failed to fetch user data");
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error(error);
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
              <pre>{JSON.stringify(user(), null, 2)}</pre>
            </div>
          )}
        </Show>
      </Show>
    </div>
  );
};

export default ManualFetchComponent;