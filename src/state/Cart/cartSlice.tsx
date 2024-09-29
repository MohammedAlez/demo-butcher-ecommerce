'use client'

import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface CartItemState { 
    id:number
    title:string
    price:number
    quantity:number
    image:string
    weigth?:string
}



// const cart = localStorage.getItem('shopping-cart')
const initialState:CartItemState[] = [];

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        initializeCart: (state) => {
            if (typeof window !== "undefined") {
                const cart = sessionStorage.getItem('shopping-cart');
                
                return cart ? JSON.parse(cart) : [];
            }
            return state;
        },
        addItem:(state, action:PayloadAction<CartItemState>)=>{
            const item = state.findIndex((e)=>e.id===action.payload.id)
            if(item===-1)
                state.push(action.payload);
            else{
                state[item].quantity = action.payload.quantity;
                if(action.payload.weigth){
                    state[item].weigth = action.payload.weigth;
                }
            }
            sessionStorage.setItem('shopping-cart',JSON.stringify(state))
        },
        removeItem:(state, action:PayloadAction<number>)=>{
            const newState = state.filter(e=>e.id!=action.payload);
            sessionStorage.setItem('shopping-cart',JSON.stringify(newState))
            return newState
        },
        resetCart:()=>{
            sessionStorage.removeItem('shopping-cart');
            return initialState
        }
    }
})

export const { addItem, removeItem, initializeCart, resetCart } = cartSlice.actions
export default cartSlice.reducer
