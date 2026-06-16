import { Link } from "react-router";
import { useNavigate } from "react-router";
function Login(){
    let navigate = useNavigate();
    return(
        <>
        <div>hello,我是首页</div>
        <Link to="/index">返回首页</Link>
             <button onClick={() => navigate('/index')}>跳转至首页</button>
        </>
    )
}
export default Login