import type { GithubMember, GithubMemberDetail } from "./github-api.types";

export interface OrgMembersState {
  members: GithubMember[];
  isLoading: boolean;
  error: string | null;
  totalPages: number;
  currentPage: number;
  hasSearched: boolean;
}

export interface MemberDetailState {
  member: GithubMemberDetail | null;
  isLoading: boolean;
  error: string | null;
}

export interface MembersSearchParams {
  org: string;
  page: number;
  perPage: number;
}
