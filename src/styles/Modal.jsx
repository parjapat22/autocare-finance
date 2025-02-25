import { useState, createContext, useContext, cloneElement } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import { useOutsideClick } from "../hooks/useOutsideClick";

import { HiXMark } from "react-icons/hi2";

const StyledModal = styled.div`
  background-color: var(--color-neutral-50);
  padding: 3.2rem 4rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid var(--color-indigo-500);
  /* border-radius: var(--border-radius-lg); */
`;

const Overlay = styled.div`
  background-color: var(--color-backdrop);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(2px);
  z-index: 1;
`;

const Button = styled.button`
  background: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    color: var(--color-red-500);
  }

  & svg {
    width: 2.5rem;
    height: 2.5rem;
    color: var(--color-grey-500);
  }
`;

// 1. create a context
const ModalContext = createContext();

// 2. create parent component
function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const open = setOpenName;
  const close = () => setOpenName("");

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

// 3. create child components to implement the common task using useContext
function Open({ children, openModal }) {
  const { open } = useContext(ModalContext);

  // clone element clones the component and add properties to it
  return cloneElement(children, { onClick: () => open(openModal) });
}

function Window({ children, windowName }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (windowName !== openName) return null;

  // create portal puts component on top of dom tree while at the correct position in component tree
  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>
          <HiXMark />
        </Button>

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

// 4. add child components as properties to parent component
Modal.Open = Open;
Modal.Window = Window;

export default Modal;
