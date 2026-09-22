import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterEntityVm[];
  onView: (id: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onView } = props;

  return (
    <ul className={classes.list}>
      {characterCollection.map((character) => (
        <li key={character.id}>
          <CharacterCard character={character} onView={onView} />
        </li>
      ))}
    </ul>
  );
};
