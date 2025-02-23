import { useState } from "react";
import styled from "styled-components";

import { useAddCustomer } from "./useAddCustomer";
import { useDeleteCustomer } from "./useDeleteCustomer";
import NewCustomerForm from "./NewCustomerForm";

import Button from "../Button";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";

const StyledTd = styled.td`
  padding: 0.5rem;
  text-align: center;
`;

function CustomerRow({ customer }) {
  const [showForm, setShowForm] = useState(false);
  // custom hooks
  const { isAdding, addCustomer } = useAddCustomer();
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

  function handleDuplicate() {
    addCustomer({
      fullName: `copy of ${customer.fullName}`,
      mobile,
      email,
      address,
      city,
      postcode,
      invoiceFile,
      notes,
    });
  }

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

        {/* copy customer */}
        <StyledTd>
          <Button
            onClick={() => handleDuplicate()}
            disabled={isAdding || isDeleting}
          >
            <HiSquare2Stack />
          </Button>

          {/* edit customer */}
          <Button
            onClick={() => setShowForm(!showForm)}
            disabled={isAdding || isDeleting}
          >
            <HiPencil />
          </Button>

          {/* delete customer */}
          <Button
            onClick={() => deleteCustomer(customerId)}
            disabled={isAdding || isDeleting}
          >
            <HiTrash />
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
