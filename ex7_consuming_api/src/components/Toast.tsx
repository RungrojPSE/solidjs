import { Component } from "solid-js";

export const Toast: Component<{ message: string; onClose: () => void }> = (props) => {
  return (
    <div class="toast">
      {props.message}
      <button onClick={props.onClose}>x</button>
    </div>
  );
};
