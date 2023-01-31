import React from 'react';
// types
import { GistResult } from '../services/gistService';
import styled from 'styled-components';
// Components

import { Gist } from './Gist';

const GistList = ({ gistList }: { gistList: GistResult[] }) => {
  /**
   * @Render
   */
  return (
    <StyledContainer>
      {gistList?.map((data, index) => (
        <Gist key={index} {...data} />
      ))}
    </StyledContainer>
  );
};

export { GistList };

const StyledContainer = styled.div``;
