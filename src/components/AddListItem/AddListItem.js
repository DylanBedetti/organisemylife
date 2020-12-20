import React from "react";
import ListItem from "@material-ui/core/ListItem";
import AddIcon from "@material-ui/icons/Add";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import ListAddModal from "../Modals/ListAddModal";

const useStyles = makeStyles((theme) => ({
  disabledItem: {
    color: grey[500],
  },
}));

const AddListItem = () => {
  const classes = useStyles();

  return (
    <>
      <ListAddModal title="Add task">
        <ListItem
          role={undefined}
          dense
          button
          className={classes.disabledItem}
        >
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>

          <ListItemText primary="Add task" />
        </ListItem>
      </ListAddModal>
    </>
  );
};

export default AddListItem;
