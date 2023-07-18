import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { loginInputsList } from '../../assets/constants';
import { ButtonPrimary, Input } from '../../components/UI';
import { colors } from '../../assets';

const LoginPageContainer = styled.main`
  min-height: calc(100vh - 10.95rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;

  .login-form {
    background: ${colors.bgColor2};
    color: ${colors.textColor2};
    border-radius: 0.5rem;
    min-width: 50rem;
    overflow: hidden;

    .login-form-title {
      padding: 2.5rem;
      background: ${colors.textColor1};
      font-size: 2rem;
      text-align: center;
      border-bottom: 0.2rem solid ${colors.bgColor1};
    }

    .login-form-content {
      padding: 2.5rem 4rem;
      display: flex;
      flex-direction: column;
      gap: 3rem;

      .login-form-item {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        label {
          font-size: 1.6rem;
        }
      }
    }
  }

  .login-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.5rem;
    align-items: center;
    font-size: 1.8rem;
    font-weight: 500;
    color: ${colors.blueColor};

    a:hover {
      color: ${colors.blueAltColor};
    }
  }
`;

const LoginPage = () => {
  const [loginInputs, setLoginInputs] = useState({
    username: '',
    password: '',
  });

  const inputsChangeHandler = (e) =>
    setLoginInputs((prevVal) => ({
      ...prevVal,
      [e.target.name]: e.target.value,
    }));

  const submitLoginFormHandler = (e) => {
    e.preventDefault();
    console.log(loginInputs);
  };

  const formContent = loginInputsList.map(
    ({ type, id, name, label, placeHolder }) => (
      <div key={id} className="login-form-item">
        <label htmlFor={id}>{label}</label>
        <Input
          type={type}
          id={id}
          name={name}
          placeholder={placeHolder}
          value={loginInputs[name]}
          onChange={inputsChangeHandler}
        />
      </div>
    )
  );

  return (
    <LoginPageContainer>
      <form className="login-form" onSubmit={submitLoginFormHandler}>
        <legend className="login-form-title">Connexion</legend>
        <div className="login-form-content">
          {formContent}
          <ButtonPrimary>Connexion</ButtonPrimary>
        </div>
      </form>

      <div className="login-links">
        <Link to="/">Mot de passe/nom d'utilisateur oublié ?</Link>
        <Link to="/">Si vous n'avez pas de compte, inscrivez-vous ici</Link>
      </div>
    </LoginPageContainer>
  );
};

export default LoginPage;
