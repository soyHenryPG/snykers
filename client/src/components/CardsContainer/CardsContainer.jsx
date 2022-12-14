import React from "react";
import Card from "./Card";
import "../../styles/cardsContainer.css";
import { useSelector } from "react-redux";

const CardsContainer = ({ productsSliced }) => {
  const { userDashboard } = useSelector((state) => state.users);

  return (
    <div className="cardsGroupContainer">
      <div className="cardsGroup">
        <div className="d-flex flex-wrap justify-content-center mb-5">
          {productsSliced?.map((product, i) => (
            <Card
              key={i}
              _id={product._id.toString()}
              name={product.name}
              brand={product.brand}
              card_picture={product.card_picture}
              price={product.price}
              rating={Math.round(product.rating)}
              checkHeart={userDashboard?.favourites?.some(
                (idProduct) => idProduct === product._id
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;
