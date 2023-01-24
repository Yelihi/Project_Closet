import React from 'react';

import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import 'antd/dist/reset.css';
import { Divider } from 'antd';

import GoogleButton from './GoogleButton';

import useInput from '../../hooks/useInput';

import { loginRequestAction } from '../../reducers/user';

import type { SIprops } from './Signup';

const Login = (props: SIprops) => {
  const dispatch = useDispatch();
  const { toggleGotoAccount } = props;
  const [email, setEmail, onChangeEmail] = useInput('');
  const [password, setPassword, onChangePassword] = useInput('');

  const emailRegExp = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}$/;
  const passwordRegExp = /^.{8,}$/;

  const isEmailValid = emailRegExp.test(email);
  const isPasswordValid = passwordRegExp.test(password);

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(loginRequestAction({ email: email, password: password }));
  };

  return (
    <>
      <LoginBox>
        <LeftTopBrand>
          <span>@Yelihi</span>
        </LeftTopBrand>
        <LoginSection>
          <LoginForm>
            <h1>Welcome to Closet!</h1>
            <span>의류를 계획적으로 관리해 보세요.</span>
            <input type='email' value={email} onChange={onChangeEmail} placeholder='Email' />
            <div>{email && !isEmailValid && `이메일이 올바르지 않습니다`}</div>
            <input type='password' value={password} onChange={onChangePassword} placeholder='Password' />
            <div>{password && !isPasswordValid && `비밀번호가 올바르지 않습니다`}</div>
            <Button color='black' onClick={onSubmit} disabled={!(isEmailValid && isPasswordValid)}>
              Sign in
            </Button>
            <Button color='' onClick={toggleGotoAccount} disabled={false}>
              Create account
            </Button>
            <LDivider plain>OR</LDivider>
            <GoogleButton />
          </LoginForm>
        </LoginSection>
      </LoginBox>
    </>
  );
};

export default Login;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  height: auto;
  padding: 20px;
`;

const LeftTopBrand = styled.div`
  width: 100%;
  margin-bottom: 70px;

  > span {
    text-align: start;
    font-family: ${({ theme }) => theme.font.Efont};
    font-size: 13px;
  }
`;

const LoginSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: fit-content;

  > h1 {
    display: inline-block;
    font-family: ${({ theme }) => theme.font.Efont};
    font-size: 25px;
    font-weight: ${({ theme }) => theme.fontWeight.Medium};
    margin-bottom: 10px;
  }

  > span {
    display: block;
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fontWeight.Light};
    margin-bottom: 40px;
  }

  > input {
    width: 300px;
    height: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    margin-bottom: 10px;

    :focus {
      border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    }
  }

  > div {
    width: 100%;
    height: 20px;
    margin-bottom: 5px;
    font-family: ${({ theme }) => theme.font.Kfont};
    font-weight: ${({ theme }) => theme.fontWeight.Light};
    font-size: 12px;
    color: red;
  }
`;

const Button = styled.button<{ color: string; disabled: boolean }>`
  width: 100%;
  height: 40px;
  margin-bottom: 13px;
  border-radius: 20px;
  background-color: ${({ theme, color }) => (color ? color : theme.colors.white)};
  color: ${({ theme, color }) => (color ? theme.colors.white : theme.colors.black)};
  border: ${({ theme, color }) => (!color ? `1px solid ${theme.colors.black}` : 'none')};
  opacity: ${({ disabled }) => (disabled ? '0.4' : '1')};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`;

const LDivider = styled(Divider)`
  .ant-divider-inner-text {
    font-family: ${({ theme }) => theme.font.Efont};
    font-size: 12px;
    font-weight: ${({ theme }) => theme.fontWeight.Light};
  }
`;
