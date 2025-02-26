import Table from "../../styles/Table";

function PriceRow({ item }) {
  const { id: itemId, itemName, description, unitPrice, notes } = item;

  return (
    <Table.Row>
      <Table.Td>{itemName}</Table.Td>
      <Table.Td>{description}</Table.Td>
      <Table.Td>{unitPrice}</Table.Td>
      <Table.Td>{notes}</Table.Td>
    </Table.Row>
  );
}

export default PriceRow;
