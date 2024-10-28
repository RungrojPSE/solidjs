// usePopover.ts
import { onCleanup, onMount } from "solid-js";
import { Popover } from "bootstrap";

// https://getbootstrap.com/docs/5.3/components/popovers/#enable-popovers

export function usePopover() {
  let popoverInstances: bootstrap.Popover[] = [];

  onMount(() => {
    const popoverTriggers = document.querySelectorAll('[data-bs-toggle="popover"]');
    popoverTriggers.forEach((trigger) => {
      const popoverInstance = new Popover(trigger);
      popoverInstances.push(popoverInstance);
    });
  });

  onCleanup(() => {
    popoverInstances.forEach((popover) => popover.dispose());
  });


    // // Popover
  // let popoverInstances: bootstrap.Popover[] = [];
  // onMount(() => {
  //   const popoverTriggers = document.querySelectorAll('[data-bs-toggle="popover"]');
  //   import("bootstrap").then(({ Popover }) => {
  //     popoverTriggers.forEach((trigger) => {
  //       const popoverInstance = new Popover(trigger); // Create a new instance of Popover
  //       popoverInstances.push(popoverInstance); // Store the instance for cleanup
  //     });
  //   });
  // });
  // onCleanup(() => {
  //   // Dispose of each popover instance on cleanup
  //   popoverInstances.forEach((popover) => popover.dispose());
  // });
}
