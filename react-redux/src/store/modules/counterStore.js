import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 0 }

const counterStore = createSlice({
  name: 'counter',
  //初始化 state ;
  initialState,
  //修改状态的方法 同步方法 支持直接修改;
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
  },
})
//解构出来actionCreater函数;
export const { increment, decrement, incrementByAmount } = counterStore.actions
//获取reducer
const counterReducer = counterStore.reducer
export default counterReducer