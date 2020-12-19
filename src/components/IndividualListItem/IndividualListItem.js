import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import { green } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  checkedButton: {
    color: green[500],
  },
}));

const IndividualListItem = (props) => {
  const { text, complete } = props;
  const classes = useStyles();
  const [checked, setChecked] = React.useState(complete);

  const controlCheckbox = (event) => {
    setChecked(!checked);
  };

  return (
    <ListItem
      role={undefined}
      dense
      button
      onClick={() => console.log("ListItem clicked")}
    >
      <ListItemIcon onClick={(event) => controlCheckbox(event)}>
        <Checkbox
          edge="start"
          checked={checked}
          tabIndex={-1}
          disableRipple
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={
            <RadioButtonCheckedIcon className={classes.checkedButton} />
          }
        />
      </ListItemIcon>
      <ListItemText primary={text} />
      <ListItemSecondaryAction
        onClick={() => console.log("MoreVertIcon clicked")}
      >
        <IconButton edge="end">
          <MoreVertIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default IndividualListItem;
