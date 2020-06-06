import React from 'react';
import {useField} from 'formik';
import {Input}  from '../';

export const InputField = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);
    return (
      <>
        <Input {...field} {...props} label={label}
            
        />
        {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
      </>
    );
  };