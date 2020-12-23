import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Field, reduxForm } from "redux-form";
import { Radio, RadioGroup } from "@material-ui/core";

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    autoComplete="off"
    autoFocus
    color="primary"
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

const renderDateField = ({
  value,
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    disablePast
    helperText="Due Date Helper"
    type="date"
    InputLabelProps={{
      shrink: true,
    }}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

const ListAddModal = (props) => {
  const { children, title, handleSubmit, pristine, reset, submitting } = props;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div onClick={handleClickOpen}>{children}</div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <div>
              <Field
                name="item"
                component={renderTextField}
                label="What do you need to do?"
              />
            </div>

            {/* <div>
              <Field
                name="datePicker"
                component={renderDateField}
                label="Due Date"
              />
            </div> */}

            {/* <div>
              <Field
                name="lastName"
                component={renderTextField}
                label="Last Name"
              />
            </div>
            <div>
              <Field name="email" component={renderTextField} label="Email" />
            </div> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button
              type="button"
              disabled={pristine || submitting}
              onClick={reset}
              color="primary"
            >
              Clear Values
            </Button>
            <Button
              type="submit"
              disabled={pristine || submitting}
              onClick={handleClose}
              color="primary"
            >
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

const validate = (values) => {
  const errors = {};

  if (!values.item) {
    errors.item = "Required";
  }

  if (!values.datePicker) {
    errors.datePicker = "Required";
  }
  return errors;
};

export default reduxForm({
  form: "AddListItem",
  validate,
})(ListAddModal);


//  need to use initialValues API from redux-form
