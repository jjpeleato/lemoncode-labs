import * as React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { CharacterEntityVm } from '../character-collection.vm';

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
          component="img"
          image={character.image}
          title={character.name}
        />
        <CardHeader
          title={character.name}
          subheader={`${character.status} · ${character.species}`}
        />
      </CardActionArea>
    </Card>
  );
};
