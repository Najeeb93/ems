import React from "react";
import AcceptTask from "./AcceptTask";

function TaskList({data}) {
    return (
        <div id="tasklist" className="h-[50%] overflow-x-auto flex items-center  justify-start gap-5 flex-nowrap w-full py-1  mt-16 ">
         {data.tasks.map((elem, idx)=>{
            if(elem.active) {
                return <AcceptTask key={idx} data={elem} />
            }
         })}

           
        </div>
    )   
}

export default TaskList;