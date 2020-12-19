import React from "react";
import ListItem from "@material-ui/core/ListItem";
import AddIcon from "@material-ui/icons/Add";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const AddListItem = () => {
  return (
    <ListItem
      role={undefined}
      dense
      button
      onClick={() => console.log("AddListItem clicked")}
    >
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary="Add task" />
    </ListItem>
  );
};

export default AddListItem;
