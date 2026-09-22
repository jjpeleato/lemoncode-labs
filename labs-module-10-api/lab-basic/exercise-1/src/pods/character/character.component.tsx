import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  error: boolean;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, error } = props;

  if (error) {
    return <p>Could not load this character. Please try again.</p>;
  }

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={character.image}
        title={character.name}
      />
      <CardContent>
        <Typography variant="h5">{character.name}</Typography>
        <Typography className={classes.field}>
          {character.status} · {character.species} · {character.gender}
        </Typography>
        <Typography className={classes.field}>
          Origin: {character.origin}
        </Typography>
        <Typography className={classes.field}>
          Last known location: {character.location}
        </Typography>
        <Typography className={classes.field}>
          Episodes: {character.episodeCount}
        </Typography>
      </CardContent>
    </Card>
  );
};
