import { createStore } from "solid-js/store";

export type FormData = {
  name: string;
  email: string;
  age: number;
};

export const [form, setForm] = createStore<FormData>({
  name: "",
  email: "",
  age: 0,
});

export const validateInput = (field: keyof FormData, value: string | number): boolean => {
  switch (field) {
    case "name":
      return typeof value === "string" && value.trim().length > 0;
    case "email":
      // Basic email validation regex
      return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    case "age":
      return typeof value === "number" && value > 0 && value < 120;
    default:
      return false;
  }
};

export const updateForm = (field: keyof FormData, value: string | number) => {
  if (validateInput(field, value)) {
    setForm({ [field]: value });
  } else {
    alert(`Invalid input for ${field}: ${value}`);
  }
};

// Example usage:
// updateForm("name", "John Doe"); // Valid
// updateForm("email", "john@example.com"); // Valid
// updateForm("age", 25); // Valid
// updateForm("age", -1); // Invalid, will not update
