import React from 'react';
import Router from 'next/router';
import { Button, Checkbox, Form, Input } from 'antd';

import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { loginRequestAction } from '../reducers/user';

const Signup: React.FC = () => {
  const dispatch = useDispatch();
  const onFinish = (value: any) => {
    dispatch(loginRequestAction(value));
  };

  const goToSignIn = () => {
    Router.push('/signin');
  };
  return (
    <>
      <Section>
        <Form name='signup' style={{ width: '500px' }} labelCol={{ span: 7 }} wrapperCol={{ span: 13 }} initialValues={{ remember: true }} onFinish={onFinish} autoComplete='off'>
          <Form.Item
            label='Email'
            name='email'
            rules={[
              {
                required: true,
                message: '이메일을 입력해주세요!',
                type: 'email',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label='Password' name='password' rules={[{ required: true, message: '비밀번호를 입력해주세요' }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item name='remember' valuePropName='checked' wrapperCol={{ offset: 3, span: 16 }}>
            <Checkbox>이메일 기억</Checkbox>
          </Form.Item>
          <Form.Item labelCol={{ span: 4 }} wrapperCol={{ offset: 3, span: 16 }}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
            <Button htmlType='submit' style={{ margin: '10px' }} onClick={goToSignIn}>
              회원가입
            </Button>
          </Form.Item>
        </Form>
      </Section>
    </>
  );
};

export default Signup;

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;

  & label {
    font-size: 15px;
  }
`;
