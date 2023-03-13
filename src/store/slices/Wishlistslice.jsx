import { createSlice } from "@reduxjs/toolkit";
const wishlistslice=createSlice({
    name:"wishlistData",
    initialState:{
        UserwishlistData:[]   
     },
    reducers:{
        addToWishlist(state,action){
            const index=state.UserwishlistData.findIndex((item)=>item.id==action.payload.id);
            if(index==-1){

                state.UserwishlistData.push(action.payload);
            }
            else{
                state.UserwishlistData.splice(index,1);
            }
        }
    }
    
    
})
export default wishlistslice.reducer
export const {addToWishlist}=wishlistslice.actions;