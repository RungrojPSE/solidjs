import { createSignal } from "solid-js";
import "./App.css";

import { createStore } from "solid-js/store";
import ImportJson from "./components/ImportJson";

function App() {
  // Step 1: Create a store with some data
  const [data, setData] = createStore({
    name: "SolidJS Example",
    version: "1.0.0",
    items: [{ id: 1, label: "Item 1" }],
  });

  const [error, setError] = createSignal<string | null>(null); // Track upload errors

  // Step 2: Handle the imported JSON file and update the store
  const importJSON = async (event: Event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return; // No file selected

    try {
      const text = await file.text(); // Read file content as text
      const importedData = JSON.parse(text); // Parse JSON

      // Validate the structure before updating the store
      if (
        importedData.name &&
        importedData.version &&
        Array.isArray(importedData.items)
      ) {
        setData(importedData); // Update the store with imported data
        setError(null); // Clear any previous errors
      } else {
        throw new Error("Invalid JSON structure.");
      }
    } catch (err) {
      setError("Failed to import JSON: " + err); // Handle errors
    }
  };

  // Step 3: Function to export the store data as a JSON file
  const exportJSON = () => {
    const jsonString = JSON.stringify(data, null, 2); // Format JSON with 2-space indentation
    const blob = new Blob([jsonString], { type: "application/json" });

    // Create a temporary download link
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "storeData.json"; // File name
    link.click();

    // Cleanup
    URL.revokeObjectURL(link.href);
  };

  return (
    <div>
      {/* Import JSON in Dev data */}
      <div>
        <h1>Import JSON in DEV Data</h1>
        <ImportJson />
      </div>
      
      {/* Browse: JSON */}
      <div>
        <h1>Browse: JSON</h1>
        <p>Name: {data.name}</p>
        <p>Version: {data.version}</p>
        <ul>
          {data.items.map((item) => (
            <li>{item.label}</li>
          ))}
        </ul>

        <input type="file" accept="application/json" onChange={importJSON} />
        {error() && <p style={{ color: "red" }}>{error()}</p>}
      </div>

      {/* Download: JSON */}
      <div>
        <h1>Download: JSON</h1>
        <button onClick={exportJSON}>Export JSON</button>
      </div>
    </div>
  );
}

export default App;
