import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  })
);

const Answer = (props: any) => {
  // const classes = useStyles();
  return <Button variant="contained">{props.content}</Button>;
};

export default Answer;
