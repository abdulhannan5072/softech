import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


export default function InputField(props) {
 



  return (
    
      
        <TextField
          
          variant="outlined"
          size="small"
          InputLabelProps={{
            //shrink: true,
          }}
          {...props}
        />
       
    
   
  );
}

