import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const TextInput = (props: any) => {
  return (
    <TextField
      label={props.label}
      fullWidth={true}
      margin={"dense"}
      multiline={props.multiline}
      rows={props.rows}
      value={props.value}
      type={props.type}
      onChange={props.onChange}
    />
  );
};

export default TextInput;
