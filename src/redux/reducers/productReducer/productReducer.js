import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    productLoader: false,
    productErrorMessage: null,
    data: [],
    status: 'idle',
    cart: [],
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        productLoading(state) {
            state.productLoader = true;
            state.productErrorMessage = null;
        },
        productSuccess(state, action) {
            state.productLoader = false;
            state.productErrorMessage = null;
            state.data = action.payload;
        },
        productFailure(state, action) {
            state.productLoader = false;
            state.productErrorMessage = action.errorMessage;
        },
        addToCart(state, action) {
            const product = state.data.find(item => item.id === action.payload.id);
            const inCart = state.cart.find(item => item.id === action.payload.id);

            if (inCart) {
                inCart.quantity += 1;
            } else {
                state.cart.push({ ...product, quantity: 1 });
            }
        },
        removeFromCart(state, action) {
            const inCartIndex = state.cart.findIndex(item => item.id === action.payload.id);
            // thi to reduce the quantity to 0 if ther is any item in cart
            if (inCartIndex !== -1) {
                if (state.cart[inCartIndex].quantity > 1) {
                    state.cart[inCartIndex].quantity -= 1;
                } else {
                    state.cart.splice(inCartIndex, 1);
                }
            }
        }
    }
});

export const {
    productLoading,
    productSuccess,
    productFailure,
    addToCart,
    removeFromCart,
} = productSlice.actions;

export default productSlice.reducer;
