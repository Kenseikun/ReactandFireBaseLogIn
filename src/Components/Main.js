import React from "react";
import "../style/app.scss";

const Main = ({ handleLogout }) => {
  return (
    <section className="mainContainer">
      <nav>
        <h2>Welcome</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </section>
  );
};

export default Main;
