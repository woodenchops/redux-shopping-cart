import * as actionType from '../actions/actionTypes';

const initialState = {
    cart: [],
    total: 0
};


const cartReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case actionType.ADD_TO_CART: {

        const itemAlreadyInCart = state.cart.find((x) => x.id === payload.id);

        let updatedState;

        if(!itemAlreadyInCart) {
            updatedState = [...state.cart, payload];

        } else {
            updatedState = state.cart.map((product) => {
                return product.id === payload.id
                  ? { ...payload, qty: product.qty + 1 }
                  : product;
              });
        }

        return {
                ...state,
               cart: updatedState,
               total: updatedState.reduce((a, b) => a + b.price * b.qty, 0)
            }

    }


        case actionType.REMOVE_FROM_CART: {

            const itemInCart = state.cart.find((x) => x.id === payload.id);

            let updatedState;

            if(itemInCart.qty <= 1 || payload.all) {
                updatedState = state.cart.filter(x => x.id !== payload.id);
            } else {
                updatedState = state.cart.map((product) => {
                return product.id === payload.id
                  ? { id: payload.id, title: product.title, price: product.price, qty: product.qty - 1 }
                  : product;
              })
            }
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
