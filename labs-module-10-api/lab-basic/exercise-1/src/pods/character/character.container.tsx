import * as React from 'react';
import { useParams } from 'react-router-dom';
import { getCharacter } from './api';
import { createEmptyCharacter, Character } from './character.vm';
import { mapCharacterFromApiToVm } from './character.mappers';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = () => {
  const [character, setCharacter] = React.useState<Character>(
    createEmptyCharacter()
  );
  const [error, setError] = React.useState(false);
  const { id } = useParams<{ id: string }>();

  const handleLoadCharacter = async () => {
    setError(false);
    try {
      const apiCharacter = await getCharacter(id);
      setCharacter(mapCharacterFromApiToVm(apiCharacter));
    } catch {
      setError(true);
    }
  };

  React.useEffect(() => {
    handleLoadCharacter();
  }, []);

  return <CharacterComponent character={character} error={error} />;
};
