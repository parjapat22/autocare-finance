import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import styled from "styled-components";

import { deleteCustomer } from "../../services/apiCustomers";
import Button from "../Button";

const StyledTd = styled.td`
  padding: 0.5rem;
  text-align: center;
`;

function CustomerRow({ customer }) {
  const {
    id: cabinId,
    fullName,
    mobile,
    email,
    address,
    city,
    postCode,
    invoiceNumber,
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
    <tr>
      <StyledTd>{fullName}</StyledTd>
      <StyledTd>{mobile}</StyledTd>
      <StyledTd>{email}</StyledTd>
      <StyledTd>{address}</StyledTd>
      <StyledTd>{city}</StyledTd>
      <StyledTd>{postCode}</StyledTd>
      <StyledTd>{invoiceNumber}</StyledTd>
      <StyledTd>{notes}</StyledTd>

      <StyledTd>
        <Button onClick={() => mutate(cabinId)} disabled={isDeleting}>
          Delete
        </Button>
      </StyledTd>
    </tr>
  );
}

export default CustomerRow;
