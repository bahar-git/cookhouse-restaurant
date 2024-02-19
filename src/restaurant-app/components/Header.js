import "../assets/Header.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "./Menu";
import { TfiMenu } from "react-icons/tfi";
import { Navbar, Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";

export const Header = () => {
  const navNamesData = useSelector((state) => state?.navNames?.navNames);
  const [isOpen, setIsOpen] = useState(false);

  const loc = useLocation();
  const pathName = loc.pathname.slice(1);

  const handleOpen = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <Navbar className="my-2">
        <section>
          <Link to={"/"} className="linkLogoName">
            <img alt="logo-photo" src="./images/img_pan_meat.png" />
            <span> Cook House</span>
          </Link>
        </section>

        <section className="offcanvasWrapper">
          <TfiMenu onClick={() => setIsOpen(true)} className="menuIcon" />

          <Offcanvas isOpen={isOpen} toggle={handleOpen}>
            <OffcanvasHeader toggle={handleOpen}>
              <Link to={"/"} className="linkLogoName" onClick={handleOpen}>
                <img alt="logo-photo" src="./images/img_pan_meat.png" />
                <span> Cook House</span>
              </Link>
            </OffcanvasHeader>
            <hr />
            <OffcanvasBody>
              {navNamesData?.names?.length > 0 &&
                navNamesData.names.map((item, index) => {
                  return item === "Menu" ? (
                    <Menu handleOpen={handleOpen} />
                  ) : (
                    <Link
                      key={index}
                      to={item === "Home" ? "/" : `/${item}`}
                      onClick={handleOpen}
                      className={
                        item === "Home" && pathName === ""
                          ? "linkCanvas activeLink"
                          : item === pathName
                          ? "linkCanvas activeLink"
                          : "linkCanvas"
                      }
                    >
                      <h6>{item}</h6>
                    </Link>
                  );
                })}
            </OffcanvasBody>
          </Offcanvas>
        </section>

        <section className="navsWrapper">
          {navNamesData?.names?.length > 0 &&
            navNamesData.names.map((item, index) => {
              return item === "Menu" ? (
                <Menu />
              ) : (
                <Link
                  key={index}
                  to={item === "Home" ? "/" : `/${item}`}
                  className={
                    item === "Home" && pathName === ""
                      ? "linkNavs activeNavLink"
                      : item === pathName
                      ? "linkNavs activeNavLink"
                      : "linkNavs"
                  }
                >
                  <h6>{item}</h6>
                </Link>
              );
            })}
        </section>
      </Navbar>
    </header>
  );
};
