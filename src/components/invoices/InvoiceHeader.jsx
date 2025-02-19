import Logo from "../../assets/nav-logo.png";

function InvoiceHeader() {
  return (
    <>
      <div className="header1">
        {/* column 1 - logo */}
        <div className="logo">
          <img src={Logo} alt="nav logo" />
        </div>

        {/* column 2 - content */}
        <div className="invoice-col2">
          <h3>Tax Invoice</h3>
          <div className="invoiceRow">
            <label>Invoice Number:</label>
            <input type="number" placeholder="invoice number" />
          </div>

          <div className="invoiceRow">
            <label>Invoice Date:</label>
            <input type="date" />
          </div>
        </div>
      </div>

      {/* business details */}

      <div className="business">
        {/* address */}
        <div className="address">
          <div>
            <h4>4/71 Kremzow Road</h4>
            <h4>Brendale, QLD, 4500</h4>
          </div>

          <h4>ABN: 15 644 672 828</h4>
        </div>

        {/* column 2 - contact details */}
        <div className="contact">
          <p>Workshop: 0466 232 206</p>
          <p>Bagi: 0435 267 495</p>
          <p>Harry: 0412 999 187</p>
          <p>Email: admin@highendautocare.com.au</p>
        </div>
      </div>
    </>
  );
}

export default InvoiceHeader;
