import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { colors } from '../../assets';
import { signUpList } from '../../assets/constants';
import { ButtonPrimary, Input, Toast } from '../../components/UI';
import { showToast } from '../../utils';

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
  const [sectionNumber, setSectionNumber] = useState(0);
  const [sectionContent, setSectionContent] = useState('');
  const [signUpInputs, setSignUpInputs] = useState({
    username: '',
    password: '',
    email: '',
    birthYear: '',
  });

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
  }, [sectionNumber, signUpInputs]);

  const changeInputHandler = (e) =>
    setSignUpInputs((prevVal) => ({
      ...prevVal,
      [e.target.name]: e.target.value,
    }));

  const submitSignUpHandler = (e) => {
    e.preventDefault();

    if (sectionNumber === signUpList.length - 1) {
      showToast('success', 'BRAVO');
      return console.log(signUpInputs);
    }
    setSectionNumber((prevVal) => prevVal + 1);
  };

  return (
    <SignUpPageContainer>
      <section className="signup-section">{sectionContent}</section>
    </SignUpPageContainer>
  );
};

export default SignUpPage;
