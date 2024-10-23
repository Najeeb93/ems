import React from "react";
import Header from "../others/Header";

function AdminDashboard () {
    return (
        <div className="h-screen w-full p-10">
            <Header/>
            <div>
                <form >
                    <h3>Task Title</h3>
                    <input type="text" placeholder="Make ui design" />
                    <h3>Description</h3>
                    <textarea name="" id=""></textarea>
                    <h3>Date</h3>
                    <input type="date" />
                    <input type="text" placeholder="Employee Name" />
                    <input type="text" placeholder="design, dev, etc" />
                </form>
            </div>
        </div>

    )
}


export default AdminDashboard;