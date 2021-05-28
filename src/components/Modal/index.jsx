import React, { useEffect } from 'react';
import {
  ModalHeader,
  CloseButton,
  ModalOverlay,
  ModalContent,
  ModalContainer,
  ModalBody,
} from './Modal.styles';

import Form from '../Form';
import { Box } from '../Layout';
import { CloseIcon } from '../svg';

import headerIMG from '../../assets/header.png';
import footerIMG from '../../assets/footer.png';

const Modal = ({ isOpen = true, setIsOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    if (!isOpen) {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <ModalContainer isopen={isOpen}>
      <ModalOverlay onClick={() => setIsOpen(false)} />
      <ModalBody>
        <ModalHeader>
          <CloseButton onClick={() => setIsOpen(false)}>
            <CloseIcon width={18} />
          </CloseButton>
        </ModalHeader>
        <Box mb={10}>
          <img src={headerIMG} width="100%" height="100%" />
        </Box>
        <ModalContent>
          <Form setIsOpen={setIsOpen} />
        </ModalContent>
        <Box mb={10}>
          <img src={footerIMG} width="100%" height="100%" />
        </Box>
      </ModalBody>
    </ModalContainer>
  );
};

export default Modal;
