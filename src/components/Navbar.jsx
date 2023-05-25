import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between m-auto">
      <div>
        <h1>LOGO</h1>
      </div>
      <div>
        <button>Home</button>
        <button>About</button>
        <button>Project</button>
        <button>Purpose</button>
      </div>
    </div>
  );
}

export default Navbar;
