import React from "react";
import "../style/app.scss";

const Main = ({ handleLogout }) => {
  return (
    <section className="mainContainer">
      <nav>
        <h2>Welcome</h2>
        <button
          className="btn btn-primary btn-lg btn-block"
          onClick={handleLogout}
        >
          Logout
        </button>

        <div className="copy">
          <p>Zdjęcie autorstwa Tyler Lastovich z Pexels</p>
          <a href="https://www.vecteezy.com/free-vector/isometric">
            Isometric Vectors by Vecteezy
          </a>
          <a href="https://www.vecteezy.com/free-vector/smoke-logo">
            Smoke Logo Vectors by Vecteezy
          </a>
        </div>
      </nav>
    </section>
  );
};

export default Main;
