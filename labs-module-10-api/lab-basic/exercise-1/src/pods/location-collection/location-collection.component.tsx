import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from '@mui/material/Link';
import Pagination from '@mui/material/Pagination';
import { LocationEntityVm } from './location-collection.vm';
import * as classes from './location-collection.styles';

interface Props {
  locationCollection: LocationEntityVm[];
  onView: (id: string) => void;
  page: number;
  pageCount: number;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  error: boolean;
}

export const LocationCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { locationCollection, onView, page, pageCount, onPageChange, error } =
    props;

  if (error) {
    return <p>Could not load locations. Please try again.</p>;
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Dimension</TableCell>
              <TableCell align="right">Residents</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {locationCollection.map((location) => (
              <TableRow key={location.id} hover={true}>
                <TableCell>
                  <Link component="button" onClick={() => onView(location.id)}>
                    {location.name}
                  </Link>
                </TableCell>
                <TableCell>{location.type}</TableCell>
                <TableCell>{location.dimension}</TableCell>
                <TableCell align="right">{location.residentCount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {pageCount > 1 && (
        <Pagination
          className={classes.pagination}
          color="primary"
          count={pageCount}
          page={page}
          onChange={onPageChange}
        />
      )}
    </>
  );
};
