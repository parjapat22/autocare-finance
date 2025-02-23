import styled from "styled-components";

import { useCustomers } from "./useCustomers";
import CustomerRow from "./CustomerRow";

import Spinner from "../../styles/Spinner";

const StyledTable = styled.table`
  background-color: var(--color-neutral-100);
  width: 100%;
  border-collapse: collapse;
  border: 1px solid var(--color-neutral-400);

  & tr:nth-child(even) {
    background-color: var(--color-neutral-200);
  }

  & tr:hover {
    background-color: var(--color-indigo-100);
  }
`;

const StyledTh = styled.th`
  background-color: var(--color-neutral-300);
  padding: 0.5rem;
  text-align: center;
`;

// 1. fetch data from database - see services/apiCustomers.js
// 2. display data on interface
function CustomerTable() {
  // moved to custom hook - useCustomers.js
  // const {
  //   isLoading,
  //   data: customers,
  //   error,
  // } = useQuery({
  //   queryKey: ["customers"],
  //   queryFn: getCustomers,
  // });

  const { isLoading, error, customers } = useCustomers();

  if (isLoading) return <Spinner />;

  return (
    <StyledTable role="table">
      <thead>
        <tr role="row">
          <StyledTh>Name</StyledTh>
          <StyledTh>Mobile</StyledTh>
          <StyledTh>Email</StyledTh>
          <StyledTh>Address</StyledTh>
          <StyledTh>City</StyledTh>
          <StyledTh>Postcode</StyledTh>
          <StyledTh>Invoice</StyledTh>
          <StyledTh>Notes</StyledTh>
          <StyledTh>Actions</StyledTh>
        </tr>
      </thead>

      <tbody>
        {customers.map((customer) => (
          <CustomerRow customer={customer} key={customer.id} />
        ))}
      </tbody>
    </StyledTable>
  );
}

export default CustomerTable;
