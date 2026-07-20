import { fetchUserInfo } from '@/store/modules/user';
import { useAppDispatch } from '@/store/hooks';
import { useEffect } from 'react';
const Home = () => {
  const dispatch = useAppDispatch();
useEffect(() => {
  const getUser = async () => {
    try {
      const res = await dispatch(fetchUserInfo()).unwrap();

      console.log('用户信息:', res);

    } catch (error) {
      console.log('获取用户信息失败', error);
    }
  };

  getUser();
}, [dispatch]);
  return (

    <div>
      <h1>Home</h1>
      
    </div>
  )
}

export default Home