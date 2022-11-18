import styled from 'styled-components';

export default function Example() {
  return (
    <>
      <Section>
        <div>
          <h1>로그인</h1>
          <LoginForm>
            <label htmlFor="email">이메일</label>
            <input id="email" type="email" />
            <label htmlFor="password">비밀번호</label>
            <input id="password" type="password" />
            <div>
              <span>아이디 찾기</span>
              <span>비밀번호 찾기</span>
            </div>
            <button>로그인하기</button>
            <button>회원 가입하기</button>
          </LoginForm>
        </div>
      </Section>
    </>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 10px;
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
