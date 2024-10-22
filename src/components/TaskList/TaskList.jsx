import React from "react";

function TaskList() {
    return (
        <div id="tasklist" className="h-[55%] overflow-x-auto flex items-center  justify-start gap-5 flex-nowrap w-full py-5  mt-10 ">
            <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 px-3 py-1 rounded">High</h3>
                <h4>20 Oct 2024</h4>
            </div>
            </div>
            

           
        </div>
    )   
}

export default TaskList;