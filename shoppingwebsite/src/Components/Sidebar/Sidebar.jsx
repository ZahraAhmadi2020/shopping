import React from "react";

const Sidebar = () => {
  return (
    <div>
      <ul className="side-menu">
        <li onClick={() => setMenu("shop")}>
          {menu === "shop" ? (
            <Link className="side-link active" to="/">
              Shop
            </Link>
          ) : (
            <Link className="side-link  " to="/">
              Shop
            </Link>
          )}
        </li>
        <li onClick={() => setMenu("men")}>
          {menu === "men" ? (
            <Link className="side-link active" to="/men">
              Men
            </Link>
          ) : (
            <Link className="side-link" to="/men">
              Men
            </Link>
          )}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link className="side-link" to="/women">
            Women
          </Link>
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link className="side-link" to="/kids">
            Kids
          </Link>
        </li>
      </ul>

      <div className="side-login">
        <Link to="/login">
          {" "}
          <button>Login</button>
        </Link>
        <Link to="/cart">
          {" "}
          <img src={shopping} />
        </Link>
        <div className="cart-count">0</div>
      </div>
    </div>
  );
};

export default Sidebar;
