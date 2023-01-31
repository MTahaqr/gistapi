import React from 'react';
import { RotateSpinner } from 'react-spinners-kit';
import styled from 'styled-components';

interface LoaderProp {
  color?: string;
}
const Loader: React.FC<LoaderProp> = ({ color = '#24292e' }) => (
  <StyledContainer>
    <RotateSpinner color={color} />
  </StyledContainer>
);

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export { Loader, LoaderProp };
