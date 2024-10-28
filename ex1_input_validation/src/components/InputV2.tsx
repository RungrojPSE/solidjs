import { createSignal, type Component } from 'solid-js';

interface InputValidationProps<T> {
  type: 'text' | 'number' | 'password';
  fieldName: T;
  inputValue: number | string; // Initially number, but received as string
  validateForm: (field: T) => string[] | undefined;
  updateForm: (field: T, value: string | number) => void;
}

const InputValidation2 = <T,>(props: InputValidationProps<T>): ReturnType<Component> => {
  const [errorMessage, setErrorMessage] = createSignal<string[] | undefined>(undefined);

  const handleInputChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const { type, value } = target;

    if (type === 'number') {
      props.updateForm(props.fieldName, Number(value));
    } else {
      props.updateForm(props.fieldName, value);
    }

    const err = props.validateForm(props.fieldName);
    setErrorMessage(err || undefined);
  };

  return (
    <div>
      <input
        type={props.type}
        value={props.inputValue}
        onInput={handleInputChange}
      />
      {errorMessage() && <div>{JSON.stringify(errorMessage())}</div>}
    </div>
  );
};

export default InputValidation2;
