import axios from 'axios'
//账单列表相关store
import { createSlice } from '@reduxjs/toolkit'
const billStore = createSlice({
    name:'bill',
    //数据状态 state
    initialState:{
        billList:[]
    },
    reducers:{
        //同步修改方法;
        setBillList(state,action){
            state.billList = action.payload
        },
      //添加账单方法;
        addBill(state,action){
            state.billList.push(action.payload)
        }
    }
})

//解构actionCreater函数;
export const { setBillList, addBill } = billStore.actions
// 编写异步
export const getBillList =()=>{
    return async(dispatch)=>{
        //编写异步请求;
        const res = await axios.get('http://localhost:8888/ka')
        //触发同步reducer
        dispatch(setBillList(res.data))
    }
}

const addBillList =(data)=>{
    return async(dispatch)=>{
        //编写异步请求;
        const res = await axios.get('http://localhost:8888/ka',data)
        //触发同步reducer
        dispatch( addBill(res.data))
    }
}

//导出reducer;
const reducer = billStore.reducer
export { addBillList }
export default reducer