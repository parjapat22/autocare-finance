import styled from "styled-components";

const InputRow = styled.div`
  display: grid;
  grid-template-columns: 1.7fr 1.5fr 1.5fr;
  align-items: center;
  gap: 1rem;

  & label {
    text-align: right;
  }
`;

export default InputRow;
