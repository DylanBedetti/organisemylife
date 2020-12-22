import "date-fns";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { connect } from "react-redux";
import { createListItem } from "../../actions";
import { Field, reduxForm } from "redux-form";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content",
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

const ListAddModal = (props) => {
  const { children, title, handleSubmit  } = props;
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [itemText, setItemText] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDateChange = (date) => {
    console.log(date.getTime() / 1000);
    setSelectedDate(date);
  };

  const handleItemChange = (text) => {
    console.log(text.target.value);
    setItemText(text);
  };

  const renderTextField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
  }) => (
    <TextField
      hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  );


  return (
    <div>
      <div onClick={handleClickOpen}>{children}</div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <div>
              <Field
                name="item"
                component={renderTextField}
                label="What do you need to do?"
              />
            </div>

            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Due date"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </MuiPickersUtilsProvider> */}
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" type="submit">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const validate = (values) => {
  const errors = {};
  const requiredFields = ["item"];
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
