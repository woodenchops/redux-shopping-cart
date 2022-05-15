import React from "react";
import ActionButton from "../../styledComponents/ActionButton/ActionButton";
import Card from "../../styledComponents/Card/Card";
import Heading from "../../styledComponents/Heading/Heading";
import { connect } from "react-redux";
import { addToCart, addToQty } from "../../actions/cartActions";

const ProductItem = ({ title, id, price, addToCart }) => {
  const handleAddToCart = (id) => {
    addToCart({ title, qty: 1, price, id });
  };

  return (
    <Card>
      <Heading>{title}</Heading>
      <p>Price: £{price}</p>
      <ActionButton onClick={() => handleAddToCart(id)}>Add</ActionButton>
    </Card>
  );
};

export default connect(null, {
  addToCart,
  addToQty,
})(ProductItem);
