import "../assets/Meals.css";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, Button } from "reactstrap";

export const Meals = () => {
  const params = useParams();
  const paramsCategory = params.category;

  const stateData = useSelector((state) => state.meals);
  const data = stateData?.dataMeals?.data || [];

  const [idReadMore, setIdReadMore] = useState("");
  const [ingredientsReadMore, setIngredientsReadMore] = useState("");
  const [typesData, setTypesData] = useState([]);

  const fromLocal = JSON.parse(localStorage.getItem("bagData"));
  const fromLocalBagData = fromLocal?.length ? fromLocal : [];
  const [bag, setBag] = useState(fromLocalBagData);

  //----------------------------------------------

  const getTypesData = () => {
    const obj = {};
    data?.forEach((item) => {
      if (item.strType !== undefined) {
        obj[item?.strType] = item?.strType || 0;
      }
    });
    setTypesData(Object.keys(obj));
  };

  useEffect(() => {
    getTypesData();
  }, []);

  //----------------------------------------------

  const handleReadMore = (id) => {
    setIdReadMore(id);
    const getIngredients = data
      .find((item) => {
        return item.idMeal === id && item.ingredients;
      })
      .ingredients.reduce((accum, currVal) => {
        return (accum += `${currVal.toLowerCase()}, `);
      }, "");
    setIngredientsReadMore(getIngredients);
  };

  const handleReadLess = (id) => {
    if (id === idReadMore) {
      setIdReadMore("");
    }
  };

  //----------------------------------------------

  const handleAddBtn = (item) => {
    const isItemExist = bag.some((meal) => meal.idMeal === item.idMeal);
    if (isItemExist) {
      const quantityAdd = bag.map((meal) => {
        if (meal.idMeal === item.idMeal) {
          meal.quantity++;
        }
        return meal;
      });
      setBag(quantityAdd);
    } else {
      setBag([...bag, { ...item, quantity: 1 }]);
    }
    alert(`Successfully ${item.strMeal} was added to bag!`);
  };

  localStorage.setItem("bagData", JSON.stringify(bag));

  return (
    <main className="mealsContainer">
      <h2>Here is our yummy {paramsCategory} menu</h2>

      {typesData.length > 0 && paramsCategory === "drink" ? (
        typesData.map((types, index) => {
          return (
            <section key={index}>
              <h2 className="drinkType">{types}</h2>
              {data.length > 0 && (
                <div className="mealsWrapper">
                  {data.map((item) => {
                    const {
                      idMeal,
                      strMeal,
                      imgMeal,
                      category,
                      price,
                      ingredients,
                      strType,
                    } = item;
                    return strType === types ? (
                      <Card
                        key={idMeal}
                        className={idMeal === idReadMore && "openRead"}
                      >
                        <div className="imgWrapper">
                          <img alt={`${category}-pic`} src={imgMeal} />
                        </div>

                        <CardBody>
                          <CardTitle tag="h6">{strMeal}</CardTitle>
                          <div>
                            <span className="ingredients">Ingredients:</span>{" "}
                            {idReadMore === idMeal ? (
                              <>
                                {" "}
                                {ingredientsReadMore}
                                <span
                                  onClick={() => handleReadLess(idMeal)}
                                  className="read"
                                >
                                  {" "}
                                  ...read less
                                </span>
                              </>
                            ) : (
                              <>
                                {ingredients[0].toLowerCase()},{" "}
                                {ingredients[1].toLowerCase()}{" "}
                                <span
                                  onClick={() => handleReadMore(idMeal)}
                                  className="read"
                                >
                                  ...read more
                                </span>
                              </>
                            )}
                          </div>
                          <p className="price">${price.toFixed(2)}</p>

                          <Button
                            className={
                              idMeal === idReadMore
                                ? "openReadBtn addBtn"
                                : "addBtn"
                            }
                            onClick={() => handleAddBtn(item)}
                          >
                            add to bag
                          </Button>
                        </CardBody>
                      </Card>
                    ) : null;
                  })}
                </div>
              )}
            </section>
          );
        })
      ) : (
        <section>
          {data.length > 0 && (
            <div className="mealsWrapper">
              {data.map((item) => {
                const {
                  idMeal,
                  strMeal,
                  imgMeal,
                  category,
                  price,
                  ingredients,
                } = item;
                return category === paramsCategory ? (
                  <Card
                    key={idMeal}
                    className={idMeal === idReadMore && "openRead"}
                  >
                    <div className="imgWrapper">
                      <img alt={`${category}-pic`} src={imgMeal} />
                    </div>

                    <CardBody>
                      <CardTitle tag="h6">{strMeal}</CardTitle>
                      <div>
                        <span className="ingredients">Ingredients:</span>{" "}
                        {idReadMore === idMeal ? (
                          <>
                            {" "}
                            {ingredientsReadMore}
                            <span
                              onClick={() => handleReadLess(idMeal)}
                              className="read"
                            >
                              {" "}
                              ...read less
                            </span>
                          </>
                        ) : (
                          <>
                            {ingredients[0].toLowerCase()},{" "}
                            {ingredients[1].toLowerCase()}{" "}
                            <span
                              onClick={() => handleReadMore(idMeal)}
                              className="read"
                            >
                              ...read more
                            </span>
                          </>
                        )}
                      </div>
                      <p className="price">${price.toFixed(2)}</p>

                      <Button
                        className={
                          idMeal === idReadMore
                            ? "openReadBtn addBtn"
                            : "addBtn"
                        }
                        onClick={() => handleAddBtn(item)}
                      >
                        add to bag
                      </Button>
                    </CardBody>
                  </Card>
                ) : null;
              })}
            </div>
          )}
        </section>
      )}
    </main>
  );
};
