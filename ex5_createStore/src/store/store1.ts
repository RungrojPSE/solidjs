import { createStore } from "solid-js/store";

interface Preferences {
  theme: string;
  notifications: boolean;
}

interface User {
  name: string;
  preferences: Preferences;
}

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface AppState {
  user: User;
  tasks: Task[];
}

export const [state, setState] = createStore<AppState>({
  user: { name: "John", preferences: { theme: "dark", notifications: true } },
  tasks: [
    { id: 1, title: "Buy groceries", completed: false },
    { id: 2, title: "Walk the dog", completed: true },
  ],
});


// 0. Updating nested properties immutably
// setState("user", "preferences", "theme", "light");
// setState("tasks", 0, "completed", true);

// 1. Selectors
export const getUserPreferences = () => state.user.preferences;
// const getUserPreferences = state.user.preferences; // Wrong: it's just a copy of the object
export const theme = () => getUserPreferences().theme;

// export const getUserPreferences2 = state.user.preferences;

// 2. Helper functions for object
// export function setPreferences0(key: keyof Preferences, value: Preferences[keyof Preferences]) {
//   setState("user", "preferences", (prefs) => ({
//     ...prefs,
//     [key]: value,
//   }));
// }

export function setPreferences<K extends keyof Preferences>(
  key: K,
  value: Preferences[K]
) {
  setState("user", "preferences", (prefs) => ({
    ...prefs,
    [key]: value,
  }));
}

// 3. Helper functions for array
export function updateTask(id: number, updatedFields: Partial<{ title: string; completed: boolean }>) {
  setState("tasks", (tasks) =>
    tasks.map((task) => 
      task.id === id ? { ...task, ...updatedFields } : task
    )
  );
}
// or
export function updateTask2(index: number, updatedFields: Partial<{ title: string; completed: boolean }>) {
  setState("tasks", index, (task) => ({
    ...task,
    ...updatedFields,
  }));
}

updateTask(1, { title: "Buy more groceries" });
updateTask(2, { completed: false });


function addTask(newTask: { id: number; title: string; completed: boolean }) {
  setState("tasks", (tasks) => [...tasks, newTask]);
}

// Usage: Add a new task
addTask({ id: 3, title: "Clean the house", completed: false });

function removeTask(id: number) {
  setState("tasks", (tasks) => tasks.filter((task) => task.id !== id));
}

// Usage: Remove the task with id 2
removeTask(2);


function insertTaskAt(index: number, newTask: { id: number; title: string; completed: boolean }) {
  setState("tasks", (tasks) => [
    ...tasks.slice(0, index),
    newTask,
    ...tasks.slice(index),
  ]);
}

// Usage: Insert a task at index 1
insertTaskAt(1, { id: 4, title: "Do laundry", completed: false });

