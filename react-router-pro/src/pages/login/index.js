import { Link } from "react-router";
import { useNavigate } from "react-router";
function Login(){
    let navigate = useNavigate();
    return(
        <>
        <div>hello,我是首页</div>
        <Link to="/index">返回首页</Link>
             <button onClick={() => navigate('/index?id=001&name=jack')}>跳转至首页</button>
                          <button onClick={() => navigate('/index/001')}>跳转至首页</button>
        </>
    )
}
export default Login