import styled from "styled-components";

const StyledFormRow = styled.div`
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 24rem 1fr 1.5fr;
  align-items: center;
  gap: 2rem;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-neutral-200);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
  }
`;

const Error = styled.span`
  color: var(--color-red-500);
  font-size: 1.5rem;
`;

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <label htmlFor={children.props.id}>{label}</label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
