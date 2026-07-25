import { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';
import { useOrderContext } from '../../hooks/useOrderContext';

export const OrderLinesTable = () => {
  const { order, updateLineAmount, validateLines, invalidateLines } = useOrderContext();
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  if (!order) return null;

  const lines = order.getLines();

  const toggleSelection = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        return next;
      }
      next.add(id);
      return next;
    });
  };

  const handleValidateSelected = () => {
    validateLines(Array.from(selectedIds));
    setSelectedIds(new Set());
  };

  const handleInvalidateSelected = () => {
    invalidateLines(Array.from(selectedIds));
    setSelectedIds(new Set());
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
        <Button
          variant="outlined"
          size="small"
          disabled={selectedIds.size === 0}
          onClick={handleValidateSelected}
        >
          Validar
        </Button>
        <Button
          variant="outlined"
          size="small"
          disabled={selectedIds.size === 0}
          onClick={handleInvalidateSelected}
        >
          Invalidar
        </Button>
      </Box>

      <TableContainer component={Paper} variant="outlined">
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox" />
              <TableCell>Estado</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell align="right">Importe</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lines.map((line) => (
              <TableRow key={line.id} selected={selectedIds.has(line.id)}>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedIds.has(line.id)}
                    onChange={() => toggleSelection(line.id)}
                  />
                </TableCell>
                <TableCell>
                  <Chip
                    label={line.isValidated ? 'Válido' : 'Pendiente'}
                    color={line.isValidated ? 'success' : 'default'}
                    size="small"
                  />
                </TableCell>
                <TableCell>{line.description}</TableCell>
                <TableCell align="right">
                  <TextField
                    type="number"
                    size="small"
                    value={line.amount}
                    onChange={(e) => updateLineAmount(line.id, Number(e.target.value) || 0)}
                    sx={{ width: 120 }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
