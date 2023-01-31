import { Octokit } from '@octokit/rest';
import { buildApiQueryHook } from './api';
const octokit = new Octokit({ auth: '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' });

export interface GistResult {
  url: string;
  forks_url: string;
  commits_url: string;
  id: string;
  //   node_id: string;
  //   git_pull_url: string;
  //   git_push_url: string;
  comments_url: string;
  //   html_url: string;
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
  //   history?: unknown[] | undefined;
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
