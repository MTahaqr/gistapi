import React from 'react';
// Packages
import styled from 'styled-components';
import { BsGithub } from 'react-icons/bs';
// Components
import { Search } from './Search';

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
  /**
   * @Render
   */
  return (
    <Wrapper>
      <BsGithub size={32} />
      <Search onChange={onChange} />
    </Wrapper>
  );
};

export { Header, HeaderProps };
