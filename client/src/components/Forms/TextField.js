import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      width: 270,
    },
  },
}));

export default function InputField(props) {
  const classes = useStyles();



  return (
    
      <div className={classes.root}>
        <TextField
          
          variant="outlined"
          size="small"
          InputLabelProps={{
            //shrink: true,
          }}
          {...props}
        />
       
      </div>
   
  );
}

