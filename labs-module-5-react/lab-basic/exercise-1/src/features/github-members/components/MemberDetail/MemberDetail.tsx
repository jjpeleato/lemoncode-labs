import {
  Box,
  Avatar,
  Typography,
  Divider,
  Link,
  Grid,
  Paper,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import LinkIcon from '@mui/icons-material/Link';
import PeopleIcon from '@mui/icons-material/People';
import FolderIcon from '@mui/icons-material/Folder';
import type { GithubMemberDetail } from '../../types/github-api.types';

interface MemberDetailProps {
  member: GithubMemberDetail;
}

interface StatItemProps {
  icon: React.ReactNode;
  label: string;
  value: number;
}

const StatItem = ({ icon, label, value }: StatItemProps) => (
  <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 0.5,
  }}>
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 0.5,
      color: 'text.secondary',
    }}>
      {icon}
      <Typography variant="caption">{label}</Typography>
    </Box>
    <Typography variant="h6" fontWeight="bold">
      {value.toLocaleString()}
    </Typography>
  </Box>
);

export const MemberDetail = ({ member }: MemberDetailProps) => {
  return (
    <Paper elevation={2} sx={{ p: 4, maxWidth: 600, mx: 'auto' }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        mb: 3,
      }}>
        <Avatar
          src={member.avatar_url}
          alt={member.login}
          sx={{ width: 120, height: 120 }}
        />
        <Box sx={{ textAlign: 'center' }}>
          {member.name && (
            <Typography variant="h5" fontWeight="bold">
              {member.name}
            </Typography>
          )}
          <Typography variant="subtitle1" color="text.secondary">
            @{member.login}
          </Typography>
        </Box>
        {member.bio && (
          <Typography variant="body2" textAlign="center" color="text.secondary">
            {member.bio}
          </Typography>
        )}
      </Box>
      <Divider sx={{ mb: 3 }} />
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid size={{ xs: 4}}>
          <StatItem
            icon={<FolderIcon fontSize="small" />}
            label="Repositories"
            value={member.public_repos}
          />
        </Grid>
        <Grid size={{ xs: 4}}>
          <StatItem
            icon={<PeopleIcon fontSize="small" />}
            label="Followers"
            value={member.followers}
          />
        </Grid>
        <Grid size={{ xs: 4}}>
          <StatItem
            icon={<PeopleIcon fontSize="small" />}
            label="Following"
            value={member.following}
          />
        </Grid>
      </Grid>
      <Divider sx={{ mb: 3 }} />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {member.location && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LocationOnIcon fontSize="small" color="action" />
            <Typography variant="body2">{member.location}</Typography>
          </Box>
        )}
        {member.company && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <BusinessIcon fontSize="small" color="action" />
            <Typography variant="body2">{member.company}</Typography>
          </Box>
        )}
        {member.blog && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LinkIcon fontSize="small" color="action" />
            <Link
              href={member.blog.startsWith('http') ? member.blog : `https://${member.blog}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="body2"
            >
              {member.blog}
            </Link>
          </Box>
        )}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <LinkIcon fontSize="small" color="action" />
          <Link
            href={member.html_url}
            target="_blank"
            rel="noopener noreferrer"
            variant="body2"
          >
            View profile on GitHub
          </Link>
        </Box>
      </Box>
    </Paper>
  );
};
