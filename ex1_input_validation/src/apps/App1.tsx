import './App.css'
import InputWithError from '../components/Test';
import { form, updateForm } from '../stores/store2';
// import { form, updateForm } from './stores/store1';


function App() {
  const handleInputChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;
    
    if (name === "age") {
      updateForm(name as keyof typeof form, parseInt(value));
    } else {
      updateForm(name as keyof typeof form, value);
    }
  };

  return (
    <>
      <div>
        <form>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onInput={handleInputChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onInput={handleInputChange}
            />
          </div>
          <div>
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={form.age}
              onInput={handleInputChange}
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
      <InputWithError/>
    </>
  );
};

export default App;
