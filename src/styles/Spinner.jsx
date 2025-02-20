import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  width: 5rem;
  height: 5rem;
  margin-inline: auto;
  display: block;
  border: 0.5rem solid var(--color-primary);
  border-radius: 50%;
  border-bottom-color: var(--color-red-500);
  animation: ${rotate} 1.5s infinite linear;
`;

export default Spinner;
