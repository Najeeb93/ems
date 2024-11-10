import React from "react";

function NewTask({data}) {
    return (
        <div className="flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
                <h4 className="text-sm">20 feb 2024</h4>

            </div>
            <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
            <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eaque nesciunt labore praesentium, velit sint sunt ipsam aliquam id at vero consequatur, tenetur maxime. Eos ab expedita quibusdam nobis quos.
            </p>
        <div className="mt-4">
        <button>Accept Task</button>
        </div>
        </div>
    )
}

export default NewTask;