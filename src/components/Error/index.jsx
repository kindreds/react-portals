import React from 'react';
import styled from 'styled-components';
import { Flex } from '../Layout';
import { CloseIcon } from '../svg';

const Message = styled.small`
  color: #f98b99;
  margin-left: 5px;
`;

const Error = ({ children }) => {
  return (
    <Flex mt={3}>
      <CloseIcon width={10} fill="#F98B99" />
      <Message>{children}</Message>
    </Flex>
  );
};

export default Error;
