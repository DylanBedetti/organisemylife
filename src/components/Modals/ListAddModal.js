import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { DatePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import moment from "moment";
import { createListItem } from "../../actions";
import { connect } from "react-redux";

const [currentYear, currentMonth, nextDay] = [
  moment().year(),
  moment().month() + 1,
  moment().date() + 1,
];

const ListAddModal = (props) => {
  const { children, title, createListItem } = props;
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
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Formik
              initialValues={{
                task: "",
                due: `${currentYear}-${currentMonth}-${nextDay}`,
              }}
              validate={(values) => {
                const errors = {};
                if (!values.task) {
                  errors.task = "Required";
                }
                if (!values.due) {
                  errors.due = "Required";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                console.log(JSON.stringify(values, null, 2));
                values.due = moment(values.due).unix();

                createListItem(values);
                handleClose();
              }}
            >
              {({ submitForm, isSubmitting }) => (
                <Form>
                  <Field
                    autoFocus
                    fullWidth
                    autoComplete="off"
                    component={TextField}
                    name="task"
                    label="Task"
                    type="text"
                  />
                  <br />
                  <Field
                    fullWidth
                    disablePast
                    component={DatePicker}
                    label="Due date"
                    name="due"
                  />
                  <br />

                  {isSubmitting && <LinearProgress />}

                  <br />
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    onClick={submitForm}
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </MuiPickersUtilsProvider>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
};

export default connect(null, { createListItem })(ListAddModal);
