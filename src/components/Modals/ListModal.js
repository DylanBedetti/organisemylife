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
import { createListItem, editListItem } from "../../actions";
import { connect } from "react-redux";

const [currentYear, currentMonth, nextDay] = [
  moment().year(),
  moment().month() + 1,
  moment().date() + 1,
];

const ListModal = (props) => {
  const { children, createListItem, editListItem, listId, edit, list } = props;
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
        <DialogTitle>{`${edit ? "Edit" : "Add"} task`}</DialogTitle>
        <DialogContent>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Formik
              initialValues={{
                task: edit ? list[listId].task : "",
                due: edit
                  ? list[listId].due * 1000
                  : `${currentYear}-${currentMonth}-${nextDay}`,
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
                values.due = moment(values.due).unix();
                if (edit) {
                  editListItem(listId, values);
                } else {
                  values.complete = false;
                  createListItem(values);
                }

                handleClose();
              }}
            >
              {({ submitForm, isSubmitting }) => (
                <Form>
                  <Field
                    autoFocus
                    fullWidth
                    autoComplete="off"
                    multiline
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
                    {edit ? "Save" : "Submit"}
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

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

export default connect(mapStateToProps, { createListItem, editListItem })(
  ListModal
);
