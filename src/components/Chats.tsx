import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { Chat } from ".";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chats: {
      height: 400,
      padding: 0,
      overflow: "auto",
    },
  })
);

const Chats = (props: any) => {
  const classes = useStyles();
  return (
    <List className={classes.chats}>
      {props.chats.map((chat: any, index: number) => {
        return (
          <Chat text={chat.text} type={chat.type} key={index.toString()} />
        );
      })}
    </List>
  );
};

export default Chats;
