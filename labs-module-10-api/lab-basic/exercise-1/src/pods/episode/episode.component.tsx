import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CharacterChipsComponent } from '#common/components';
import { Episode } from './episode.vm';
import * as classes from './episode.styles';

interface Props {
  episode: Episode;
  error: boolean;
  linkable: boolean;
  onViewCharacter: (id: string) => void;
}

export const EpisodeComponent: React.FunctionComponent<Props> = (props) => {
  const { episode, error, linkable, onViewCharacter } = props;

  if (error) {
    return <p>Could not load this episode. Please try again.</p>;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{episode.name}</Typography>
        <Typography className={classes.field}>
          Episode: {episode.code}
        </Typography>
        <Typography className={classes.field}>
          Air date: {episode.airDate}
        </Typography>
        <Typography className={classes.field} variant="h6">
          Characters ({episode.characters.length})
        </Typography>
        <CharacterChipsComponent
          characters={episode.characters}
          linkable={linkable}
          onView={onViewCharacter}
        />
      </CardContent>
    </Card>
  );
};
