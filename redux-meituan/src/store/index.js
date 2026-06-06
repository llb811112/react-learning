import { configureStore } from "@reduxjs/toolkit"

import TakeawayReducer  from "./modules/takeaway.js"
 

const store = configureStore({
    reducer:{
        takeaway:TakeawayReducer,
 
    }
})

export default store
