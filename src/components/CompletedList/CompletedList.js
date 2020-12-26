import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  List, Grid, ListItem, ListItemText,
} from "@material-ui/core";
import _ from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import CompletedListItem from "./CompletedListItem";
import { fetchListItems } from "../../actions";

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
    const result = [];

    _.mapValues(list, (listitem) => {
      if (listitem.complete) {
        result.push(
          <CompletedListItem
            key={listitem.id}
            listId={listitem.id}
            text={listitem.task}
            complete={listitem.complete}
          />,
        );
      }
    });

    if (result.length) {
      return result;
    }
    return [
      <ListItem>
        <ListItemText primary="You aint done shit" />
      </ListItem>,
    ];
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={false} sm={2} />
      <Grid item xs={12} sm={8}>
        <List className={classes.root}>{renderList()}</List>
      </Grid>
      <Grid item xs={false} sm={2} />
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  list: state.list,
});

export default connect(mapStateToProps, { fetchListItems })(CompletedLIst);
