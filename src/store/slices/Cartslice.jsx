import { createSlice } from "@reduxjs/toolkit";
 const CartSlice=createSlice({
    name:"cart",
    initialState:{
      cartItems:[],
      cartCount:0,
      cartTotal:0,
      isCartOpen:false
    },
    reducers:{
        addTocart(state,action){
            
              const itemIndex=state.cartItems.findIndex((item)=>item.id==action.payload.id);
              console.log(action.payload.id);
              console.log(itemIndex);
              if(itemIndex>=0){
                state.cartItems[itemIndex].cartQuantity+=1;
              }
              else{
                const tempProduct={...action.payload,cartQuantity:1};
                state.cartItems.push(tempProduct);
              }
    
            // state.push(action.payload)
        },
        removeFromCart(state,action){
            state.cartItems.splice(action.payload,1)
            console.log("hi");
        },
        DeleteCart(state,action){
            return [];

        },
        SubtractFromCart(state,action){
          //if quantity greater than 1 quantity ko decreace kardenge varna 
          //if quantity is 1 toh usko remove from cart kardenge
          const index=state.cartItems.findIndex((item)=>item.id==action.payload.id);
          console.log(index)
          if(state.cartItems[index].cartQuantity>1){
            state.cartItems[index].cartQuantity-=1;
          }
          else if(state.cartItems[index].cartQuantity==1){
            console.log(action.payload)
            state.cartItems.splice(index,1);
            // console.log(action.payload)

          }
        },
        Cartcountfunction(state,action){
          let quantity=0
          state.cartItems.map((item)=>quantity+=item.cartQuantity);
          state.cartCount=quantity;

        },
        cartTotalfunction(state,action){
          let {total,quantity}=state.cartItems.reduce(
            (cartTotal,cartItems)=>{
              const {price,cartQuantity}=cartItems;
              const itemTotal=price* cartQuantity;
              cartTotal.total+=itemTotal
              cartTotal.quantity+=cartQuantity
              return cartTotal

            }
            ,{total:0,quantity:0});
            state.cartTotal=total;
        },
        Cartopenfunction(state,action){
          state.isCartOpen?state.isCartOpen=false:state.isCartOpen=true;

        }
        
    }
    
});
export default CartSlice.reducer;
export const {addTocart}=CartSlice.actions;
export const {removeFromCart}=CartSlice.actions;
export const {SubtractFromCart}=CartSlice.actions;
export const {Cartcountfunction}=CartSlice.actions;
export const {cartTotalfunction}=CartSlice.actions;
export const {Cartopenfunction}=CartSlice.actions;
// export const {cartItems}=CartSlice.reducer.cartItems;
