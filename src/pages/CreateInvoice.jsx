import styled from "styled-components";

import NewInvoiceForm from "../components/invoices/NewInvoiceForm";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function CreateInvoice() {
  return (
    <section>
      <StyledDiv className="container">
        <NewInvoiceForm />
      </StyledDiv>
    </section>
  );
}

export default CreateInvoice;
