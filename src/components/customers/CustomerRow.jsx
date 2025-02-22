import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import styled from "styled-components";

import { deleteCustomer } from "../../services/apiCustomers";
import NewCustomerForm from "./NewCustomerForm";

import Button from "../Button";

const StyledTd = styled.td`
  padding: 0.5rem;
  text-align: center;
`;

function CustomerRow({ customer }) {
  const [showForm, setShowForm] = useState(false);

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

  // this hook is used to re-fetch the data upon successfull delete action
  const queryClient = useQueryClient();

  // delete a customer
  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: (id) => deleteCustomer(id),
    // same as above due to inputting same value (id)
    // mutationFn: deleteCustomer,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customers"] });

      toast.success("Cabin deleted successfully");
    },

    onError: (err) => toast.error(err.message),
  });

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
        <StyledTd>{notes}</StyledTd>

        <StyledTd>
          <Button onClick={() => setShowForm(!showForm)} disabled={isDeleting}>
            Edit
          </Button>

          <Button onClick={() => mutate(customerId)} disabled={isDeleting}>
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
