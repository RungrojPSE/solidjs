import { createSignal, type Component } from 'solid-js';
import { FormField } from '../stores/store3';

interface InputValidationProps {
  type: 'text' | 'number' | 'password';
  fieldName: FormField;
  inputValue: number | string; // intial be number, receive as string
  validateForm: (field: FormField) => string[] | undefined;
  updateForm: (field: FormField, value: string | number) => void;
}

const InputValidation: Component<InputValidationProps> = (props) => {
  const [errorMessage, setErrorMessage] = createSignal<string[] | undefined>(undefined);

  const handleInputChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const { type, value } = target;

    if (type == "number")
    {
      props.updateForm(props.fieldName, Number(value));
    }
    else {
      props.updateForm(props.fieldName, value);
    }

    const err = props.validateForm(props.fieldName);
    if (err)
    {
      setErrorMessage(err);
    }
    else {
      setErrorMessage(undefined);
    }
    
  };

  return (
    <div>
      <input
        type={props.type}
        value={props.inputValue}
        onInput={handleInputChange}
      />
      {errorMessage() && (
        <div>{JSON.stringify(errorMessage())}</div>
      )}
    </div>
  );
};

export default InputValidation;
