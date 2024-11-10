import React  from "react";


function CompleteTask({data}) {
    return (
        <div className="flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
                <h4 className="text-sm">{data.taskDate}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
            <p className="text-sm mt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius alias debitis quae soluta repudiandae similique quasi asperiores eaque assumenda at cum quas voluptatum aperiam, porro provident sequi doloremque ullam hic.
            </p>
            <div className="mt-2">
                <button className="w-full">Complete</button>
            </div>
        </div>
    )
}


export default CompleteTask;