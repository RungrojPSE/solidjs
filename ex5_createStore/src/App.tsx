import "./App.css";
import {
  getUserPreferences,
  setPreferences,
  setState,
  state,
} from "./store/store1";

function App() {
  const getUserPreferences2 = state.user.preferences;
  // console.log(getUserPreferences2)

  return (
    <>
      <div>
        <button
          onclick={() => {
            setState("user", "preferences", "theme", "light");
          }}
        >
          set1
        </button>

        {/* Using helper function */}
        <button
          onclick={() => {
            setPreferences("theme", "dark");
          }}
        >
          set1_
        </button>

        <button
          onclick={() => {
            setPreferences("notifications", false);
          }}
        >
          set1_
        </button>

        <button
          onclick={() => {
            setState("tasks", 0, "completed", true);
          }}
        >
          set2
        </button>

        {/* Partial Update using spreads */}
        <button
          onclick={() => {
            setState("user", "preferences", (prefs) => ({
              ...prefs,
              notifications: false,
            }));
          }}
        >
          set3
        </button>

        {/* immer-like Patterns */}
        <button
          onclick={() => {
            setState("user", (user) => ({
              ...user,
              preferences: { ...user.preferences, notifications: true },
            }));
          }}
        >
          set3_
        </button>

        <button
          onclick={() => {
            setState("user", "preferences", "notifications", true);
          }}
        >
          set4
        </button>

        {/* Updating an Array Element */}
        <button
          onclick={() => {
            setState("tasks", (tasks) =>
              tasks.map((task) =>
                task.id === 1 ? { ...task, completed: !task.completed } : task
              )
            );
          }}
        >
          set5
        </button>
      </div>
      <div>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>

      {/* Extract Selectors for Better Readability */}
      <h3>Extract Selectors for Better Readability</h3>
      <p>use as function</p>
      <div>
        <pre>{JSON.stringify(getUserPreferences(), null, 2)}</pre>
      </div>
      <p>use as reference</p>
      <div>
        <pre>{JSON.stringify(getUserPreferences2, null, 2)}</pre>
      </div>
    </>
  );
}

export default App;
