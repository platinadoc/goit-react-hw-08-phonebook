import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './AuthForm.module.css';

const AuthForm = ({ title, titleSubmit, register = false, cbSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    register === true
      ? cbSubmit({ name, email, password })
      : cbSubmit({ email, password });

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <section>
      <h2 className={s.authForm__title}>{title}</h2>
      <form className={s.authForm} onSubmit={handleSubmit}>
        {register && (
          <label className={s.authForm__label}>
            Name
            <input
              className={s.authForm__input}
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
        )}
        <label className={s.authForm__label}>
          Email
          <input
            className={s.authForm__input}
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className={s.authForm__label}>
          Password
          <input
            className={s.authForm__input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button className={s.authForm__btn} type="submit">
          {titleSubmit}
        </button>
      </form>
    </section>
  );
};

AuthForm.propTypes = {
  title: PropTypes.string,
  titleSubmit: PropTypes.string.isRequired,
  register: PropTypes.bool,
  cbSubmit: PropTypes.func.isRequired,
};

export default AuthForm;
