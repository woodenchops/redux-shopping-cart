export const handleUpdateQty = ({ cart, updateQty, type, itemAlreadyInCart }) => {
    switch (type) {
      case "ADD": {
        const updatedState = cart.map((product) => {
          return product.id === itemAlreadyInCart.id
            ? { ...itemAlreadyInCart, qty: itemAlreadyInCart.qty + 1 }
            : product;
        });
        updateQty(updatedState);
        return;
      }
      case "REMOVE": {
        const updatedState = cart
          .map((product) => {
            return product.id === itemAlreadyInCart.id &&
              itemAlreadyInCart.qty > 0
              ? { ...itemAlreadyInCart, qty: itemAlreadyInCart.qty - 1 }
              : product;
          })
          .filter((x) => x.qty !== 0);
        updateQty(updatedState);
        return;
      }
      default:
        return itemAlreadyInCart;
    }
  };


  export const reduceQty = ({cart, updateQty, id }) => {
    const itemAlreadyInCart = cart.find((product) => product.id === id);

    if (itemAlreadyInCart) {
      handleUpdateQty({ cart, updateQty, type: "REMOVE", itemAlreadyInCart });
      return;
    }
  };

  export const addQty = ({cart, updateQty, id }) => {
    const itemAlreadyInCart = cart.find((product) => product.id === id);

    if (itemAlreadyInCart) {
      handleUpdateQty({ cart, updateQty, type: "ADD", itemAlreadyInCart });
    }
  };
