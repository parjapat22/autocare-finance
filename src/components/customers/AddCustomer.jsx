import { useState } from "react";
import NewCustomerForm from "./NewCustomerForm";

import Button from "../Button";
import Modal from "../../styles/Modal";

function AddCustomer() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpenModal(!isOpenModal)}>
        Add new customer
      </Button>

      {/* {isOpenModal && <NewCustomerForm />} */}
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <NewCustomerForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
}

export default AddCustomer;
