import React from 'react'
import { List, ListItem, ListItemText, Button } from '@material-ui/core';
import db from './firebase';

function Todo(props) {
    const { todo } = props;
    console.log(todo.id)
    return (
        <List>
            <ListItem>
                <ListItemText primary="Todo" secondary={todo.todo} />
            </ListItem>
            <Button onClick={event => {
                db.collection('todos').doc(todo.id).delete()
                }}>DELETE ME</Button>
        </List>
    )
}

export default Todo
