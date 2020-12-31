import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      borderColor: "#FFB549",
      color: "#FFB549",
      fontWeight: 600,
      marginBottom: "8px",
      "&:hover": {
        backgroundColor: "#FFb549",
        color: "#fff",
      },
    },
  })
);

const Answer = (props: any) => {
  const classes = useStyles();
  return (
    <Button
      variant="outlined"
      onClick={() => props.select(props.content, props.nextId)}
      className={classes.button}
    >
      {props.content}
    </Button>
  );
};

export default Answer;
