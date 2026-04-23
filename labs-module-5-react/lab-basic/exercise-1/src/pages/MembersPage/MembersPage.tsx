import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import {
  OrgSearchBar,
  MemberList,
  MembersPagination,
  useOrgMembers,
} from '../../features/github-members';
import { buildMemberDetailRoute } from '../../router/routes.constants';

export const MembersPage = () => {
  const navigate = useNavigate();
  const {
    inputValue,
    members,
    isLoading,
    error,
    currentPage,
    totalPages,
    hasSearched,
    handleInputChange,
    handleSearch,
    handlePageChange,
    handleReset,
  } = useOrgMembers();

  const handleMemberClick = (username: string) => {
    navigate(buildMemberDetailRoute(username));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          GitHubFinder
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Find the members of an organization on GitHub
        </Typography>
      </Box>
      <OrgSearchBar
        value={inputValue}
        isLoading={isLoading}
        onChange={handleInputChange}
        onSearch={handleSearch}
        onReset={handleReset}
      />
      <MemberList
        members={members}
        isLoading={isLoading}
        error={error}
        hasSearched={hasSearched}
        onMemberClick={handleMemberClick}
      />
      <MembersPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Container>
  );
};
