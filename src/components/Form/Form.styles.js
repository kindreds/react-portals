import styled from 'styled-components';

export const FormContainer = styled.form``;

export const Label = styled.label`
  font-size: 15px;
`;

export const Input = styled.input`
  border: 0;
  width: 100%;
  height: 40px;
  box-shadow: none;
  color: #222;
  line-height: 55px;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 15px;
  line-height: 5px;
  margin-top: 3px;
  padding-left: 10px;
  background: ${({ valid }) => (valid ? 'transparent' : '#e2e2e2')};
  border: 1px solid
    ${({ valid, error }) => {
      if (error) {
        return 'red';
      } else {
        return valid ? '#9d9d9d' : 'transparent';
      }
    }};

  ${({ valid }) => (valid ? '& + label {top: -17px; left: 6px;}' : '')}

  transition: 300ms ease-in-out;

  &:focus {
    outline: 0;
    background: transparent;
    border: 1px solid ${({ error }) => (error ? '#bc252a' : '#323232')};
  }

  &:focus + label {
    left: 6px;
    top: -17px;
  }

  &:disabled {
    background: #f2f2f2;
    pointer-events: none;
  }
`;

export const Select = styled.select`
  border: 0;
  width: 100%;
  height: 40px;
  box-shadow: none;
  color: #222;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 0px 13px;
  background: transparent;
  margin-top: 3px;
  font-size: 15px;
  border: 1px solid
    ${({ valid, error }) => {
      if (error) {
        return 'red';
      } else {
        return valid ? '#9d9d9d' : '#9d9d9d';
      }
    }};

  transition: 300ms ease-in-out;

  &:focus {
    outline: 0;
    background: transparent;
    border: 1px solid #323232;
  }
`;
