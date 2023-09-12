import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import { renderWithRedux } from '../../util/TestUtils/renderWithRedux';

import UserLogin from '.';

describe('userLogin', () => {
  it.skip('성공적으로 렌더링 됩니다.', () => {
    renderWithRedux(<UserLogin />);

    const TitleText = screen.getByText(/welcome to closet!/i);
    expect(TitleText).toBeInTheDocument();
  });

  it.skip('create account 클릭 시 계정 생성 컴포넌트로 이동합니다.', async () => {
    // Arrange
    renderWithRedux(<UserLogin />);

    const moveToAccountButton = screen.getByTestId('loginToSignUp');

    fireEvent.click(moveToAccountButton);

    //Assert
    const TitleText = await screen.findByText(/Create an account/i);
    expect(TitleText).toBeInTheDocument();
    expect(moveToAccountButton).not.toBeInTheDocument();
  });

  it.skip('계정 생성 성공 시 성공 알림창이 뜨고, 다시 login 화면으로 이동합니다.', async () => {
    let alertmock = jest.fn();
    window.alert = alertmock;
    renderWithRedux(<UserLogin />);
    const createAccountButton = screen.getByRole('button', { name: 'Create account' });

    fireEvent.click(createAccountButton);

    const nameElement = screen.getByPlaceholderText(/name/i);
    const emailElement = screen.getByPlaceholderText(/email/i);
    const passwordElement = screen.getByPlaceholderText('Password');
    const checkElement = screen.getByPlaceholderText(/password check/i);
    const signInButtonElement = screen.getByRole('button', { name: 'Create account' });

    fireEvent.change(nameElement, { target: { value: 'wonik' } });
    fireEvent.change(emailElement, { target: { value: 'yelihi19@gmail.com' } });
    fireEvent.change(passwordElement, { target: { value: 'ABC1234567!' } });
    fireEvent.change(checkElement, { target: { value: 'ABC1234567!' } });
    fireEvent.click(signInButtonElement);

    await waitFor(() => {
      expect(window.alert).toBeCalledWith('가입해주셔서 감사합니다.');
      const $TitleText = screen.findByText(/의류를 계획적으로 관리해 보세요./i);
      expect($TitleText).toBeTruthy();
    });
  });

  it.skip('뒤로 가기 버튼 클릭 시 다시 login 화면으로 이동합니다.', () => {});
});
