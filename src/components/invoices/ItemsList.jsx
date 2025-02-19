function ItemsList({ items, onDeleteItem, subTotal }) {
  const gst = Number(subTotal * 0.1);
  const total = Number(subTotal + gst);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th style={{ width: "60%" }}>Description</th>
            <th style={{ width: "10%" }}>Qty</th>
            <th style={{ width: "12%" }}>Unit Price</th>
            <th style={{ width: "18%" }}>Amount</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="item">
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>{item.uPrice.toFixed(2)}</td>
              <td>{item.amount.toFixed(2)}</td>
              <td>
                <button onClick={() => onDeleteItem(index)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="payment-total">
        {/* column 1 - payment info */}
        <div className="payment">
          <h4>Payment Info:</h4>

          <div className="row">
            <p>Account Name:</p>
            <p>Highend Autocare</p>
          </div>

          <div className="row">
            <p>BSB:</p>
            <p>064 164</p>
          </div>

          <div className="row">
            <p>Account Number:</p>
            <p>1082 1775</p>
          </div>
        </div>

        {/* column 2 - items total */}
        <div className="total">
          <div className="row">
            <h4>Sub Total</h4>
            <p>${subTotal.toFixed(2)}</p>
          </div>

          <div className="row">
            <h4>GST</h4>
            <p>${gst.toFixed(2)}</p>
          </div>

          <div className="row">
            <h4>Total</h4>
            <p>${total.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemsList;
