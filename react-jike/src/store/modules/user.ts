import {request} from '@/utils/index';
import { createSlice } from '@reduxjs/toolkit';
import { setToken as _setToken , getToken } from '@/utils/token';

 const userStore = createSlice({
  name: 'user',
  initialState: {   
    token: getToken() || '', // 从 localStorage 中获取 token
    userInfo: null, // 用户信息
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;

       _setToken(action.payload); // 将 token 存储到 localStorage
    
    
      },
      setUserInfo(state, action) {
      state.userInfo = action.payload;
    }
    },
    extraReducers: (builder) => {
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.token = action.payload;
      _setToken(action.payload);
    })
    builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    })
  },
  
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
        console.log(res.data.data.token)
    return res.data.data.token;   // 会自动作为 action.payload

  }
);

export const fetchUserInfo = createAsyncThunk(
  '/user/info',
  async () => {
    const res = await request.get('/user/profile', {

    });
    console.log(res.data.data)
    return res.data.data;
  }
);

export const { setToken , setUserInfo} = userStore.actions;
// 导出 reducer
const userReducer = userStore.reducer;
export default userReducer;