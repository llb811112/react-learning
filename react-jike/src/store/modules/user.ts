import {request} from '@/utils/index';
import { createSlice } from '@reduxjs/toolkit';
 

 const userStore = createSlice({
  name: 'user',
  initialState: {   
    token: '',
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    }}
});

export interface ApifoxModel {
    /**
     * 验证码，后台判断了, 只能是字符串"246810" (因为发送验证码需要花钱, 所以后端并未集成发送验证码真正功能)
     */
    code: string;
    /**
     * 手机号，校验: 符合11位手机号
     */
    mobile: string;
 
}
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchLogin = createAsyncThunk(
  '/user/login',
  async (data: ApifoxModel) => {
    const res = await request.post('/authorizations', data);
    return res.data.token;   // 会自动作为 action.payload
  }
);

 
export const { setToken } = userStore.actions;
// 导出 reducer
const userReducer = userStore.reducer;
export default userReducer;