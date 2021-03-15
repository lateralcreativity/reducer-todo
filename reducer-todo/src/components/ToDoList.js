import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ data, completedHandler }) => {
    return (
        <div>
            {data.map(item => {
                return (
                    <ToDo key={item.id} data={item} completedHandler={completedHandler} />
                )
            })}
        </div>
    )
}

export default ToDoList;