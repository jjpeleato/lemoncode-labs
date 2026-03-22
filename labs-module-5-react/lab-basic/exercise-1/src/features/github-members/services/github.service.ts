import type {
  GithubMember,
  GithubMemberDetail,
} from "../types/github-api.types";
import type { MembersSearchParams } from "../types/github-state.types";

const GITHUB_API_BASE_URL = "https://api.github.com";

const handleApiError = async (response: Response): Promise<never> => {
  const errorMessages: Record<number, string> = {
    404: "Ups! Organization not found",
    403: "Ups! GitHub API request limit reached. Please wait a few minutes.",
    500: "Internal error on GitHub server",
  };

  const message =
    errorMessages[response.status] ??
    `Unexpected error (code ${response.status})`;

  throw new Error(message);
};

export const getOrgMembers = async (
  params: MembersSearchParams,
): Promise<GithubMember[]> => {
  const { org, page, perPage } = params;
  const url = `${GITHUB_API_BASE_URL}/orgs/${org}/members?page=${page}&per_page=${perPage}`;
  const response = await fetch(url);

  if (!response.ok) {
    await handleApiError(response);
  }

  const data: GithubMember[] = await response.json();
  return data;
};

export const getMemberDetail = async (
  username: string,
): Promise<GithubMemberDetail> => {
  const url = `${GITHUB_API_BASE_URL}/users/${username}`;
  const response = await fetch(url);

  if (!response.ok) {
    await handleApiError(response);
  }

  const data: GithubMemberDetail = await response.json();
  return data;
};
