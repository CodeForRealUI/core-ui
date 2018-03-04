import React from 'react';
import { Formik } from 'formik';
import Yup from 'yup';
import {
  Form,
  Divider,
  Menu,
  Segment,
  Message,
  Dropdown,
} from 'semantic-ui-react';

function AbstractFormField({
  field,
  values,
  touched,
  errors,
  handleChange,
  setFieldValue,
  validation,
}) {
  const inputProps = {
    ...field,
    error: !!(touched[field.name] && errors[field.name]),
    value: values[field.name],
    onChange: handleChange,
  };
  const handleSelect = (event, { value }) =>
    setFieldValue(inputProps.name, value);

  return (
    <Segment key={field.name} inverted>
      <Form.Input className="seethrough" {...inputProps} />
      {touched[field.name] &&
        errors[field.name] && (
          <Message icon="warning sign" header={errors[field.name]} negative />
      )}
    </Segment>
  );
}

function AbstractForm({ fields, onSubmit, sendText }) {
  const initialValues = fields.reduce(
    (values, field) => ({ ...values, [field.name]: field.value }),
    {}
  );

  const validationSchema = Yup.object().shape(
    fields.reduce(
      (schema, field) => ({ ...schema, [field.name]: field.validation }),
      {}
    )
  );

  return (
    <Formik
      {...{ initialValues, validationSchema, onSubmit }}
      render={({
        values,
        errors,
        touched,
        setFieldValue,
        handleChange,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit} inverted>
          <Segment attached="top" className="fieldview">
            <Segment.Group>
              {fields.map((field, index) => (
                <AbstractFormField
                  key={index}
                  {...{
                    field,
                    values,
                    touched,
                    errors,
                    handleChange,
                    setFieldValue,
                  }}
                />
              ))}
            </Segment.Group>
          </Segment>
          <Menu attached="top" inverted widths={2}>
            <Menu.Item
              content={sendText || 'Login'}
              onClick={handleSubmit}
              disabled={isSubmitting}
            />
          </Menu>
        </Form>
      )}
    />
  );
}


export default AbstractForm;
