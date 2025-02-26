import { useAddCustomer } from "./useAddCustomer";
import { useDeleteCustomer } from "./useDeleteCustomer";
import NewCustomerForm from "./NewCustomerForm";

import Table from "../../styles/Table";
import Modal from "../../styles/Modal";
import ConfirmDelete from "../../styles/ConfirmDelete";
import Button from "../Button";

import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";

function CustomerRow({ customer }) {
  // custom hooks
  const { isAdding, addCustomer } = useAddCustomer();
  const { isDeleting, deleteCustomer } = useDeleteCustomer();

  const {
    id: customerId,
    fullName,
    mobile,
    email,
    address,
    city,
    postcode,
    invoiceFile,
    notes,
  } = customer;

  function handleDuplicate() {
    addCustomer({
      fullName: `copy of ${customer.fullName}`,
      mobile,
      email,
      address,
      city,
      postcode,
      invoiceFile,
      notes,
    });
  }

  return (
    <Table.Row>
      <Table.Td>{fullName}</Table.Td>
      <Table.Td>{mobile}</Table.Td>
      <Table.Td>{email}</Table.Td>
      <Table.Td>{address}</Table.Td>
      <Table.Td>{city}</Table.Td>
      <Table.Td>{postcode}</Table.Td>

      <Table.Td>
        {invoiceFile?.includes("invoices-files") ? (
          <a href={invoiceFile} target="_blank" rel="noopener noreferrer">
            {invoiceFile.split("files/")[1].split(".")[0]}
          </a>
        ) : (
          invoiceFile
        )}
      </Table.Td>

      <Table.Td>{notes.trim() ? notes : <span>&mdash;</span>}</Table.Td>

      {/* actions column */}
      <Table.Td>
        {/* copy customer */}
        <Button
          onClick={() => handleDuplicate()}
          disabled={isAdding || isDeleting}
        >
          <HiSquare2Stack />
        </Button>

        <Modal>
          {/* edit customer */}
          <Modal.Open modalName="edit">
            <Button disabled={isAdding || isDeleting}>
              <HiPencil />
            </Button>
          </Modal.Open>

          <Modal.Window windowName="edit">
            <NewCustomerForm customerToEdit={customer} />
          </Modal.Window>

          {/* delete customer */}
          <Modal.Open modalName="delete">
            <Button disabled={isAdding || isDeleting}>
              <HiTrash />
            </Button>
          </Modal.Open>

          <Modal.Window windowName="delete">
            <ConfirmDelete
              resourceName="customer"
              disabled={isDeleting}
              onConfirm={() => deleteCustomer(customerId)}
            />
          </Modal.Window>
        </Modal>
      </Table.Td>
    </Table.Row>
  );
}

export default CustomerRow;
