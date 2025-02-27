import styled from "styled-components";

import InvoicesTable from "../components/invoices/InvoicesTable";

import Row from "../styles/Row";
import Heading from "../styles/Heading";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function Invoices() {
  return (
    <section>
      <StyledDiv className="container">
        <Row type="horizontal">
          <Heading as="h1">All Invoices</Heading>
          <p>filter / sort</p>
        </Row>

        <Row type="vertical">
          <InvoicesTable />
        </Row>
      </StyledDiv>
    </section>
  );
}

export default Invoices;
