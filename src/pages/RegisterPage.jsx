import AuthForm from 'components/authForm/AuthForm';
import LinkGoBack from 'components/linkGoBack/LinkGoBack';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/authOperations';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = data => dispatch(registerThunk(data));

  return (
    <>
      <AuthForm
        title={'Registration'}
        titleSubmit={'Sign in'}
        register
        cbSubmit={handleFormSubmit}
      />
      <LinkGoBack />
    </>
  );
};

export default RegisterPage;
