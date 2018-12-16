import React, { Component } from "react";

export default class header extends Component {
  render() {
    return (
      <header>
        <div className="header--top">
          <div className="container">
            <div className="logo left">
              <a href="#" title="Leapfrog Technology">
                <img
                  src={require("../assets/leapfrog-icon.svg")}
                  alt="Leapfrog Technology"
                />
              </a>
            </div>
            <div className="search-box left">
              <form>
                <img
                  className="search-box__icon left"
                  src={require("../assets/search-icon.svg")}
                  alt="Search"
                />
                <input
                  className="search-box__placeholder left"
                  type="text"
                  placeholder="Enter search query"
                />
              </form>
            </div>
            <ul className="header-right right">
              <li className="header-right__item">
                <a href="#" title="Notifications">
                  <img
                    src={require("../assets/notification-icon.svg")}
                    alt="Notifications"
                  />
                </a>
              </li>
              <li className="header-right__item">
                <a href="#" title="David Smith">
                  <div className="left nametag nametag--lg nametag--purple">
                    DS
                  </div>
                  <span>David Smith</span>
                </a>
              </li>
              <li className="header-right__item">
                <a href="#" title="Logout">
                  <img
                    src={require("../assets/logout-icon.svg")}
                    alt="Logout"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav">
          <div className="nav--top">
            <div className="container">
              <ul className="tabs left">
                <li className="tabs__item">
                  <a href="#" title="Projects">
                    Projects
                  </a>
                </li>
                <li className="tabs__item">
                  <a href="#" title="Resource">
                    Resources
                  </a>
                </li>
                <li className="tabs__item  tabs__item--active">
                  <a href="#" title="Time Sheet">
                    Linky
                  </a>
                </li>
              </ul>
              <div className="nav--top--right right">
                <button className="btn btn--primary btn--curved">
                  <span className="left">Add Project</span>
                </button>
              </div>
            </div>
          </div>
          <div className="nav--bot">
            <div className="container">
              <ul className="prim-nav left">
                <li className="prim-nav__item prim-nav__item--active">
                  <a href="#" title="Add Time Log">
                    Dashboard
                  </a>
                </li>
                <li className="prim-nav__item">
                  <a href="#" title="Time Sheet Report">
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
