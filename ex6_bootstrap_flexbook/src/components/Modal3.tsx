import { createSignal, onMount } from "solid-js";

const MyModal = () => {
  let modalRef: HTMLDivElement | undefined;
  const [showModal, setShowModal] = createSignal(false);
  let modalInstance: any;

  onMount(async () => {
    const { Modal } = await import("bootstrap");
    modalInstance = new Modal(modalRef!);

    // Clean up the modal instance when the component unmounts
    return () => {
      modalInstance?.dispose();
    };
  });

  const toggleModal = () => {
    setShowModal(!showModal());
    if (showModal()) {
      modalInstance.show();
    } else {
      modalInstance.hide();
    }
  };

  return (
    <>
      <button type="button" class="btn btn-primary" onClick={toggleModal}>
        Open Modal
      </button>

      <div
        ref={modalRef}
        class="modal fade"
        tabindex="-1"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal Title</h5>
              <button
                type="button"
                class="btn-close"
                onClick={toggleModal}
              ></button>
            </div>
            <div class="modal-body">
              <p>Modal body content goes here.</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                onClick={toggleModal}
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyModal;
