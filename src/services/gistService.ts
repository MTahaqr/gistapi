import { Octokit } from '@octokit/rest';
import { buildApiQueryHook } from './api';
const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_TOKEN });

export interface GistResult {
  url: string;
  forks_url: string;
  commits_url: string;
  id: string;
  comments_url: string;
  created_at: string;
  updated_at: string;
  description?: string | null;
  files: {
    [key: string]: {
      filename?: string | undefined;
      type?: string | undefined;
      language?: string | undefined;
      raw_url?: string | undefined;
      size?: number | undefined;
    };
  };
  owner?: {
    avatar_url: string;
    starred_url: string;
    login: string;
  };
}

interface usePublicGistsParams {
  perPage: number;
  pageNum: number;
}
interface useGistForUserParams {
  perPage: number;
  pageNum: number;
  userName: string;
}

export const getPublicGists = ({ perPage, pageNum }: usePublicGistsParams) =>
  octokit.gists.listPublic({ page: pageNum, per_page: perPage });

export const getGistForUser = ({
  userName,
  perPage,
  pageNum,
}: {
  userName: string;
  perPage: number;
  pageNum: number;
}) => octokit.gists.listForUser({ username: userName, page: pageNum, per_page: perPage });

export const usePublicGists = buildApiQueryHook<usePublicGistsParams, GistResult[]>(
  (params) => ['publicGist', params],
  (params) => getPublicGists({ ...params }),
);

export const useGistForUser = buildApiQueryHook<useGistForUserParams, GistResult[]>(
  (params) => ['gistForUser', params],
  (params) => getGistForUser({ ...params }),
);
