import {
  Card,
  CardActionArea,
  CardContent,
  Avatar,
  Typography,
  Box,
} from '@mui/material';
import type { GithubMember } from '../../types/github-api.types';

interface MemberCardProps {
  member: GithubMember;
  onClick: (username: string) => void;
}

export const MemberCard = ({ member, onClick }: MemberCardProps) => {
  return (
    <Card elevation={2} sx={{ height: '100%' }}>
      <CardActionArea onClick={() => onClick(member.login)} sx={{ height: '100%' }}>
        <CardContent>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            py: 1,
          }}>
            <Avatar
              src={member.avatar_url}
              alt={member.login}
              sx={{ width: 80, height: 80 }}
            />
            <Typography variant="subtitle1" fontWeight="bold" textAlign="center">
              {member.login}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
