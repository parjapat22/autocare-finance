import styled, { css } from "styled-components";

const sizes = {
  small: css`
    padding: 0.4rem 0.8rem;
    font-size: 1.3rem;
  `,

  medium: css`
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
  `,

  large: css`
    padding: 1rem 1.5rem;
    font-size: 1.7rem;
  `,
};

const variations = {
  primary: css`
    background-color: var(--color-indigo-500);
    color: var(--color-indigo-50);

    &:hover {
      background-color: var(--color-indigo-600);
    }
  `,

  secondary: css`
    background-color: var(--color-neutral-50);
    color: var(--color-neutral-500);
    border: 1px solid var(--color-neutral-500);

    &:hover {
      background-color: var(--color-neutral-100);
      color: var(--color-neutral-800);
    }
  `,

  danger: css`
    color: var(--color-red-500);
    background-color: var(--color-red-500);

    &:hover {
      background-color: var(--color-red-500);
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: 1rem;
  transition: var(--transition);
  cursor: pointer;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

export default Button;
