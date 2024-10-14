import React, { memo, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Context} from "../../index.js";
import { observer } from 'mobx-react-lite';

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

const SelectDate = observer(() => {
  const {basket} = useContext(Context);
  const classes = useStyles();
  
  const changeTime = async (date) => {
    let utcDate = new Date(date).toISOString();
    await basket.setDate(utcDate);
    return;
  }
  return (
    <div className='select-date'>
        <form 
      className={classes.container} 
      onChange={(e)=> changeTime(e.target.value)} 
      noValidate>
        <TextField
            id="datetime-local"
            label="Сделать к"
            type="datetime-local"
            defaultValue={basket.date}
            className={classes.textField}
            InputLabelProps={{
            shrink: true,
            }}
      />
    </form>
    </div>
    
  );
})

export default SelectDate;