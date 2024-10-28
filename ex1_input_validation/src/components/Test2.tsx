import type { Component } from 'solid-js';

interface InputValidationProps {
  inputValue: number | string; // Adjust based on your requirements
  handleInputChange: (event: Event) => void; // Type the event handler appropriately
  errorMessage: string | null; // Use null for no error message
}

const InputValidation: Component<InputValidationProps> = (props) => {
  return (
    <div>
      <input
        type="number"
        value={props.inputValue}
        onInput={props.handleInputChange}
        class=""
      />
      {props.errorMessage && (
        <div class="error-message">{props.errorMessage}</div>
      )}
    </div>
  );
};

export default InputValidation;
