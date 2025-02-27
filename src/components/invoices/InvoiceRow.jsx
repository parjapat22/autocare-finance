import { useDeleteInvoice } from "./useDeleteInvoice";

import Table from "../../styles/Table";
import Modal from "../../styles/Modal";
import ConfirmDelete from "../../styles/ConfirmDelete";
import Button from "../Button";

import { HiTrash } from "react-icons/hi2";

function InvoiceRow({ invoice }) {
  const { isDeleting, deleteInvoice } = useDeleteInvoice();

  const {
    id: invoiceId,
    invoiceNumber,
    invoiceDate,
    vehicleModel,
    rego,
    customerName,
    amount,
    paymentStatus,
    notes,
  } = invoice;

  return (
    <Table.Row>
      <Table.Td>{invoiceNumber}</Table.Td>
      <Table.Td>{invoiceDate}</Table.Td>
      <Table.Td>{vehicleModel}</Table.Td>
      <Table.Td>{rego}</Table.Td>
      <Table.Td>{customerName}</Table.Td>
      <Table.Td>${amount}</Table.Td>
      <Table.Td>{paymentStatus}</Table.Td>
      <Table.Td>{notes}</Table.Td>

      {/* actions column */}
      <Table.Td>
        <Modal>
          {/* delete customer */}
          <Modal.Open modalName="delete">
            <Button disabled={isDeleting}>
              <HiTrash />
            </Button>
          </Modal.Open>

          <Modal.Window windowName="delete">
            <ConfirmDelete
              resourceName="invoice"
              disabled={isDeleting}
              onConfirm={() => deleteInvoice(invoiceId)}
            />
          </Modal.Window>
        </Modal>
      </Table.Td>
    </Table.Row>
  );
}

export default InvoiceRow;
