import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchListItems } from "../../actions";
import { List, Grid, ListItem, ListItemText } from "@material-ui/core";
import CompletedListItem from "./CompletedListItem";
import _ from "lodash";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const CompletedLIst = (props) => {
  const { list, fetchListItems } = props;
  const classes = useStyles();

  useEffect(() => {
    fetchListItems();
  }, []);

  const renderList = () => {
    let result = [];

    _.mapValues(list, (listitem) => {
      if (listitem.complete) {
        result.push(
          <CompletedListItem
            key={listitem.id}
            listId={listitem.id}
            text={listitem.task}
            complete={listitem.complete}
          />
        );
      }
    });

    if (result.length) {
      return result;
    } else {
      return [
        <ListItem>
          <ListItemText primary="You aint done shit" />
        </ListItem>,
      ];
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={false} sm={2}></Grid>
      <Grid item xs={12} sm={8}>
        <List className={classes.root}>{renderList()}</List>
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

export default connect(mapStateToProps, { fetchListItems })(CompletedLIst);
