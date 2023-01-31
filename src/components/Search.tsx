import React, { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line
// @ts-ignore skipping next line because no type was available for react-octicon library
// import Octicon from 'react-octicon';
import useDebounce from '../Hooks/useDebounce';
import { AiOutlineSearch } from 'react-icons/ai';

interface SearchProps {
  onChange: (value: string) => void;
}
const Search = ({ onChange }: SearchProps) => {
  const [searchText, setSearchText] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value || ''.trim());
  };

  const debouncedSearchVal = useDebounce(searchText, 500);

  useEffect(() => {
    onChange(debouncedSearchVal);
  }, [debouncedSearchVal, onChange]);

  return (
    <Wrapper>
      <InputBox>
        <AiOutlineSearch color='black' size={20} />
        <Input
          value={searchText}
          placeholder='Search Gists for the username'
          onChange={handleChange}
        />
      </InputBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus {
    outline: 0;
  }
`;

export { Search, SearchProps };
