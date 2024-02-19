import "./assets/Restaurant.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import {
  fetchMealsData,
  getNavLinkNames,
} from "../actionsStoreReducer/sliceRestaurant";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Meals } from "./components/Meals";
import { Bag } from "./components/Bag";
import { About } from "./components/About";
import { Events } from "./components/Events";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";

export default function Restaurant() {
  const initialNavLinkNames = {
    names: ["Home", "Menu", "Bag", "About", "Events", "Contacts"],
    funcs: [<Home />, <Meals />, <Bag />, <About />, <Events />, <Contacts />],
  };
  const dispatch = useDispatch();
  const navNamesData = useSelector((state) => state?.navNames?.navNames);

  const navLinkNames = () => {
    dispatch(getNavLinkNames(initialNavLinkNames));
  };

  const allMeals = () => {
    dispatch(fetchMealsData());
  };

  useEffect(() => {
    allMeals();
    navLinkNames();
  }, []);

  return (
    <div className="containerRestaurant">
      <div className="contentWrapper">
        <Header />

        <Routes>
          {navNamesData?.names?.length > 0 &&
            navNamesData.names.map((item, index) => {
              return (
                <Route
                  key={index}
                  path={
                    item === "Home"
                      ? "/"
                      : item === "Menu"
                      ? `/Menu/:category`
                      : `/${item}`
                  }
                  element={navNamesData.funcs[index]}
                />
              );
            })}
        </Routes>
      </div>

      <div className="footerWrapper">
        <Footer />
      </div>
    </div>
  );
}
