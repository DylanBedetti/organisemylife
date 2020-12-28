import React from "react";
import ListItem from "@material-ui/core/ListItem";
import AddIcon from "@material-ui/icons/Add";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import ListModal from "../Modals/ListModal";

const useStyles = makeStyles(() => ({
  disabledItem: {
    color: grey[500]
  }
}));

const AddListItem = () => {
  const classes = useStyles();

  return (
    <>
      <ListModal>
        <ListItem
          role={undefined}
          dense
          button
          className={classes.disabledItem}
        >
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>

          <ListItemText primary='Add task' />
        </ListItem>
      </ListModal>
    </>
  );
};

export default AddListItem;
