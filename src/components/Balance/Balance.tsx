import React, { useState } from 'react';
import styled from 'styled-components';

interface BalanceProps {
  value: number;
  isSet: boolean;
  onConfirm: (balance: number) => void;
}

export const Balance: React.FC<BalanceProps> = ({ value, isSet, onConfirm }) => {
  const [draft, setDraft] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const numericValue = parseFloat(draft.replace(',', '.').replace(/[^0-9.]/g, ''));

    if (!isNaN(numericValue)) {
      onConfirm(numericValue);
    }
  };

  const display = isSet ? `${value.toFixed(2)} UAH` : draft;

  return (
    <BalanceWrapper>
      <Label htmlFor="balance-input">Баланс:</Label>

      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            id="balance-input"
            type="text"
            value={display}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="00.00 UAH"
            readOnly={isSet}
          />
          <SubmitButton type="submit">ПІДТВЕРДИТИ</SubmitButton>
        </InputGroup>

        {!isSet && (
          <TooltipContainer>
            <TooltipArrow />
            <TooltipTitle>
              Привіт! Для початку роботи внесіть свій поточний баланс рахунку!
            </TooltipTitle>
            <TooltipText>
              Ви не можете витрачати гроші, поки їх у Вас немає :)
            </TooltipText>
          </TooltipContainer>
        )}
      </Form>
    </BalanceWrapper>
  );
};

// --- STYLED COMPONENTS ---

const BalanceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Центруємо вміст */
  gap: 20px;
  width: 100%;
  position: relative;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }

  margin-top: 40px;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: rgba(82, 85, 95, 0.7);
  letter-spacing: 0.02em;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  position: relative;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
`;

const Input = styled.input`
  width: 125px;
  height: 44px;
  background-color: #f6f7fb;
  border: none;
  border-radius: 16px 0 0 16px;
  padding: 0 16px;
  text-align: right;
  font-size: 12px;
  font-weight: 700;
  color: #000000;
  outline: none;

  &::placeholder {
    color: #000000;
  }
`;

const SubmitButton = styled.button`
  height: 44px;
  padding: 0 20px;
  background-color: transparent;
  border: none;
  border-left: 2px solid #ffffff;
  border-radius: 0 16px 16px 0;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.02em;
  color: rgba(82, 85, 95, 0.7);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #ff751d;
    color: #ffffff;
  }
`;

const TooltipContainer = styled.div`
  position: absolute;
  top: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%); /* Відцентрування підказки відносно форми */
  width: 288px;
  padding: 28px 20px 20px 20px;
  background: linear-gradient(117.84deg, #1d2e4a 2.84%, #0b1524 99.39%);
  border-radius: 30px;
  box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.25);
  z-index: 100;
  color: #ffffff;
`;

const TooltipArrow = styled.div`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #1d2e4a;
`;

const TooltipTitle = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  margin: 0 0 12px 0;
`;

const TooltipText = styled.p`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
`;