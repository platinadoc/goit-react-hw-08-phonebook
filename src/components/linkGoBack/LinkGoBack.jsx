import { Link, useLocation } from 'react-router-dom';
import s from './LinkGoBack.module.css';

const LinkGoBack = () => {
  const location = useLocation();

  return (
    <Link to={location.state ?? '/'} className={s.linkGoBack}>
      Go back
    </Link>
  );
};

export default LinkGoBack;
