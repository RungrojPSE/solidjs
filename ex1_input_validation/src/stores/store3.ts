import { createStore } from "solid-js/store";
import { z } from "zod";

// Define the form validation schema
export const formSchema = z.object({
  name: z.string().min(6, "Name is required 6 chars"),
  email: z.string().email("Invalid email format"),
  age: z.number().min(1, "Age must be a positive number").max(120, "Age must be less than 120"),
});

// Create a store for the form state
export const [form, setForm] = createStore({
  name: "",
  email: "",
  age: 0,
});

export type FormProp = typeof form;
export type FormField = keyof typeof form;

export const validateForm = (field: FormField): string[] | undefined => {
  const result = formSchema.safeParse(form);
  if (!result.success) {
    return result.error.format()[field]?._errors;
  }
  return undefined;
};

export const updateForm = (field: FormField, value: string | number) => {
  setForm(field, value);  // Use setForm with field to ensure proper state update
};
