import { useNavigate } from 'react-router-dom';
import { Container, Box, Button, CircularProgress, Alert } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { MemberDetail, useMemberDetail } from '../../features/github-members';

export const MemberDetailPage = () => {
  const navigate = useNavigate();
  const { member, isLoading, error } = useMemberDetail();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ mb: 3 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={handleBack}
          variant="text"
        >
          Volver al listado
        </Button>
      </Box>
      {isLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
          <CircularProgress />
        </Box>
      )}
      {error && (
        <Alert severity="error">{error}</Alert>
      )}
      {member && (
        <MemberDetail member={member} />
      )}
    </Container>
  );
};
