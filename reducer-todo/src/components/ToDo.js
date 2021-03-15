import React from 'react';

const ToDo = ({ data, completedHandler }) => {
    return (
        <div>
            <p onClick={(event) => completedHandler(data, event)}>{data.item}</p>
        </div>
    )
}

export default ToDo;