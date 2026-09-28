import * as React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';

interface Props {
  character: CharacterEntityVm;
  onView: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onView } = props;

  return (
    <Card>
      <CardActionArea onClick={() => onView(character.id)}>
        <CardMedia
          className={classes.media}
          image={character.image}
          title={character.name}
        />
        <CardHeader
          classes={{ title: classes.title }}
          title={character.name}
          subheader={`${character.status} · ${character.species}`}
        />
      </CardActionArea>
    </Card>
  );
};
