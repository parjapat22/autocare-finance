import styled from "styled-components";

const FormSection = styled.section`
  padding: 1rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-neutral-200);
  }
`;

export default FormSection;
