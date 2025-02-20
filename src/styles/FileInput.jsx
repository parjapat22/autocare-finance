import styled from "styled-components";

const FileInput = styled.input.attrs({ type: "file" })`
  font-size: 1.5rem;

  &::file-selector-button {
    background-color: var(--color-indigo-500);
    color: var(--color-indigo-50);
    margin-right: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 1rem;
    transition: var(--transition);
    cursor: pointer;

    &:hover {
      background-color: var(--color-indigo-600);
    }
  }
`;

export default FileInput;
