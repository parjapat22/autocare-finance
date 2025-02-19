function CustomerDetails() {
  return (
    <div className="cust-details">
      <div className="to">
        <h4>To:</h4>
      </div>

      <div className="customer">
        {/* column 1 */}
        <div className="cust-address">
          <input type="text" placeholder="customer name" />
          <input type="text" placeholder="address line 1" />
          <input type="text" placeholder="address line 2" />

          <div className="city">
            <input type="text" placeholder="city" />
            <input type="text" placeholder="state" />
          </div>

          <div className="mobile">
            <input type="text" placeholder="post code" />
            <input type="number" placeholder="mobile" />
          </div>
        </div>

        {/* column 2 */}
        <div className="car">
          <div className="carRow">
            <label>Make:</label>
            <input type="text" placeholder="make" />
          </div>

          <div className="carRow">
            <label>Model:</label>
            <input type="text" placeholder="model" />
          </div>

          <div className="carRow">
            <label>Rego:</label>
            <input type="text" placeholder="rego" />
          </div>

          <div className="carRow">
            <label>Odometer:</label>
            <input type="number" placeholder="odometer" />
          </div>

          <div className="carRow">
            <label>Vehicle Type:</label>
            <input type="number" placeholder="car / ute / truck" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDetails;
