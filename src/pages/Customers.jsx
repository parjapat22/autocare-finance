import styled from "styled-components";

import CustomerTable from "../components/customers/CustomerTable";
import AddCustomer from "../components/customers/AddCustomer";

import Row from "../styles/Row";
import Heading from "../styles/Heading";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function Customers() {
  return (
    <section>
      <StyledDiv className="container">
        <Row type="horizontal">
          <Heading as="h1">All Customers</Heading>
          <p>filter / sort</p>
        </Row>

        <Row type="vertical">
          <CustomerTable />
          <AddCustomer />
        </Row>
      </StyledDiv>
    </section>
  );
}

export default Customers;
