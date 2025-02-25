import NewCustomerForm from "./NewCustomerForm";

import Button from "../Button";
import Modal from "../../styles/Modal";

// after compound component - Modal
function AddCustomer() {
  return (
    <div>
      <Modal>
        <Modal.Open modalName="customer-form">
          <Button>Add new customer</Button>
        </Modal.Open>

        <Modal.Window windowName="customer-form">
          <NewCustomerForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCustomer;

// before compound component
// function AddCustomer() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal(!isOpenModal)}>
//         Add new customer
//       </Button>

//       {/* {isOpenModal && <NewCustomerForm />} */}
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <NewCustomerForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }
