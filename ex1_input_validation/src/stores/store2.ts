import { createStore } from "solid-js/store";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  age: z.number().min(1, "Age must be a positive number").max(120, "Age must be less than 120"),
});

export const [form, setForm] = createStore({
  name: "",
  email: "",
  age: 0,
});

const validateForm = (data: typeof form) => {
  const result = formSchema.safeParse(data);
  if (!result.success) {
    console.log(result.error.errors);
    return false;
  }
  return true;
};

export const updateForm = (field: keyof typeof form, value: string | number) => {
  if (validateForm(form)) {
    setForm({ [field]: value });
  } else {
    // console.warn("Invalid input detected");
  }
};
