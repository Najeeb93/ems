import React, { Children } from "react";

function TaskContext({Children}) {
    return (
        <div>
        {Children}
        </div>

    )
}

export default TaskContext;