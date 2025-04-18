import { configureStore, createSlice } from "@reduxjs/toolkit";


const cartProductsSlice = createSlice({
name: 'cartproducts',
initialState: {products: []},
reducers:{
  addToCart: (state, action) => {
    const productExists = state.products.find(item => item.id === action.payload.id);
    if (productExists) {
      productExists.quantity += 1;
    } else {
      state.products.push( {  ...action.payload, quantity: 1 });
    }
  },
  decrementProduct: (state, action) =>{
    const productExists = state.products.find((item) => item.id === action.payload.id);
    if(productExists){
      productExists.quantity > 1 ? productExists.quantity-- : state.products.splice(state.products.indexOf(product), 1);
    }
  },
  removeProduct: (state, action) =>{
    state.products = state.products.filter(item => item.id !== action.payload.id)
  },
  clearCart: (state)=>{
    state.products = []
  }
}
})

const productsStore = configureStore({
  reducer:{
   products: cartProductsSlice.reducer
  }
})

export const cartActions = cartProductsSlice.actions

export default productsStore;