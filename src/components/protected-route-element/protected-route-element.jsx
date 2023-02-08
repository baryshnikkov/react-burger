import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const getUserData = store => store.userProcessing;

const ProtectedRouteElement = ({ element }) => {
  const { isLoginSuccess } = useSelector(getUserData);

  return isLoginSuccess ? element : <Navigate to="/login" replace />;
}

export default ProtectedRouteElement;
