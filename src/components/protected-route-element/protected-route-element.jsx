import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRouteElement = ({ element }) => {
  let { isLoginSuccess } = useSelector(store => store.userProcessing);

  return isLoginSuccess ? element : <Navigate to="/login" replace />;
}

export default ProtectedRouteElement;
