import styled from "styled-components";

const StyledTd = styled.td`
  padding: 0.5rem;
  text-align: center;
`;

function CustomerRow({ customer }) {
  const {
    fullName,
    mobile,
    email,
    address,
    city,
    postCode,
    invoiceNumber,
    notes,
  } = customer;

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
    </tr>
  );
}

export default CustomerRow;
