import { useState } from "react";
import styled from "styled-components";

import CustomerTable from "../components/customers/CustomerTable";
import NewCustomerForm from "../components/customers/NewCustomerForm";
import Button from "../components/Button";

import Row from "../styles/Row";
import Heading from "../styles/Heading";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function Customers() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section>
      <StyledDiv className="container">
        <Row type="horizontal">
          <Heading as="h1">All Customers</Heading>
          <p>filter / sort</p>
        </Row>

        <Row type="vertical">
          <CustomerTable />

          <Button onClick={() => setShowForm(!showForm)}>
            Add new customer
          </Button>

          {showForm && <NewCustomerForm />}
        </Row>
      </StyledDiv>
    </section>
  );
}

export default Customers;
