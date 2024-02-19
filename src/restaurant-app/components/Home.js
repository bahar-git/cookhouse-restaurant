import "../assets/Home.css";
import React from "react";
import { useSelector } from "react-redux";
import { Spinner, UncontrolledCarousel } from "reactstrap";

export const Home = () => {
  const stateData = useSelector((state) => state.meals);
  const data = stateData?.dataMeals?.data || [];

  const carouselImages = data?.reduce((accum, currVal) => {
    accum.push({ src: currVal.imgMeal });
    return accum;
  }, []);

  return (
    <main>
      <section className="welcomeContainer">
        <h2>Welcome to Cook House</h2>
        <p>Share the joy, and enjoy our finest meals</p>
      </section>

      <section className="carouselContainer">
        {data && data.length > 0 ? (
          <UncontrolledCarousel items={carouselImages} />
        ) : (
          <div className="spinner">
            <Spinner />
            <p>Loading...</p>
          </div>
        )}
      </section>
    </main>
  );
};
