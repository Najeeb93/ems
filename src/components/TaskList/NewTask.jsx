import React from "react";

function NewTask() {
    return (
        <div className="flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
                <h4 className="text-sm">20 feb 2024</h4>

            </div>
            <h2 className="mt-5 text-2xl font-semibold">Make youtube video</h2>

        </div>
    )
}

export default NewTask;