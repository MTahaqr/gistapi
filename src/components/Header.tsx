import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line
// @ts-ignore skipping next line because no type was available for react-octicon library
// import Octicon from 'react-octicon';
import { Search } from './Search';
import { BsGithub } from 'react-icons/bs';

const Wrapper = styled.div`
  background-color: #24292e;
  position: sticky;
  top: 0px;
  width: 100%;
  color: #ffffff;
  z-index: 32;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;

interface HeaderProps {
  onChange: (value: string) => void;
}
const Header: React.FC<HeaderProps> = ({ onChange }) => {
  return (
    <Wrapper>
      <BsGithub size={32} />
      <Search onChange={onChange} />
    </Wrapper>
  );
};

export { Header, HeaderProps };
