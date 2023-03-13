import { createSlice } from "@reduxjs/toolkit";
import { COURSE_DATA } from "../../course-data";
 const Productslice=createSlice({
    name:"product",
    initialState:{
        productData:COURSE_DATA
    },
    reducers:{
        FilterthroughSearch(state,action){
            let filteredData=state.productData.filter((data)=>data.name.toLocaleLowerCase().includes(action.payload));
            console.log(filteredData)
            state.productData=filteredData;
        },
        CancelButtonfunction(state,action){
            state.productData=COURSE_DATA;
            console.log(state.productData);
            // action.payload='';

        }


    }
})
console.log(Productslice.actions)
export default Productslice.reducer;
export const {FilterthroughSearch}=Productslice.actions
export const {CancelButtonfunction}=Productslice.actions