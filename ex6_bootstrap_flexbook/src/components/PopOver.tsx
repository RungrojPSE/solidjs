import { onCleanup, onMount } from "solid-js";
import type { Component, JSX } from "solid-js";

interface PopoverProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  content: string;
  title?: string;
}

const PopoverButton: Component<PopoverProps> = (props) => {
  let buttonRef!: HTMLButtonElement;
  let popoverInstance: any = null;

  onMount(() => {
    // Dynamically import Bootstrap Popover
    import("bootstrap").then(({ Popover }) => {
      console.log("onMount-use-popover")
      popoverInstance = new Popover(buttonRef);
    });

    onCleanup(() => {
      console.log("onCleanup-use-popover")
      popoverInstance.dispose();
    });
  });

  return (
    <button
      ref={buttonRef}
      type="button"
      class="btn btn-secondary"
      data-bs-toggle="popover"
      data-bs-content={props.content}
      {...props}
    >
      {props.children || "Click me"}
    </button>
  );
};

export default PopoverButton;
