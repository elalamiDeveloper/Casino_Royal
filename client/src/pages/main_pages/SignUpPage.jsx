import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';

import { apiURL, colors } from '../../assets';
import { signUpList } from '../../assets/constants';
import { ButtonPrimary, Input, Toast } from '../../components/UI';
import { showToast } from '../../utils';
import { authActions } from '../../redux/features/authSlice';

const SignUpPageContainer = styled.main`
  min-height: calc(100vh - 10.95rem);
  display: flex;
  justify-content: center;
  align-items: center;

  .signup-section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .signup-section-title {
      font-size: 3.2rem;
    }

    .signup-section-text {
      font-size: 2rem;
    }

    .signup-section-form {
      margin: 2.5rem 0;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      label {
        font-size: 1.6rem;
      }

      input {
        border: 0.1rem solid ${colors.greyColor};
      }

      button {
        margin-top: 2.5rem;
      }
    }
  }
`;

const SignUpPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [sectionNumber, setSectionNumber] = useState(0);
  const [sectionContent, setSectionContent] = useState('');
  const [signUpInputs, setSignUpInputs] = useState({
    username: '',
    password: '',
    email: '',
    birthYear: '',
  });

  const changeInputHandler = (e) =>
    setSignUpInputs((prevVal) => ({
      ...prevVal,
      [e.target.name]: e.target.value,
    }));

  const submitSignUpHandler = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        if (sectionNumber === signUpList.length - 1) {
          const {
            data: { data },
          } = await axios.post(`${apiURL}/users/signup`, signUpInputs);
          console.log(data);
          dispatch(authActions.login(data));
          navigate('../games/list');
          return showToast('success', 'Bon Jeu');
        }
        setSectionNumber((prevVal) => prevVal + 1);
      } catch (err) {
        showToast('error', err.response.data.message);
        setSectionNumber(0);
      }
    },
    [sectionNumber, signUpInputs]
  );

  useEffect(() => {
    const { id, title, text, label, span, type, name } =
      signUpList[sectionNumber];

    setSectionContent(
      <>
        <h2 className="signup-section-title">{title}</h2>
        <p className="signup-section-text">{text}</p>
        <form className="signup-section-form" onSubmit={submitSignUpHandler}>
          <label htmlFor={id}>{label}</label>
          <Input
            type={type}
            id={id}
            name={name}
            value={signUpInputs[name]}
            onChange={changeInputHandler}
          />
          <span>{span}</span>

          <ButtonPrimary>
            {sectionNumber === signUpList.length - 1
              ? 'Créer un compte'
              : 'Continuer'}
          </ButtonPrimary>
        </form>
      </>
    );
  }, [sectionNumber, signUpInputs, submitSignUpHandler]);

  return (
    <SignUpPageContainer>
      <section className="signup-section">{sectionContent}</section>
    </SignUpPageContainer>
  );
};

export default SignUpPage;
