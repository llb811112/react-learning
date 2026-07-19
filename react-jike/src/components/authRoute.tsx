import { Navigate} from "react-router-dom"
import { getToken } from "@/utils/token"
import Layout from "@/pages/Layout"


const AuthRoute = () => {
  const token = getToken()
  if (!token) {
    return <Navigate to="/login" replace />
  }
    return <Layout />
}

export default AuthRoute