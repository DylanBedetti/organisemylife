import React from "react";
import {
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { editListItem } from "../../actions";
import ItemPopover from "../IndividualListItem/ItemPopover";

const useStyles = makeStyles(() => ({
  checkedButton: {
    color: green[500]
  },
  listItem: {
    background: green[100]
  }
}));

const CompletedListItem = (props) => {
  const {
    editListItem, listId, text, complete
  } = props;
  const classes = useStyles();

  return (
    <ListItem role={undefined} dense className={classes.listItem}>
      <ListItemIcon
        onClick={() => editListItem(listId, { complete: !complete })}
      >
        <Checkbox
          edge='start'
          checked={complete}
          tabIndex={-1}
          disableRipple
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={
            <RadioButtonCheckedIcon className={classes.checkedButton} />
          }
        />
      </ListItemIcon>
      <ListItemText primary={text} />
      <ListItemSecondaryAction>
        <ItemPopover listId={listId}>
          <IconButton edge='end'>
            <MoreVertIcon />
          </IconButton>
        </ItemPopover>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default connect(null, { editListItem })(CompletedListItem);
