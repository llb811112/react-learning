import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const takeawayStore = createSlice({
    name:'takeaway',
    initialState:{
        takeawayList:[],
        tableIndex: 0,
        cartList:[]
    },
    reducers:{
        setTakeaway(state,action){
            state.takeawayList = action.payload
        },
        // active
        setTable(state,action){
            state.tableIndex = action.payload
        },
addCart(state, action) {
  // 1. 拿到要添加的商品
 

  // 2. 找购物车里有没有同 id 的商品
  const item = state.cartList.find(item => item.id === action.payload.id);

  if (item) {
     item.count++
    
  } else {
 
 
state.cartList.push(action.payload);
  }
}
    }
})

//异步请求;
export const {  setTakeaway, setTable, addCart } = takeawayStore.actions
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