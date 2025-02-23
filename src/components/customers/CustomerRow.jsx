import { useState } from "react";
import styled from "styled-components";

import { useDeleteCustomer } from "./useDeleteCustomer";
import NewCustomerForm from "./NewCustomerForm";

import Button from "../Button";

const StyledTd = styled.td`
  padding: 0.5rem;
  text-align: center;
`;

function CustomerRow({ customer }) {
  const [showForm, setShowForm] = useState(false);
  // custom hook
  const { isDeleting, deleteCustomer } = useDeleteCustomer();

  const {
    id: customerId,
    fullName,
    mobile,
    email,
    address,
    city,
    postcode,
    invoiceFile,
    notes,
  } = customer;

  return (
    <>
      <tr>
        <StyledTd>{fullName}</StyledTd>
        <StyledTd>{mobile}</StyledTd>
        <StyledTd>{email}</StyledTd>
        <StyledTd>{address}</StyledTd>
        <StyledTd>{city}</StyledTd>
        <StyledTd>{postcode}</StyledTd>
        <StyledTd>
          {invoiceFile?.includes("invoices-files") ? (
            <a href={invoiceFile} target="_blank" rel="noopener noreferrer">
              {invoiceFile.split("files/")[1].split(".")[0]}
            </a>
          ) : (
            invoiceFile
          )}
        </StyledTd>
        <StyledTd>{notes.trim() ? notes : <span>&mdash;</span>}</StyledTd>

        <StyledTd>
          <Button onClick={() => setShowForm(!showForm)} disabled={isDeleting}>
            Edit
          </Button>

          <Button
            onClick={() => deleteCustomer(customerId)}
            disabled={isDeleting}
          >
            Delete
          </Button>
        </StyledTd>
      </tr>

      <tr>
        <td>{showForm && <NewCustomerForm customerToEdit={customer} />}</td>
      </tr>
    </>
  );
}

export default CustomerRow;
