import { BrowserRouter, Routes, Route } from 'react-router-dom';

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

function App() {
  return (
    <>
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/forgot-password' element={<ForgotPasswordPage />} />
          <Route path='/reset-password' element={<ResetPasswordPage />} />
          <Route path='/profile' element={<ProtectedRouteElement element={<ProfilePage />} />}>
            <Route path='' element={<ProtectedRouteElement element={<ProfileForm />} />} />
            {/* <Route path='/orders' element={<ProtectedRouteElement element={<ProfileForm />} />} /> */}
            {/* <Route path='/orders/:id' element={<ProtectedRouteElement element={<ProfileForm />} />} /> */}
          </Route>
          <Route path='*' element={<NotFound404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
