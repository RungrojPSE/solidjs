
import Modal from "./Modal5";

type ModalRef = {
  openModal: () => void;
  closeModal: () => void;
};

function App() {
  let modalRef: ModalRef | null = null;

  const openModalHandler = () => {
    if (modalRef){
      console.log("modalRef")
    }
    modalRef?.openModal();
  };

  const closeModalHandler = () => {
    modalRef?.closeModal();
  };

  return (
    <div class="container">
      <h1>SolidJS Modal Example</h1>

      {/* Button to trigger modal from the parent component */}
      <button class="btn btn-success" onClick={openModalHandler}>
        Open Modal
      </button>

      {/* Modal Component */}
      <Modal ref={(el: ModalRef) => (modalRef = el)} />

      <div class="mt-3">
        <button class="btn btn-danger" onClick={closeModalHandler}>
          Close Modal (from Parent)
        </button>
      </div>
    </div>
  );
}

export default App;
