import React from "react";

const PizzaCard = ({ pizza }) => {
  return (
    <div className="pizzaContainer">
      <img src={`/img/pizzatypes/${pizza.img}.jpg`} alt="pizza"></img>
      <h2 className="pizzaName">{pizza.name} Pizza</h2>
      <div className="pizzaDetails">
        <h2 className="pizzaName-hover">{pizza.name} Pizza</h2>
        <span className="decorSpan"></span>
        <p className="toppings">{pizza.topping}</p>
        <h3 className="pizzaPrice">{pizza.price} Ft</h3>{" "}
      </div>
    </div>
  );
};

export default PizzaCard;
