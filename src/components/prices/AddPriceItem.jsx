import NewPriceItemForm from "./NewPriceItemForm";

import Button from "../Button";
import Modal from "../../styles/Modal";

// after compound component - Modal
function AddPriceItem() {
  return (
    <div>
      <Modal>
        <Modal.Open modalName="price-item-form">
          <Button>Add item</Button>
        </Modal.Open>

        <Modal.Window windowName="price-item-form">
          <NewPriceItemForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddPriceItem;
