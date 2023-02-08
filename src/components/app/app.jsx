import {Routes, Route, useLocation} from 'react-router-dom';

import './app.module.css';
import AppHeader from '../app-header/app-header';
import HomePage from './pages/home-page';
import NotFound404 from './pages/not-found-404/not-found-404';
import LoginPage from './pages/login-page/login-page';
import RegisterPage from './pages/register-page/register-page';
import ForgotPasswordPage from './pages/forgot-password-page/forgot-password-page';
import ResetPasswordPage from './pages/reset-password-page/reset-password-page';
import ProfilePage from './pages/profile-page/profile-page';
import ProfileForm from './pages/profile-page/profile-form/profile-form';
import ProtectedRouteElement from '../protected-route-element/protected-route-element';
import IngredientsPage from "./pages/ingredients-page/ingredients-page";
import OnlyUnAuthRoute from "../only-un-auth-route-element/only-un-auth-route-element";

function App() {
  return (
    <>
      <AppHeader/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<OnlyUnAuthRoute element={<LoginPage/>}/>}/>
        <Route path='/register' element={<OnlyUnAuthRoute element={<RegisterPage/>}/>}/>
        <Route path='/forgot-password' element={<OnlyUnAuthRoute element={<ForgotPasswordPage/>}/>}/>
        <Route path='/reset-password' element={<OnlyUnAuthRoute element={<ResetPasswordPage/>}/>}/>
        <Route path='/profile' element={<ProtectedRouteElement element={<ProfilePage/>}/>}>
          <Route path='' element={<ProtectedRouteElement element={<ProfileForm/>}/>}/>
          {/* <Route path='/orders' element={<ProtectedRouteElement element={<ProfileForm />} />} /> */}
          {/* <Route path='/orders/:id' element={<ProtectedRouteElement element={<ProfileForm />} />} /> */}
        </Route>
        <Route path='/ingredients/:id' element={<IngredientsPage/>}/>
        <Route path='*' element={<NotFound404/>}/>
      </Routes>
    </>
  );
}

export default App;
