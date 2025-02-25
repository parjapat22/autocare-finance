import { createPortal } from "react-dom";
import styled from "styled-components";
import { HiXMark } from "react-icons/hi2";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-neutral-50);
  /* border-radius: var(--border-radius-lg); */
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--color-backdrop);
  backdrop-filter: blur(2px);
  z-index: 1;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  /* border-radius: var(--border-radius-sm); */
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  cursor: pointer;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    color: var(--color-red-500);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-500);
  }
`;

function Modal({ children, onClose }) {
  return createPortal(
    <Overlay>
      <StyledModal>
        <Button onClick={onClose}>
          <HiXMark />
        </Button>

        <div>{children}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

export default Modal;
