import React from "react";

import classes from './TodoItem.module.css'

const TodoItem: React.FC<{ key: string; id: string; text: string; onRemoveTodo:() => void}> = (props) => {

  return <li id={props.id} className={classes.item} onClick={props.onRemoveTodo}>{props.text}</li>;
};

export default TodoItem;
