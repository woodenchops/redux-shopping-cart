import * as actionType from './actionTypes';


export const addToCart = (product) => dispatch => {
    dispatch({
        type: actionType.ADD_TO_CART,
        payload: product
    })
  };

  export const updateQty = (product) => dispatch => {
    dispatch({
        type: actionType.UPDATE_QTY,
        payload: product
    })
  };

  export const removeFromCart = (product) => dispatch => {
    dispatch({
        type: actionType.REMOVE_FROM_CART,
        payload: product
    })
  };



