import "./App.css";
import InputValidation from "./components/InputV1";
import InputValidation2 from "./components/InputV2";
import { form, FormField, updateForm, validateForm } from "./stores/store3";

function App() {
  return (
    <>
      <div>
        <form>
          <div>
            <label>Name:</label>
            <InputValidation2<FormField>
              type="text"
              fieldName="name"
              inputValue={form.name}
              updateForm={updateForm}
              validateForm={validateForm}
            />
          </div>
          <div>
            <label>Email:</label>
            <input type="asdf" value={2}/>
          </div>
          <div>
            <label>Age:</label>
            <InputValidation
              type="number"
              fieldName="age"
              inputValue={form.age}
              updateForm={updateForm}
              validateForm={validateForm}
            />
          </div>
        </form>
        <div>
          <h3>Form Data:</h3>
          <p>Name: {form.name}</p>
          <p>Email: {form.email}</p>
          <p>Age: {form.age}</p>
        </div>
      </div>
    </>
  );
}

export default App;
