import { Box, Pagination } from "@mui/material";

interface CharacterPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const CharacterPagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: CharacterPaginationProps) => {

  if (totalPages <= 1) return null;

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
      <Pagination
        count={totalPages}
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
