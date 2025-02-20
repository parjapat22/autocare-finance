import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      background-color: var(--color-neutral-100);
      padding: 3rem 4rem;
      border: 1px solid var(--color-neutral-400);
      border-radius: 1rem;
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}
    
  overflow: hidden;
`;

export default Form;
