import React, { useEffect, useState } from 'react';
import { GistResult } from '../services/gistService';
import styled from 'styled-components';
import { Gist } from './Gist';

const GistList = ({ gistList }: { gistList: GistResult[] }) => {
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
