import React from 'react';
import { Formik, Form as FormikForm, Field } from 'formik';

export const FormikWrapper = ({initialValues, validationSchema, onSubmit, ...props}) => (
    <Formik
      {...props}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    />
);
export const Form = (props) => (<FormikForm {...props} />);

