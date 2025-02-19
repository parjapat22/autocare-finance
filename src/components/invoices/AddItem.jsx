import { useState } from "react";

function AddItem({ onAddItem, onDeleteItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [uPrice, setUPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  function handleAddItem() {
    if (!description.trim()) {
      setErrorMessage(`Please input data in the Item section.`);
      return;
    }

    // Check if the item contains only alphabetical characters
    if (!/^[a-zA-Z]+$/.test(description)) {
      setErrorMessage(`Item should only contain 
                alphabetical characters.`);
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
    <div className="add-item">
      <div className="new-item">
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>

        <div>
          <label>Unit Price:</label>
          <input
            type="number"
            value={uPrice}
            onChange={(e) => setUPrice(Number(e.target.value))}
          />
        </div>

        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>

        <button onClick={handleAddItem}>Add Item</button>
      </div>

      <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>
    </div>
  );
}

export default AddItem;
