import styled from "styled-components";

import PricesTable from "../components/prices/PricesTable";

import Row from "../styles/Row";
import Heading from "../styles/Heading";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function Prices() {
  return (
    <section>
      <StyledDiv className="container">
        <Row type="horizontal">
          <Heading as="h1">Rate List</Heading>
        </Row>

        <Row type="vertical">
          <PricesTable />
        </Row>
      </StyledDiv>
    </section>
  );
}

export default Prices;
