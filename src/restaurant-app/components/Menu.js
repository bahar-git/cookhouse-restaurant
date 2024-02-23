import "../assets/Menu.css";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export const Menu = ({ handleOpen }) => {
  const loc = useLocation();
  const pathName = loc.pathname.slice(1);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const [menuCategory, setMenuCategory] = useState([]);

  const stateData = useSelector((state) => state.meals);
  const data = stateData?.dataMeals?.data || [];

  // -----------------------------------------------------

  const getCategories = () => {
    const obj = {};
    data?.forEach((item) => {
      obj[item.category] = (item.category || 0) + 1;
    });

    setMenuCategory(Object.keys(obj));
  };
  /*   const getCategories = () => {
    if (data.length > 0) {
      const categoryObj = data?.reduce((accum, currVal) => {
        accum[currVal.category] = (accum[currVal.category] || 0) + 1;
        return accum;
      }, {});
      setMenuCategory(Object.keys(categoryObj));
    }
  }; */

  useEffect(() => {
    getCategories();
  }, [dropdownOpen, menuCategory, data]);

  return (
    <section className="d-flex">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle
          caret
          className={
            pathName.includes("Menu")
              ? "menuDropdown activeLink"
              : "menuDropdown"
          }
        >
          Menu
        </DropdownToggle>

        <DropdownMenu className="menuDropList">
          {menuCategory.map((item, index) => {
            return (
              <Link
                to={`/Menu/${item}`}
                value={item}
                onClick={handleOpen}
                className="linkDropList"
                key={index}
              >
                <DropdownItem
                  className={pathName.includes(item) ? "activeDropList" : ""}
                >
                  {item}
                </DropdownItem>
              </Link>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    </section>
  );
};
