import * as actionType from '../actions/actionTypes';

const initialState = {
    cart: [],
    total: 0
};


const cartReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case actionType.ADD_TO_CART:
        const updatedCart = [...state.cart, payload];
            return {
                ...state,
                cart: updatedCart,
                total: updatedCart.reduce((a, b) => a + b.price * b.qty, 0)
            }

        case actionType.ADD_TO_QTY: {

            const updatedState = state.cart.map((product) => {
                return product.id === payload.id
                  ? { ...payload, qty: payload.qty + 1 }
                  : product;
              });
            return {
                ...state,
               cart: updatedState,
               total: updatedState.reduce((a, b) => a + b.price * b.qty, 0)
            }
        }

        case actionType.SUBTRACT_FROM_QTY: {

            const updatedState = state.cart.map((product) => {
                return product.id === payload.id
                  ? { ...payload, qty: payload.qty - 1 }
                  : product;
              })
            return {
                ...state,
                cart: updatedState,
                total: updatedState.reduce((a, b) => a + b.price * b.qty, 0)
            }
        }

        case actionType.REMOVE_FROM_CART: {

            const updatedState = state.cart.filter(x => x.id !== payload.id);
            return {
                ...state,
                cart: updatedState,
                total: updatedState.reduce((a, b) => a + b.price * b.qty, 0)
            }
        }
        default:
            return state;
    };
};

export default cartReducer;
