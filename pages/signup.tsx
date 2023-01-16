import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { loginRequestAction } from '../reducers/user';

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const onFinish = (value: any) => {
    dispatch(loginRequestAction(value));
  };
  return (
    <>
      <Section>
        <Form name='signup' style={{ width: '500px' }} labelCol={{ span: 7 }} wrapperCol={{ span: 13 }} initialValues={{ remember: true }} onFinish={onFinish} autoComplete='off'>
          <Form.Item label='Email' name='email' rules={[{ required: true, message: '이메일을 입력해주세요!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label='NickName' name='nickname' rules={[{ required: true, message: '닉네임을 입력해주세요' }]}>
            <Input />
          </Form.Item>
          <Form.Item label='Password' name='password' rules={[{ required: true, message: '비밀번호를 입력해주세요' }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item label='Password Check' name='password check' rules={[{ required: true, message: '비밀번호를 입력해주세요' }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item name='remember' valuePropName='checked' wrapperCol={{ offset: 3, span: 16 }}>
            <Checkbox>사이트 규정에 동의합니다</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 3, span: 16 }}>
            <Button type='primary' htmlType='submit'>
              회원가입
            </Button>
          </Form.Item>
        </Form>
      </Section>
    </>
  );
};

export default SignIn;

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
