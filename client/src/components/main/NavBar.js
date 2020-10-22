import React, { useState } from "react";
import Brand from "../../static/logo.png";
import { Link, withRouter } from "react-router-dom";

const isActive = (history, path) => {
  if (history.location.pathname === path) return { color: "#fff" };
  else return { color: "#96a8d8" };
};

function NavBar({ history }) {
  const [isOpen, setIsOpen] = useState(false);
  const sideBar = () =>
    isOpen ? " offcanvas-menu-overlay active" : "offcanvas-menu-overlay ";
  const sideBar2 = () =>
    isOpen ? "offcanvas-menu-wrapper active" : " offcanvas-menu-wrapper";
  return (
    <React.Fragment>
      <div className={`${sideBar()}`}></div>

      <div className={`${sideBar2()}`}>
        <div className="offcanvas__search">
          <form>
            <input type="text" placeholder="Search and hit enter..." />
          </form>
          <i onClick={() => setIsOpen(!isOpen)} className="fa fa-times"></i>
        </div>
        <div className="offcanvas__logo">
          <Link to="/">
            <img src={Brand} alt="" />
          </Link>
        </div>

        <div className="mb-2">
          <ul>
            <li className="m-2">
              <Link to="/" style={{ color: "#fff" }}>
                Home
              </Link>
            </li>
            <li className="m-2">
              <Link to="/" style={{ color: "#fff" }}>
                Home
              </Link>
            </li>
            <li className="m-2">
              <Link to="/" style={{ color: "#fff" }}>
                Home
              </Link>
            </li>
          </ul>
        </div>
        <div className="offcanvas__social">
          <Link to="/">
            <i className="fa fa-facebook" />
          </Link>
          <Link to="/">
            <i className="fa fa-facebook" />
          </Link>
          <Link to="/">
            <i className="fa fa-facebook" />
          </Link>
          <Link to="/">
            <i className="fa fa-facebook" />
          </Link>
          <Link to="/">
            <i className="fa fa-facebook" />
          </Link>
        </div>
      </div>

      <header className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <div className="header__logo">
                <Link to="/">
                  <img src={Brand} alt="" />{" "}
                </Link>
              </div>
              <nav className="header__menu mobile-menu">
                <ul>
                  <li className="active">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/events">Events</Link>
                  </li>
                  <li>
                    <Link to="/register">Pages</Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="/dashboard">Username</Link>
                      </li>
                      <li>
                        <Link to="/event/create">Create Event</Link>
                      </li>
                      <li>
                        <Link to="/Logout">Blog</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-4">
              <div className="header__right">
                <div className="header__right__search">
                  <form action="#">
                    <input type="text" placeholder="Search and hit enter..." />
                    <button type="submit">
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                </div>
                <div className="header__right__social">
                  <Link to="/" style={{ color: "#fff" }}>
                    <i className="fa fa-facebook"></i>
                  </Link>
                  <Link to="/">
                    <i className="fa fa-facebook" style={{ color: "#fff" }}></i>
                  </Link>
                  <Link to="/">
                    <i className="fa fa-facebook" style={{ color: "#fff" }}></i>
                  </Link>
                  <Link to="/">
                    <i className="fa fa-facebook" style={{ color: "#fff" }} />
                  </Link>
                  <Link to="/">
                    <i className="fa fa-facebook" style={{ color: "#fff" }}></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="canvas__open" onClick={() => setIsOpen(!isOpen)}>
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default withRouter(NavBar);
