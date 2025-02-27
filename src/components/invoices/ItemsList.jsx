import Table from "../../styles/Table";
import Row from "../../styles/Row";
import Button from "../../styles/Button";

function ItemsList({ items, onDeleteItem, total }) {
  const gst = Number(total / 11);
  const subTotal = Number(total - gst);

  return (
    <Row type="vertical">
      <Table role="table">
        <Table.Header>
          <Table.Row>
            <Table.Th>Description</Table.Th>
            <Table.Th>Qty</Table.Th>
            <Table.Th>Unit Price</Table.Th>
            <Table.Th>Amount</Table.Th>
            <Table.Th></Table.Th>
          </Table.Row>
        </Table.Header>

        <tbody>
          {items.map((item, index) => (
            <Table.Row key={index}>
              <Table.Td>{item.description}</Table.Td>
              <Table.Td>{item.quantity}</Table.Td>
              <Table.Td>{item.uPrice.toFixed(2)}</Table.Td>
              <Table.Td>{item.amount.toFixed(2)}</Table.Td>

              <Table.Td>
                <Button
                  $size="small"
                  $variation="danger"
                  onClick={() => onDeleteItem(index)}
                >
                  X
                </Button>
              </Table.Td>
            </Table.Row>
          ))}
        </tbody>
      </Table>

      {/* totals */}
      <Row type="horizontal">
        <div>
          <h4>Sub Total</h4>
          <p>${subTotal.toFixed(2)}</p>
        </div>

        <div>
          <h4>GST</h4>
          <p>${gst.toFixed(2)}</p>
        </div>

        <div>
          <h4>Total</h4>
          <p>${total.toFixed(2)}</p>
        </div>
      </Row>
    </Row>
  );
}

export default ItemsList;
