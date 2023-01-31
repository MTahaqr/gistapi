import React, { useCallback, useEffect, useState } from 'react';
// Services
import { useGistForUser, usePublicGists } from '../services/gistService';
// Packages
import styled from 'styled-components';
// Components
import { Header } from '../components/Header';
import { GistList } from '../components/GistList';
import { Loader } from '../components/Loader';
import { useRef } from 'react';

const GistListPage: React.FC = () => {
  //state for maiting gistlist page data
  const [searchValue, setSearchValue] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const scrollableRef = useRef<HTMLDivElement>(null);

  // const for publist gist data
  const { data: publicGistList, isLoading: isLoadingPublistGist } = !searchValue
    ? usePublicGists({ perPage: 10, pageNum: page })
    : {
        data: [],
        isLoading: false,
      };

  // const for search gistlist gist data
  const { data: searchGistList, isLoading: isLoadingSearchGistList } = searchValue
    ? useGistForUser({ perPage: 10, pageNum: page, userName: searchValue }, { retry: false })
    : {
        data: [],
        isLoading: false,
      };
  /**
   * @Methods
   */
  const handleScroll = () => {
    console.log(
      `${window.innerHeight + document.documentElement.scrollTop}!== ${
        document.documentElement.offsetHeight
      }`,
    );
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      !hasMore
    )
      return;
    setPage((prevPage) => prevPage + 1);
  };

  console.log({ page });

  /**
   * @Effects
   */
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * @Methods
   */
  const onSearch = useCallback(
    (value: string) => {
      setSearchValue(value);
    },
    [searchValue],
  );

  const isLoading = !!(searchValue ? isLoadingSearchGistList : isLoadingPublistGist);
  const list = searchValue ? searchGistList : publicGistList;

  /**
   * @Render
   */
  return (
    <StyledContainer>
      <Header onChange={onSearch} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {!list?.length ? (
            <ImgContainer>
              <NoDataImg src='https://streamnow.appswamy.com/assets/img/no-data-found.png' />
            </ImgContainer>
          ) : (
            <GistListContainer ref={scrollableRef}>
              <GistList gistList={list!} />
            </GistListContainer>
          )}
        </>
      )}
    </StyledContainer>
  );
};

export default GistListPage;

const StyledContainer = styled.div`
  height: 100vh;
`;
const GistListContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: auto;
`;

const ImgContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoDataImg = styled.img`
  width: 500px;
  height: 500px;
`;
