import "../assets/Bag.css";
import React, { useState } from "react";
import { Table, Button } from "reactstrap";

export const Bag = () => {
  const bagData = JSON.parse(localStorage.getItem("bagData"));
  const [filteredBagData, setFilteredBagData] = useState(bagData);

  const [tableHead] = useState([
    "#",
    "Picture",
    "Name",
    "Per",
    "Quant.",
    "Sum",
  ]);

  const handleRemoveBtn = (id) => {
    const filteredData = bagData.filter((item) => item.idMeal !== id);
    setFilteredBagData(filteredData);
    localStorage.setItem("bagData", JSON.stringify(filteredData));
  };

  const totalPrice = filteredBagData?.reduce((accum, currVal) => {
    accum += currVal.price * currVal.quantity;
    return accum;
  }, 0);

  return (
    <main className="bagContainer">
      {!filteredBagData || filteredBagData?.length === 0 ? (
        <h2>No Meals in the Bag yet</h2>
      ) : (
        <>
          <h2>Selected Meals in the Bag</h2>

          <section className="ordersListContainer">
            {filteredBagData?.map((item, index) => {
              const { idMeal, strMeal, imgMeal, quantity, price } = item;
              return (
                <div key={index} className="ordersWrapper">
                  <div className="imgTdWrapper">
                    <img alt="meal-pic" src={imgMeal} />
                  </div>

                  <div className="calcWrapper">
                    <p>{strMeal}</p>
                    <p>
                      {quantity} x ${price}per
                    </p>
                    <p>sum: ${quantity * price}</p>
                  </div>

                  <Button
                    className="btnRemove"
                    onClick={() => handleRemoveBtn(idMeal)}
                  >
                    X
                  </Button>
                </div>
              );
            })}
          </section>

          <section className="tableWrapper">
            <Table>
              <thead>
                <tr>
                  {tableHead.map((item, index) => {
                    return <th key={index}>{item}</th>;
                  })}
                </tr>
              </thead>

              <tbody>
                {filteredBagData?.map((item, index) => {
                  const { idMeal, strMeal, imgMeal, quantity, price } = item;
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td className="imgTdWrapper">
                        <img src={imgMeal} alt="meal-pic" />
                      </td>
                      <td>{strMeal}</td>
                      <td>${price?.toFixed(2)}</td>
                      <td className="quant">{quantity}</td>
                      <td>${(quantity * price)?.toFixed(2)}</td>
                      <td>
                        <Button
                          className="btnRemove"
                          onClick={() => handleRemoveBtn(idMeal)}
                        >
                          X
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </section>

          <h4>Total: ${totalPrice?.toFixed(2)}</h4>
        </>
      )}
    </main>
  );
};
