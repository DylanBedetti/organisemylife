import React from "react";
import { Checkbox, Typography, FormControlLabel } from "@material-ui/core";

const ListItem = () => {
  return (
    <>
      <FormControlLabel
        value="end"
        control={<Checkbox color="primary" />}
        label="ListItem"
        labelPlacement="end"
      />
    </>
  );
};

export default ListItem;
