import Table from "../../styles/Table";

function InvoiceRow({ invoice }) {
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
    </Table.Row>
  );
}

export default InvoiceRow;
