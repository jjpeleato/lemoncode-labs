import { Box, Pagination } from "@mui/material";

interface CharacterPaginationProps {
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
  onPageChange: (page: number) => void;
}

export const CharacterPagination = ({
  currentPage,
  totalPages,
  isLoading,
  onPageChange,
}: CharacterPaginationProps) => {
  // Never shown when there is only one page and no load is in progress.
  if (!isLoading && totalPages <= 1) return null;

  // While loading: reserves space with visibility: hidden to prevent layout shift
  // when pagination appears after the fetch completes.
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 4,
        visibility: isLoading ? "hidden" : "visible",
      }}
    >
      <Pagination
        count={Math.max(totalPages, 1)}
        page={currentPage}
        onChange={(_, page) => onPageChange(page)}
        color="primary"
        shape="rounded"
        showFirstButton
        showLastButton
      />
    </Box>
  );
};
