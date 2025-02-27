import { useState } from "react";
import styled from "styled-components";

import Row from "../../styles/Row";
import InputRow from "../../styles/InputRow";
import Input from "../../styles/Input";
import Button from "../../styles/Button";

const Textarea = styled.textarea`
  width: 50rem;
  padding: 1rem;
  border: 1px solid var(--color-neutral-300);
  border-radius: 1rem;
`;

const Error = styled.span`
  color: var(--color-red-500);
  font-size: 1.5rem;
`;

function AddItem({ onAddItem, onDeleteItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [uPrice, setUPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  function handleAddItem() {
    if (!description.trim()) {
      setErrorMessage("This field is required");
      return;
    }

    const newItem = { description, quantity, uPrice, amount };
    onAddItem(newItem);

    setDescription("");
    setQuantity(1);
    setUPrice(0);
    setAmount(0);
    setErrorMessage("");
  }

  return (
    <Row type="vertical">
      <Row type="horizontal">
        <InputRow>
          <label>Quantity</label>
          <Input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </InputRow>

        <InputRow>
          <label>Unit Price</label>
          <Input
            type="number"
            value={uPrice}
            onChange={(e) => setUPrice(Number(e.target.value))}
          />
        </InputRow>

        <InputRow>
          <label>Amount</label>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </InputRow>
      </Row>

      <Row type="horizontal">
        <Row type="horizontal">
          <label>Description</label>
          <Textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Error>{errorMessage}</Error>
        </Row>

        <Button $size="medium" $variation="primary" onClick={handleAddItem}>
          Add item
        </Button>
      </Row>
    </Row>
  );
}

export default AddItem;
