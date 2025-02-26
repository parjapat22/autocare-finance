import NewPriceItemForm from "./NewPriceItemForm";

import Table from "../../styles/Table";
import Modal from "../../styles/Modal";
import Button from "../Button";

import { HiPencil } from "react-icons/hi2";

function PriceRow({ item }) {
  const { id: itemId, itemName, description, unitPrice, notes } = item;

  return (
    <Table.Row>
      <Table.Td>{itemName}</Table.Td>
      <Table.Td>{description}</Table.Td>
      <Table.Td>{unitPrice}</Table.Td>
      <Table.Td>{notes.trim() ? notes : <span>&mdash;</span>}</Table.Td>

      <Table.Td>
        <Modal>
          {/* edit item */}
          <Modal.Open modalName="edit">
            <Button>
              <HiPencil />
            </Button>
          </Modal.Open>

          <Modal.Window windowName="edit">
            <NewPriceItemForm priceToEdit={item} />
          </Modal.Window>
        </Modal>
      </Table.Td>
    </Table.Row>
  );
}

export default PriceRow;
