import React, { useState } from "react";
import Popover from "@material-ui/core/Popover";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import EditIcon from "@material-ui/icons/Edit";
import { connect } from "react-redux";
import { deleteListItem } from "../../actions";
import ListModal from "../Modals/ListModal";

const ItemPopover = (props) => {
  const { children, deleteListItem, listId } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <div onClick={handleClick}>{children}</div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <List>
          <ListModal edit listId={listId}>
            <ListItem button>
              <ListItemIcon>
                <EditIcon />
              </ListItemIcon>
              <ListItemText primary="Edit task" />
            </ListItem>
          </ListModal>

          <Divider />

          <ListItem button onClick={() => deleteListItem(listId)}>
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary="Delete task" />
          </ListItem>
        </List>
      </Popover>
    </>
  );
};

export default connect(null, { deleteListItem })(ItemPopover);
