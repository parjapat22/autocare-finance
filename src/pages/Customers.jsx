import styled from "styled-components";

import CustomersTable from "../components/customers/CustomersTable";

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
          <CustomersTable />
        </Row>
      </StyledDiv>
    </section>
  );
}

export default Customers;
