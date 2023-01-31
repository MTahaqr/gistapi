import React from 'react';
import { GistResult } from '../services/gistService';
// Packages
import styled from 'styled-components';
import { AiFillStar, AiOutlineFork } from 'react-icons/ai';
import { TfiComment } from 'react-icons/tfi';
import { HiCodeBracket } from 'react-icons/hi2';
import { ImFileText2 } from 'react-icons/im';
// Components

import { Link } from './Link';

const Gist = ({
  url,
  forks_url,
  comments_url,
  files,
  owner,
  description,
  created_at,
  updated_at,
}: GistResult): JSX.Element => {
  const avatar = owner?.avatar_url
    ? owner?.avatar_url
    : 'http://www.sheffield.com/wp-content/uploads/2013/06/placeholder.png';

  /**
   * @Render
   */
  return (
    <StyledContainer>
      <HeaderContainer>
        <LeftContainer>
          <Img src={avatar} alt='profile' />
          <HeadText>{owner?.login}</HeadText>
        </LeftContainer>
        <RightContainer>
          <Link href={url} target='_blank'>
            <IconWithText>
              <HiCodeBracket size={18} color='#0366D6' />
              <HeadText>{Object.keys(files)?.length} files</HeadText>
            </IconWithText>
          </Link>
          <Link href={forks_url} target='_blank'>
            <IconWithText>
              <AiOutlineFork size={18} color='#0366D6' />
              <HeadText>forks</HeadText>
            </IconWithText>
          </Link>
          <Link href={comments_url} target='_blank'>
            <IconWithText>
              <TfiComment size={18} color='#0366D6' />
              <HeadText>comments</HeadText>
            </IconWithText>
          </Link>
          <Link href={owner?.starred_url as string} target='_blank'>
            <IconWithText>
              <AiFillStar size={18} color='#0366D6' />
              <HeadText>Stars</HeadText>
            </IconWithText>
          </Link>
        </RightContainer>
      </HeaderContainer>
      <DateContainer>
        <StyledDate>Created at: {new Date(created_at).toLocaleDateString('en-US')}</StyledDate>
        <StyledDate>Last updated: {new Date(updated_at).toLocaleDateString('en-US')}</StyledDate>
      </DateContainer>
      <MainText>{description}</MainText>
      <FilesContainer>
        {Object.keys(files).map((data, index) => (
          <Link href={files[data]['raw_url'] as string} target='_blank' key={index}>
            <IconWithText key={index}>
              <ImFileText2 size={18} color='#0366D6' />
              <FileText>{data}</FileText>
            </IconWithText>
          </Link>
        ))}
      </FilesContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 680px;
  padding-bottom: 15px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  border-bottom: 2px solid #edf0f1;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;
const RightContainer = styled.div`
  display: flex;
`;
const IconWithText = styled.div`
  color: #0366d6;
  padding: 10px 10px;
  align-items: center;
  display: flex;
  float: left;
`;

const DateContainer = styled.div`
  display: flex;
  padding: 5px 0px;
`;

const StyledDate = styled.div`
  margin-right: 15px;
  font-size: 12px;
`;

const MainText = styled.div`
  color: #616465;
  font-size: 15px;
  font-weight: 500;
  padding: 10px 0px;
`;
const FilesContainer = styled.div`
  position: relative;
`;
const FileText = styled.p`
  font-size: 12px;
  margin-left: 8px;
`;
const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
`;
const HeadText = styled.p`
  margin-left: 10px;
  color: #0366d6;
`;

export { Gist };
