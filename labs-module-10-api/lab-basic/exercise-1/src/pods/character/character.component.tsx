import * as React from 'react';
import { Formik, Form } from 'formik';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextFieldComponent } from '#common/components';
import { Character } from './character.vm';
import * as classes from './character.styles';

export type SaveStatus = 'idle' | 'saved' | 'error';

interface Props {
  character: Character;
  error: boolean;
  editable: boolean;
  saveStatus: SaveStatus;
  onSave: (bestSentence: string) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, error, editable, saveStatus, onSave } = props;

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
      {editable && (
        <CardContent>
          <Formik
            initialValues={{ bestSentence: character.bestSentence }}
            enableReinitialize={true}
            onSubmit={(values) => onSave(values.bestSentence)}
          >
            {() => (
              <Form>
                <TextFieldComponent
                  name="bestSentence"
                  label="Best sentence"
                  multiline={true}
                  rows={3}
                />
                <Button type="submit" variant="contained" color="primary">
                  Save
                </Button>
                {saveStatus === 'saved' && (
                  <Typography className={classes.field}>
                    Best sentence saved.
                  </Typography>
                )}
                {saveStatus === 'error' && (
                  <Typography className={classes.field} color="error">
                    Could not save the best sentence. Please try again.
                  </Typography>
                )}
              </Form>
            )}
          </Formik>
        </CardContent>
      )}
    </Card>
  );
};
