import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function AllTask() {
  const authData = useContext(AuthContext);
  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5">
      <div className="bg-red-400 mb-2  py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h5 className="text-lg font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5">Completed</h5>
        <h5 className="text-lg font-medium w-1/5">Failed</h5>
      </div>
      <div>
        {authData.employee.map(function (elem) {
          return (
            <div className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded">
                <h2 className="w-1/5">{elem.firstName}</h2>
                <h3 className="w-1/5 text-blue-600">{elem.taskCounts.active}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllTask;
