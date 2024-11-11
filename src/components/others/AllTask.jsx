import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function AllTask() {

    const authData = useContext(AuthContext)
    return (
            <div className="bg-[#1c1c1c] p-5 rounded mt-5">
                <div className="bg-red-400 mb-2  py-2 px-4 flex justify-between rounded">
                    <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
                    <h3 className="text-lg font-medium w-1/5">New Task</h3>
                    <h5 className="text-lg font-medium w-1/5">Active Task</h5>
                </div>
                <div className="bg-green-400 mb-2 py-2 px-4 flex justify-between rounded">
                    <h2>Username</h2>
                    <h3>Make a UI Design</h3>
                    <h5>Status</h5>
                </div>
                <div className="bg-yellow-400 mb-2 py-2 px-4 flex justify-between rounded">
                    <h2>Username</h2>
                    <h3>Make a UI Design</h3>
                    <h5>Status</h5>
                </div>
                <div className="bg-blue-400 mb-2 py-2 px-4 flex justify-between rounded">
                    <h2>Username</h2>
                    <h3>Make a UI Design</h3>
                    <h5>Status</h5>
                </div>
                <div className="bg-purple-400 mb-2 py-2 px-4 flex justify-between rounded">
                    <h2>Username</h2>
                    <h3>Make a UI Design</h3>
                    <h5>Status</h5>
                </div>

            </div>
    )
}

export default AllTask;