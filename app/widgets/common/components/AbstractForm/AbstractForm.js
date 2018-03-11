import React from 'react';
import { Formik } from 'formik';
import Yup from 'yup';
import {
  Form,
  Menu,
  Segment,
  Message,
  Divider,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { omit } from 'lodash';

function AbstractFormField({
  field,
  values,
  touched,
  errors,
  handleChange,
}) {
  const fieldElement = omit(field, ['validation']);
  const inputProps = {
    ...fieldElement,
    error: !!(touched[field.name] && errors[field.name]),
    value: values[field.name],
    onChange: handleChange,
  };
  return (
    <div>
      <Segment key={field.name} inverted>
        <Form.Input className="seethrough" {...inputProps} />
        {touched[field.name] &&
        errors[field.name] && (
          <Message header={errors[field.name]} negative />
      )}

      </Segment>
      <Divider horizontal />
    </div>
  );
}

function AbstractForm({ fields, onSubmit }) {
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
        handleChange,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit} inverted>
          <Segment attached="top" className="fieldview">
            <Segment.Group>
              {fields.map((field) => (
                <AbstractFormField
                  key={field.name}
                  {...{
                    field,
                    values,
                    touched,
                    errors,
                    handleChange,
                  }}
                />
              ))}
            </Segment.Group>
          </Segment>
          <Menu attached="top" inverted widths={2}>
            <Menu.Item
              content={'Log In'}
              onClick={handleSubmit}
              disabled={isSubmitting}
            />
          </Menu>
        </Form>
      )}
    />
  );
}

AbstractFormField.propTypes = {
  field: PropTypes.object,
  values: PropTypes.object,
  touched: PropTypes.object,
  errors: PropTypes.object,
  handleChange: PropTypes.func,
};

AbstractForm.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.object),
  onSubmit: PropTypes.func,
};

export default AbstractForm;
