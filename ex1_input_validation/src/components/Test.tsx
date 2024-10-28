import { createStore } from "solid-js/store";
import { z } from "zod";

// Define the validation schema using zod
const inputSchema = z.number().min(25, "Age not match the requirement").max(35, "Age not match the requirement");

function InputWithError() {
  // Using createStore for managing form state
  const [form, setForm] = createStore({ inputValue: "", errorMessage: "" });

  // Function to validate and handle input change
  const handleInputChange = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    const numericValue = Number(value); // Convert the string to a number

    setForm("inputValue", value); // Update the store's value

    // Validate using zod schema
    const result = inputSchema.safeParse(numericValue);

    if (!result.success) {
      // If validation fails, update the error message
      setForm("errorMessage", result.error.errors[0].message);
    } else {
      // If validation passes, clear the error message
      setForm("errorMessage", "");
    }
  };

  return (
    <div>
      <input
        type="number"
        value={form.inputValue}
        onInput={handleInputChange}
        class="border p-2"
      />
      {form.errorMessage && (
        <div class="">{form.errorMessage}</div>
      )}
    </div>
  );
}

export default InputWithError;
