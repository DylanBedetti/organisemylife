import React from "react";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { Typography } from "@material-ui/core";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const currentDate = moment().unix();

const useStyles = makeStyles({
  icon: {
    margin: "0px 5px 0px 0px",
    fontSize: 15,
  },
  typography: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    color: (props) => (props.due > currentDate ? "" : red[300]),
  },
});

const renderDate = (due) => {
  return due > currentDate
    ? moment(due * 1000).format("dddd, MMMM Do")
    : "Overdue!";
};

const ItemDueDate = (props) => {
  const classes = useStyles(props);
  const { due } = props;
  return (
    <Typography className={classes.typography} variant="caption">
      <ScheduleIcon className={classes.icon} />
      {renderDate(due)}
    </Typography>
  );
};

export default ItemDueDate;
