import * as actionType from './actionTypes';


export const addToCart = (product) => dispatch => {
    dispatch({
        type: actionType.ADD_TO_CART,
        payload: product
    })
  };

  export const removeFromCart = (product) => dispatch => {
    dispatch({
        type: actionType.REMOVE_FROM_CART,
        payload: product
    })
  };


  export const addToQty = (product) => dispatch => {
    dispatch({
        type: actionType.ADD_TO_QTY,
        payload: product
    })
  };

  export const subtractFromQty = (product) => dispatch => {
    dispatch({
        type: actionType.SUBTRACT_FROM_QTY,
        payload: product
    })
  };



