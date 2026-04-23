import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMemberDetail } from "../services/github.service";
import type { MemberDetailState } from "../types/github-state.types";

export const useMemberDetail = () => {
  const { username } = useParams<{ username: string }>();

  const [state, setState] = useState<MemberDetailState>({
    member: null,
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    if (!username) return;

    const fetchDetail = async () => {
      setState((prev) => ({ ...prev, isLoading: true, error: null }));

      try {
        const member = await getMemberDetail(username);
        setState({ member, isLoading: false, error: null });
      } catch (err) {
        setState({
          member: null,
          isLoading: false,
          error: err instanceof Error ? err.message : "Unknown error",
        });
      }
    };

    fetchDetail();
  }, [username]);

  return {
    member: state.member,
    isLoading: state.isLoading,
    error: state.error,
    username,
  };
};
