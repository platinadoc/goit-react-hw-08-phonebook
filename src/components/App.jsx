import { lazy } from 'react';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedIn } from 'redux/auth/authSelectors';
import { getCurrentUserThunk } from 'redux/auth/authOperations';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import UserMenu from './userMenu/UserMenu';
import s from './App.module.css';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LogInPage = lazy(() => import('../pages/LogInPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getLoggedIn);

  useEffect(() => {
    dispatch(getCurrentUserThunk());
  }, [dispatch]);

  return (
    <div className={s.container}>
      {isLoggedIn && <UserMenu />}
      <h1 className={s.mainTitle}>Phonebook</h1>
      <Routes>
        <Route
          path="/"
          element={<PublicRoute component={HomePage} restricted />}
        />
        <Route
          path="/register"
          element={<PublicRoute component={RegisterPage} restricted />}
        />
        <Route
          path="/login"
          element={<PublicRoute component={LogInPage} restricted />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={ContactsPage} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
