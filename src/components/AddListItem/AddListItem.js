import React from "react";
import ListItem from "@material-ui/core/ListItem";
import AddIcon from "@material-ui/icons/Add";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import ListAddModal from "../ListAddModal/ListAddModal";

const useStyles = makeStyles((theme) => ({
  disabledItem: {
    color: grey[500],
  },
}));

const AddListItem = () => {
  const [modal, setModal] = React.useState(false);

  const classes = useStyles();

  return (
    <>
      <ListItem
        role={undefined}
        dense
        button
        onClick={() => setModal(true)}
        className={classes.disabledItem}
      >
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="Add task" />
      </ListItem>
      {modal ? (
        <ListAddModal openState={true} />
      ) : (
        <ListAddModal openState={false} />
      )}
    </>
  );
};

export default AddListItem;
