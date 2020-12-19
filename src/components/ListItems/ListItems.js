import React from "react";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import IndividualListItem from "../IndividualListItem/IndividualListItem";
import AddListItem from "../AddListItem/AddListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const ListItems = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={0} sm={2}></Grid>
      <Grid item xs={12} sm={8}>
        <List className={classes.root}>
          <IndividualListItem key={1} text="this is my list text" />
          <IndividualListItem key={2} text="this is my list text" />
          <IndividualListItem key={3} text="this is my list text" />
          <AddListItem />
        </List>
      </Grid>
      <Grid item xs={0} sm={2}></Grid>
    </Grid>
  );
};

export default ListItems;
