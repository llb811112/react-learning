import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const takeawayStore = createSlice({
    name:'takeaway',
    initialState:{
        takeawayList:[],
        tableIndex:'0'
    },
    reducers:{
        setTakeaway(state,action){
            state.takeawayList = action.payload
        },
        // active
        setTable(state,action){
            state.tableIndex = action.payload
        }
    }
})

//异步请求;
export const {  setTakeaway, setTable } = takeawayStore.actions
const url = 'http://localhost:3004/takeaway'
const fetchTakeawayList = () =>{
    return async(dispatch)=>{
        const res = await axios.get(url)
        const list = dispatch(setTakeaway(res.data))
        console.log(list)
    }
}
export { fetchTakeawayList }
const TakeawayReducer = takeawayStore.reducer
export default TakeawayReducer