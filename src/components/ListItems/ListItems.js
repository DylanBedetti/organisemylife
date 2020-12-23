import React, { useEffect } from "react";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchListItems } from "../../actions";

import IndividualListItem from "../IndividualListItem/IndividualListItem";
import AddListItem from "../AddListItem/AddListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const ListItems = (props) => {
  const { fetchListItems, list } = props;
  const classes = useStyles();

  useEffect(() => {
    fetchListItems();
  }, []);

  const renderList = () => {
    let result = [];

    _.mapValues(list, (listitem) => {
      result.push(
        <IndividualListItem
          key={listitem.id}
          listId={listitem.id}
          text={listitem.task}
          complete={listitem.complete}
          due={listitem.due}
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
          {renderList()}
          <AddListItem />
        </List>
      </Grid>
      <Grid item xs={false} sm={2}></Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

export default connect(mapStateToProps, { fetchListItems })(ListItems);
