import { useState } from "react";
import InvoiceHeader from "./InvoiceHeader";
import CustomerDetails from "./CustomerDetails";
import AddItem from "./AddItem";
import ItemsList from "./ItemsList";
import "./Invoice.css";

function Invoice() {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const calculateSubAmount = () => {
    return items.reduce((sum, item) => sum + item.amount, 0);
  };

  return (
    <section className="invoice">
      <InvoiceHeader />
      <CustomerDetails />
      <AddItem onAddItem={handleAddItem} />
      <ItemsList
        items={items}
        onDeleteItem={handleDeleteItem}
        subTotal={calculateSubAmount()}
      />

      <h4>** Thank you for choosing Highend Autocare **</h4>
    </section>
  );
}

export default Invoice;
