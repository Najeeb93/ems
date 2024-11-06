import React from "react";

function AcceptTask() {
    return (
        <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
                <h4 className="text-sm">20 feb 2024</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
            <p className="text-sm mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi dicta deleniti voluptas adipisci, eaque ipsa illum itaque voluptate repudiandae. Fugiat dolorem sapiente doloremque excepturi molestiae magni, ullam repellendus vel omnis.
            </p>
            <div>
                <button>Mark as Completed</button>
                <button>Mark as Failed</button>
            </div>
        </div>
    )
}


export default AcceptTask;