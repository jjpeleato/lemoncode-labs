import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import { Location } from './location.vm';
import * as classes from './location.styles';

interface Props {
  location: Location;
  error: boolean;
  linkable: boolean;
  onViewResident: (id: string) => void;
}

export const LocationComponent: React.FunctionComponent<Props> = (props) => {
  const { location, error, linkable, onViewResident } = props;

  if (error) {
    return <p>Could not load this location. Please try again.</p>;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{location.name}</Typography>
        <Typography className={classes.field}>Type: {location.type}</Typography>
        <Typography className={classes.field}>
          Dimension: {location.dimension}
        </Typography>
        <Typography className={classes.field} variant="h6">
          Residents ({location.residents.length})
        </Typography>
        {location.residents.length === 0 ? (
          <Typography className={classes.field}>
            No known residents.
          </Typography>
        ) : (
          <div className={classes.residents}>
            {location.residents.map((resident) => (
              <Chip
                key={resident.id}
                label={resident.name}
                avatar={
                  <Avatar
                    src={resident.image}
                    alt={resident.name}
                    slotProps={{ img: { loading: 'lazy' } }}
                  />
                }
                onClick={
                  linkable ? () => onViewResident(resident.id) : undefined
                }
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
