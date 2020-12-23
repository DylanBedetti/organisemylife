import React, { useState } from "react";
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
import ItemPopover from "./ItemPopover";
import ListEditModal from "../Modals/ListEditModal";
import ItemDueDate from "./ItemDueDate";

const useStyles = makeStyles((theme) => ({
  checkedButton: {
    color: green[500],
  },
}));

const IndividualListItem = (props) => {
  const { text, complete, listId, due } = props;
  const classes = useStyles();
  const [checked, setChecked] = useState(complete);

  const controlCheckbox = (e) => {
    setChecked(!checked);
  };

  return (
    <ListItem role={undefined} dense button>
      <ListItemIcon onClick={(e) => controlCheckbox(e)}>
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
      <ListItemText primary={text} secondary={<ItemDueDate due={due} />} />
      <ListItemSecondaryAction>
        <ItemPopover listId={listId}>
          <IconButton edge="end">
            <MoreVertIcon />
          </IconButton>
        </ItemPopover>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default IndividualListItem;
