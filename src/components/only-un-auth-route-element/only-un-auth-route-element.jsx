import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

const getUserData = store => store.userProcessing;

const OnlyUnAuthRoute = ({element}) => {
  const {isLoginSuccess} = useSelector(getUserData);

  return isLoginSuccess ? <Navigate to={'/'} replace /> : element;
};

export default OnlyUnAuthRoute;
