import React from "react";

function Header() {
    return (
        <div className="flex items-end justify-between">
            <h1>Hello <br/> username</h1>
            <button>Log Out</button>
        </div>
    )
}

export default Header;