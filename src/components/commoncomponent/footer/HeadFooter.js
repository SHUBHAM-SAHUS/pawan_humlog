import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.scss";
import men from "assets/images/men.jpg";
import { Nav } from "react-bootstrap";

import { RiGroupLine } from "react-icons/ri";
import { BsBriefcase, BsBell } from "react-icons/bs";
import dashboard from "assets/images/dashboard.png";

// import {BsBriefcase} from "react-icons/bs";

export const HeadFooter = () => {
  return (
    <>
      <header className="main_headfooter py-2 fixed-bottom">
        <div className="col-12 col-lg-4">
          <div className="">
            <Nav className="d-flex justify-content-between">
              <NavLink
                to="/dashboard"
                activeClassName="menu_active"
                className="nav_aa"
              >
                {" "}
                <img
                  src={dashboard}
                  width="20px"
                  alt="dashard"
                  className="mx-auto d-flex justify-content-center"
                />
                <p
                  className="dashboard_menu text-center"
                  activeClassName="menu_active"
                >
                  Dashboard
                </p>
              </NavLink>

              <NavLink
                to="/community"
                activeClassName="menu_active"
                className="nav_aa"
              >
                {" "}
                <RiGroupLine className="mx-auto d-flex justify-content-center icon_uu" />{" "}
                <p className="dashboard_menu text-center">community</p>{" "}
              </NavLink>

              <NavLink
                to="/jobs"
                activeClassName="menu_active"
                className="nav_aa"
              >
                <BsBriefcase className="mx-auto d-flex justify-content-center icon_uu" />{" "}
                <p className="dashboard_menu text-center"> jobs</p>{" "}
              </NavLink>

              <NavLink
                to="/notifications"
                activeClassName="menu_active"
                className="nav_aa"
              >
                <BsBell className="mx-auto d-flex justify-content-center icon_uu" />
                <p className="dashboard_menu text-center"> notification</p>
              </NavLink>

              <NavLink
                to="/profile"
                activeClassName="menu_active"
                className="nav_aa"
              >
                {" "}
                <img
                  src={men}
                  width="27px"
                  alt="dashard"
                  className="mx-auto d-flex justify-content-center Icon_uu rounded-circle"
                />
                <p className="dashboard_menu text-center">profile</p>
              </NavLink>
            </Nav>
          </div>
        </div>
      </header>
    </>
  );
};
