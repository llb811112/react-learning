import { Navigate} from "react-router-dom"
import { getToken } from "@/utils/token"
import {Outlet} from "react-router-dom"


const AuthRoute = () => {
  const token = getToken()
  if (!token) {
    return <Navigate to="/login" replace={true} />
  }
  else {
    return <Outlet />
  }
}

export default AuthRoute