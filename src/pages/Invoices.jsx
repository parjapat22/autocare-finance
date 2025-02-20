import Invoice from "../components/invoices/Invoice";

import Heading from "../styles/Heading";

function Invoices() {
  return (
    <section>
      <div className="container">
        <Heading as="h1">Create Invoice</Heading>
        <Invoice />
      </div>
    </section>
  );
}

export default Invoices;
