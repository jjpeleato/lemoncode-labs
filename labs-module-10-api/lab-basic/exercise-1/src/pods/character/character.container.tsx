import * as React from 'react';
import { useParams } from 'react-router-dom';
import { isRemoteApi } from '#common/http';
import { getCharacter, saveBestSentence } from './api';
import { createEmptyCharacter, Character } from './character.vm';
import { mapCharacterFromApiToVm } from './character.mappers';
import { CharacterComponent, SaveStatus } from './character.component';

export const CharacterContainer: React.FunctionComponent = () => {
  const [character, setCharacter] = React.useState<Character>(
    createEmptyCharacter()
  );
  const [error, setError] = React.useState(false);
  const [saveStatus, setSaveStatus] = React.useState<SaveStatus>('idle');
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

  const handleSave = async (bestSentence: string) => {
    setSaveStatus('idle');
    try {
      const success = await saveBestSentence(id, bestSentence);
      if (success) {
        setCharacter({ ...character, bestSentence });
      }
      setSaveStatus(success ? 'saved' : 'error');
    } catch {
      setSaveStatus('error');
    }
  };

  return (
    <CharacterComponent
      character={character}
      error={error}
      editable={!isRemoteApi}
      saveStatus={saveStatus}
      onSave={handleSave}
    />
  );
};
