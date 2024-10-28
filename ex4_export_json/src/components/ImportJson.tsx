import { createStore } from "solid-js/store";
import data from "./data.json";
// type dataProp = typeof data

const [state, setState] = createStore(data);

const ImportJson = () => (
  <div>
    <pre>{JSON.stringify(data)}</pre>
    <p>Name: {state.name}</p>
    <p>Type: {state.type}</p>
    <p>Version: {state.version}</p>
  </div>
);

export default ImportJson;
