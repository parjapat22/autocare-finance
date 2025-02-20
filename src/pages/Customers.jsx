import CustomerTable from "../components/customers/CustomerTable";

import Row from "../styles/Row";
import Heading from "../styles/Heading";

function Customers() {
  return (
    <section>
      <div className="container">
        <Row type="horizontal">
          <Heading as="h1">All Customers</Heading>
          <p>filter / sort</p>
        </Row>

        <Row type="vertical">
          <CustomerTable />
        </Row>
      </div>
    </section>
  );
}

export default Customers;
