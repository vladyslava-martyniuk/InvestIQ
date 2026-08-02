import React, { useState } from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { Header } from '../components/Header/Header.tsx';

const PageBox = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f7f9fc;
  padding: 40px 0;
`;

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 80%;
  @media (max-width: 868px) {
    flex-direction: column;
  }
`;

const LeftBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 102px;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 16px;
  color: #52555f;
  letter-spacing: 3px;
  margin-top: 6px;
`;

const RighBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const CardContainer = styled.div`
  background: #ffffff;
  border-radius: 24px;
  padding: 40px;
  max-width: 420px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
`;

const InstructionText = styled.p`
  font-size: 13px;
  color: #52555f;
  text-align: center;
  margin-bottom: 20px;
`;

const GoogleButton = styled.button`
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #aab2c533;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #e9ecef;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const DividerText = styled.p`
  font-size: 13px;
  color: #52555f;
  text-align: center;
  margin: 30px 0 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  font-size: 13px;
`;

const Input = styled.input`
  padding: 15px 20px;
  background-color: #f6f7fb;
  border: 1px solid transparent;
  border-radius: 30px;
  font-size: 14px;
  color: #52555f;
  outline: none;
  transition: border 0.2s ease, color 0.2s ease;

  &::placeholder {
    color: #a0aec0;
  }

  &:focus {
    border-color: #ff6b00;
    background-color: #fff;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const LoginButton = styled.button`
  flex: 1;
  background: #ff751d;
  color: #ffffff;
  border: none;
  border-radius: 16px;
  padding: 12px 0;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(255, 107, 0, 0.25);
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const RegisterButton = styled.button`
  flex: 1;
  background-color: #f5f6fb;
  color: #52555f;
  border: none;
  border-radius: 16px;
  padding: 12px 0;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e2e8f0;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: #e53e3e;
  font-size: 13px;
  text-align: center;
  margin: 10px 0 0 0;
`;

const SuccessMessage = styled.p`
  color: #38a169;
  font-size: 13px;
  text-align: center;
  margin: 10px 0 0 0;
`;
 const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("Успішний вхід!");
    } catch (err: any) {
      if (
        err.code === "auth/invalid-credential" ||
        err.code === "auth/user-not-found" ||
        err.code === "auth/wrong-password"
      ) {
        setError("Невірний email або пароль.");
      } else if (err.code === "auth/invalid-email") {
        setError("Некоректний формат email.");
      } else {
        setError("Помилка входу: " + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    if (!email || !password) {
      setError("Будь ласка, вкажіть email та пароль для реєстрації.");
      return;
    }
    setError(null);
    setMessage(null);
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage("Реєстрація успішна! Ви авторизовані.");
    } catch (err: any) {
      if (err.code === "auth/email-already-in-use") {
        setError("Користувач з таким email вже існує.");
      } else if (err.code === "auth/weak-password") {
        setError("Пароль має містити щонайменше 6 символів.");
      } else if (err.code === "auth/invalid-email") {
        setError("Некоректний формат email.");
      } else {
        setError("Помилка реєстрації: " + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    setMessage(null);
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      setMessage("Успішний вхід через Google!");
    } catch (err: any) {
      setError("Помилка авторизації через Google: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return ( <>
  <Header />
    <PageBox>
     
      <MainContainer>
        <LeftBox>
          <Title>InvestIQ</Title>
          <Subtitle>SMART FINANCE</Subtitle>
        </LeftBox>
        <RighBox>
          <CardContainer>
            <InstructionText>Ви можете авторизуватися за допомогою акаунта Google</InstructionText>

            <GoogleButton type="button" onClick={handleGoogleSignIn} disabled={loading}>
              <FcGoogle size={20} />
              <span>Google</span>
            </GoogleButton>

            <DividerText>Або увійти за допомогою ел. пошти та паролю після реєстрації</DividerText>

            <Form onSubmit={handleLogin}>
              <FormGroup>
                <Label>Електронна пошта:</Label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Пароль:</Label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </FormGroup>

              {error && <ErrorMessage>{error}</ErrorMessage>}
              {message && <SuccessMessage>{message}</SuccessMessage>}

              <ButtonGroup>
                <LoginButton type="submit" disabled={loading}>
                  УВІЙТИ
                </LoginButton>
                <RegisterButton type="button" onClick={handleRegister} disabled={loading}>
                  РЕЄСТРАЦІЯ
                </RegisterButton>
              </ButtonGroup>
            </Form>
          </CardContainer>
        </RighBox>
      </MainContainer>
    </PageBox></>
  );
};

export default LoginPage;