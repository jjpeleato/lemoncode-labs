import { Grid, Typography, Box, CircularProgress, Alert } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import { MemberCard } from '../MemberCard/MemberCard';
import type { GithubMember } from '../../types/github-api.types';

interface MemberListProps {
  members: GithubMember[];
  isLoading: boolean;
  error: string | null;
  hasSearched: boolean;
  onMemberClick: (username: string) => void;
}

export const MemberList = ({
  members,
  isLoading,
  error,
  hasSearched,
  onMemberClick,
}: MemberListProps) => {

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ mt: 2 }}>
        {error}
      </Alert>
    );
  }

  if (members.length === 0 && !hasSearched) {
    return (
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 8,
        gap: 2,
        color: 'text.secondary',
      }}>
        <GroupIcon sx={{ fontSize: 64, opacity: 0.3 }} />
        <Typography variant="body1">
          Enter an organization's name to view its members
        </Typography>
      </Box>
    );
  }

  if (members.length === 0 && hasSearched) {
    return (
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 8,
        gap: 2,
        color: 'text.secondary',
      }}>
        <SearchOffIcon sx={{ fontSize: 64, opacity: 0.3 }} />
        <Typography variant="body1">
          This organization has no public members
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={3} sx={{ mt: 1 }}>
      {members.map((member) => (
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={member.id}>
          <MemberCard member={member} onClick={onMemberClick} />
        </Grid>
      ))}
    </Grid>
  );
};
