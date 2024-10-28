import { createResource, Component, Show } from "solid-js";

const fetchUserData = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!response.ok) throw new Error("Failed to fetch user data");
  return response.json();
};

const UserProfile: Component<{ userId: string }> = (props) => {
  // Use a default userId to ensure fetching works.
  const [user] = createResource(() => props.userId || "1", fetchUserData);

  return (
    <Show when={user()} fallback={<p>Loading...</p>}>
      {(userData) => (
        <div>
          <h2>{userData().name}</h2>
          <pre>{JSON.stringify(userData(), null, 2)}</pre>
        </div>
      )}
    </Show>
  );
};

export default UserProfile;
