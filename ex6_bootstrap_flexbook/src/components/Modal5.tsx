import { onCleanup, onMount } from "solid-js";


function Modal() {
  let myModal: HTMLDivElement | null = null;

  let bootstrapModal: any = null;

  const openModal = () => {
    if (bootstrapModal) bootstrapModal.show();
  };

  const closeModal = () => {
    if (bootstrapModal) bootstrapModal.hide();
  };

  onMount(() => {
    
    import("bootstrap").then(({ Modal }) => {
      console.log("onMount");
      if (myModal) {
        bootstrapModal = new Modal(myModal);
      }
    });

    onCleanup(() => {
      console.log("onCleanup");
      if (bootstrapModal) bootstrapModal.dispose();
    });
  });

  return (
    <>
      {/* Button to trigger modal */}
      <button type="button" class="btn btn-primary" onClick={openModal}>
        Open Modal from Modal
      </button>

      {/* Modal */}
      <div
        class="modal fade"
        tabindex="-1"
        ref={el => (myModal = el)}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                <slot name="title">Default Title</slot>
              </h5>
              <button
                type="button"
                class="btn-close"
                onClick={closeModal}
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <slot>Default Content</slot>
            </div>
            <div class="modal-footer">
              <slot name="footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
