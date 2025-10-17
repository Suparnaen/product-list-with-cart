import { createSlice } from "@reduxjs/toolkit";


const cachedCart = JSON.parse(localStorage.getItem("cart"));

const cartSlice= createSlice({
	name:"cart",
	initialState:{
		cart:cachedCart ||[],
	},
	reducers:{
		addToCart:(state,action)=>{
			state.cart.push(action.payload);
		},
		removeFromCart:(state,action)=>{
			state.cart=state.cart.filter(item=>item.id!==action.payload);
		},
		clearCart:(state)=>{
			state.cart=[];
		},
		incrementQty:(state,action)=>{
			state.cart = state.cart.map(item => {
				if(item.id === action.payload.id){
					return{
						...item,
						qty:item.qty+1
					}
				}
				return item;
			})
		},
		decrementQty:(state,action)=>{
			state.cart = state.cart.map(item => {
				if(item.id === action.payload.id && item.qty>1){
					return{
						...item,
						qty:item.qty-1
					}
				}else if(item.id === action.payload.id && item.qty===1){
					return undefined
				}
				return item;
			})
		},
	}
});
export const {addToCart,removeFromCart,clearCart,incrementQty,decrementQty}=cartSlice.actions;
export default cartSlice.reducer