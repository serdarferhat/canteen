/** @format */

import "../assets/style.css"

const Header = () => {
  return (
    <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
      <div className="collapse navbar-collapse row" >
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item col-6 mx-5">
          <a className="nav-link" href="/">Menü</a>
        </li>
        <li className="nav-item col-1">
          <a className="nav-link" href="/order">Order </a>
        </li>
        <li className="nav-item col-2">
          <a className="nav-link" href="/deliver">Deliver</a>
        </li>
        <li className="nav-item col-3">
          <a className="nav-link" href="/myorder">My Order</a>
        </li>
      </ul>
      </div>
  </nav>
  );
};

export default Header;
