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

        case actionType.UPDATE_QTY: {
            const updatedState = [...payload];
            return updatedState;
        }

        case actionType.REMOVE_FROM_CART: {
            const updatedState = [...payload];
            return updatedState;
        }

        default:
            return state;

    };
};

export default cartReducer;
