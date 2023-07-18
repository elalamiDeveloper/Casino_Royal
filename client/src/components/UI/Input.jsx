import styled from 'styled-components';

const InputContainer = styled.input`
  padding: 1rem;
  font-size: 1.6rem;
  border-radius: 0.5rem;
`;

const Input = ({ type, id, name, value, onChange, placeholder }) => {
  return (
    <InputContainer
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
