import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  z-index: 9999;
  opacity: ${({ isopen }) => (isopen ? '1' : '0')};
  max-width: ${({ isopen }) => (isopen ? '100vw' : '0')};

  transition: opacity 1s ease;
`;

export const ModalOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 89;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalHeader = styled.div`
  display: flex;
  /* margin-block: 0.5rem; */
  justify-content: flex-end;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  border: 0;
  outline: 0;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 3px;
  align-items: center;
  justify-content: center;

  transition: background-color 0.3s linear;

  &:hover {
    background-color: #e2e2e2;
  }
`;

export const ModalBody = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  margin: auto;

  width: 600px;
  max-height: 95vh;
  overflow-y: scroll;
  overflow-x: hidden;

  border-radius: 5px;
  background: #fff;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #008fff;
    border-radius: 5px;
  }

  @media screen and (max-width: 650px) {
    width: 95%;
  }
`;

export const ModalContent = styled.div`
  padding: 0 2rem;
`;
