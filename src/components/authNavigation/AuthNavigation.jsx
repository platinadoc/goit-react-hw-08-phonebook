import { NavLink, useLocation } from 'react-router-dom';
import s from './AuthNavigation.module.css';

const AuthNavigation = () => {
  const location = useLocation();

  return (
    <section className={s.authNavSection}>
      <NavLink to="register" className={s.authNavLink} state={location}>
        Registration
      </NavLink>
      <NavLink to="login" className={s.authNavLink} state={location}>
        Sign in
      </NavLink>
    </section>
  );
};

export default AuthNavigation;
