import * as React from 'react';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import * as classes from './character-chips.styles';

export interface CharacterChip {
  id: string;
  name: string;
  image: string;
}

interface Props {
  characters: CharacterChip[];
  linkable: boolean;
  onView: (id: string) => void;
}

export const CharacterChipsComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characters, linkable, onView } = props;

  return (
    <div className={classes.root}>
      {characters.map((character) => (
        <Chip
          key={character.id}
          label={character.name}
          avatar={
            <Avatar
              src={character.image}
              alt={character.name}
              slotProps={{ img: { loading: 'lazy' } }}
            />
          }
          onClick={linkable ? () => onView(character.id) : undefined}
        />
      ))}
    </div>
  );
};
