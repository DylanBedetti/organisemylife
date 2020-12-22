import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import { Field, reduxForm } from "redux-form";

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
    helperText={label}
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
    label="Due Date"
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

            <div>
              <Field
                name="datePicker"
                component={renderDateField}
                label="Due Date"
              />
            </div>
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
  const requiredFields = ["item", "datePicker"];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  return errors;
};

export default reduxForm({
  form: "AddListItem",
  validate,
})(ListAddModal);
