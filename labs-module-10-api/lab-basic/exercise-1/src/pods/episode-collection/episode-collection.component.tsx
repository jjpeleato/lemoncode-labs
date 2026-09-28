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
import { EpisodeEntityVm } from './episode-collection.vm';
import * as classes from './episode-collection.styles';

interface Props {
  episodeCollection: EpisodeEntityVm[];
  onView: (id: string) => void;
  page: number;
  pageCount: number;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  error: boolean;
}

export const EpisodeCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { episodeCollection, onView, page, pageCount, onPageChange, error } =
    props;

  if (error) {
    return <p>Could not load episodes. Please try again.</p>;
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Episode</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Air date</TableCell>
              <TableCell align="right">Characters</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {episodeCollection.map((episode) => (
              <TableRow key={episode.id} hover={true}>
                <TableCell>{episode.code}</TableCell>
                <TableCell>
                  <Link component="button" onClick={() => onView(episode.id)}>
                    {episode.name}
                  </Link>
                </TableCell>
                <TableCell>{episode.airDate}</TableCell>
                <TableCell align="right">{episode.characterCount}</TableCell>
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
