import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {getCookie} from "../../utils/utils";

const getUserData = store => store.userProcessing;

const ProtectedRouteElement = ({ element }) => {
  const { isLoginSuccess } = useSelector(getUserData);

  return getCookie('accessToken').length ? element : <Navigate to="/login" replace />;
}

export default ProtectedRouteElement;
