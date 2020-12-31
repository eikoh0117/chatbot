import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { Chat } from ".";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: "36ch",
      backgroundColor: theme.palette.background.paper,
    },
  })
);

const Chats = (props: any) => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {props.chats.map((chat: any, index: number) => {
        return (
          <Chat text={chat.text} type={chat.type} key={index.toString()}></Chat>
        );
      })}
    </List>
  );
};

export default Chats;
