import { createContext, useContext, useReducer } from "react";

const CartContext=createContext();

export default function CartProvider({children}){
const initialstate={
    cartItems:[]
}

function cartReducer(state,action){
    switch(action.type){
        case 'ADD_TO_CART':
            return{
                ...state,
                cartItems:[...state.cartItems,action.payload]
            };
        case 'UPDATE_QUANTITY':
            return{
                ...state,
                cartItems:state.cartItems.map((item)=>item.id=== action.payload.id?{...item,quantity:action.payload.quantity}:item)
            };

        case 'REMOVE_FROM_CART':
            return{
                ...state,
                cartItems:state.cartItems.filter((item)=> item.id !== action.payload),
            };
        default:
            return state;
    }
}
const [cartState,cartDispatch]=useReducer(cartReducer,initialstate)
    return(
        <CartContext.Provider value={{cartState,cartDispatch}}>
            {children}
        </CartContext.Provider>
    )
}

const useCart=()=>{
    return useContext(CartContext)
}

export {useCart}