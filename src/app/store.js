import {configureStore} from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice';

//const persisted = JSON.parse(localStorage.getItem("cart") || "null");
//const preloadedState = persisted ?? undefined;

const store = configureStore({
	reducer: {
		cart: cartReducer
	},
	// preloadedState,
});

store.subscribe(()=>{
	console.log(store.getState());
});

export default store;