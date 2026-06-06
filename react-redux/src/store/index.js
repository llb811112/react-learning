import { configureStore } from "@reduxjs/toolkit"

import counterReducer  from "./modules/counterStore.js"
import channelReducer  from "./modules/channelStore.js"

const store = configureStore({
    reducer:{
        counter:counterReducer,
         channel: channelReducer 
    }
})

export default store