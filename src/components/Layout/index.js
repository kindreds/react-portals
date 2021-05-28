import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  margin-top: ${({ mt }) => `${mt}px`};
  justify-content: ${({ justify }) => justify};
`;

export const Box = styled.div`
  margin-bottom: ${({ mb }) => `${mb}px`};
`;

export const Grid = styled.div`
  display: grid;
  gap: ${({ gap }) => `${gap}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  grid-template-columns: ${({ templateColumns }) => templateColumns};

  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;
