import * as actionType from '../actions/actionTypes';

const initialState = [];

const cartReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case actionType.ADD_TO_CART:
            return [
                ...state,
                payload
            ]

        case actionType.ADD_TO_QTY: {
            const updatedState = state.map((product) => {
                return product.id === payload.id
                  ? { ...payload, qty: payload.qty + 1 }
                  : product;
              });
            return updatedState;
        }

        case actionType.SUBTRACT_FROM_QTY: {
            const updatedState = state.map((product) => {
                return product.id === payload.id
                  ? { ...payload, qty: payload.qty - 1 }
                  : product;
              })
            return updatedState;
        }

        case actionType.REMOVE_FROM_CART: {
            const updatedState = state.filter(x => x.id !== payload.id);
            return updatedState;
        }

        default:
            return state;

    };
};

export default cartReducer;
