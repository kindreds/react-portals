import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  border: 0;
  outline: 0;
  cursor: pointer;
  color: #ffffff;
  background-color: #00bfff;
  font-family: 'RobotoRegular', sans-serif;
  font-size: ${({ isBig }) => (isBig ? '16px' : '15px')};
  border-radius: ${({ isBig }) => (isBig ? '3px' : '5px')};
  padding: ${({ isBig }) => (isBig ? '19px 57.5px' : '14px 21px')};
  font-family: ${({ isBig }) => (isBig ? 'RobotoMedium' : 'RobotoRegular')},
    sans-serif;

  transition: all 0.3s ease;

  &:hover {
    color: #ffffff;
    background-color: #008fff;
  }
`;

const Button = ({ children, isBig, ...props }) => {
  return (
    <ButtonContainer isBig={isBig} {...props}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
