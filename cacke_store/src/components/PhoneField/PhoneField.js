import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import {Context} from "../../index.js";
import AccountCircle from '@material-ui/icons/AccountCircle';
import { observer } from 'mobx-react-lite';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const PhoneField = observer(() => {
  const classes = useStyles();
  const {basket} = useContext(Context);
  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">Введите Ваш телефон</InputLabel>
        <Input
            onChange={(e)=> basket.setPhone(e.target.value)}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
})

export default PhoneField;