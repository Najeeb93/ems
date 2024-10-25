import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";

function AdminDashboard() {
  return (
    <div className="h-screen w-full p-7">
      <Header />
     <CreateTask />
    </div>
  );
}

export default AdminDashboard;
