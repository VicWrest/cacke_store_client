import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DateAndTimePickers() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
            id="datetime-local"
            label="Сделать к"
            type="datetime-local"
            defaultValue="2024-01-01T10:30"
            className={classes.textField}
            InputLabelProps={{
            shrink: true,
            }}
      />
    </form>
  );
}