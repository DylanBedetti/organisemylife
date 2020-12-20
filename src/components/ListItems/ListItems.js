import React from "react";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import _ from "lodash";

import IndividualListItem from "../IndividualListItem/IndividualListItem";
import AddListItem from "../AddListItem/AddListItem";

import FakeListData from "../../data/FakeListData.json";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const ListItems = () => {
  const classes = useStyles();

  const renderList = (data) => {
    let result = [];

    _.mapKeys(data, (value, key) => {
      console.log(value, key);
      result.push(
        <IndividualListItem
          key={key}
          text={value.text}
          complete={value.complete}
        />
      );
    });

    return result;
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={false} sm={2}></Grid>
      <Grid item xs={12} sm={8}>
        <List className={classes.root}>
          {renderList(FakeListData)}
          <AddListItem />
        </List>
      </Grid>
      <Grid item xs={false} sm={2}></Grid>
    </Grid>
  );
};

export default ListItems;
