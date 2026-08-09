import React, { useState } from 'react';
import styled from 'styled-components';
import {
  collection,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../../firebase/config';

interface TransactionData {
  date: string;
  description: string;
  category: string;
  amount: number;
}

interface TransactionFormProps {
  onSubmit?: (data: TransactionData) => void;
  type?: 'expense' | 'income';
}

export const TransactionForm: React.FC<TransactionFormProps> = ({
  onSubmit,
  type = 'expense',
}) => {
  const today = new Date().toISOString().split('T')[0];

  const [date, setDate] = useState(today);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleClear = () => {
    setDescription('');
    setCategory('');
    setAmount('');
    setDate(today);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const numericAmount = Number(amount.replace(',', '.'));

    if (!description.trim()) {
      alert('Введіть опис');
      return;
    }

    if (!category) {
      alert('Оберіть категорію');
      return;
    }

    if (isNaN(numericAmount) || numericAmount <= 0) {
      alert('Введіть правильну суму');
      return;
    }

    const transactionData = {
      date,
      description: description.trim(),
      category,
      amount: numericAmount,
      type,
    };

    try {
      const docRef = await addDoc(
        collection(db, 'transactions'),
        {
          ...transactionData,
          createdAt: serverTimestamp(),
        }
      );

      console.log('Транзакцію успішно додано!');
      console.log('ID документа:', docRef.id);

      if (onSubmit) {
        onSubmit({
          date,
          description: description.trim(),
          category,
          amount: numericAmount,
        });
      }

      handleClear();
    } catch (error) {
      console.error('Помилка Firebase:', error);
      alert('Не вдалося зберегти транзакцію');
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <DatePickerWrapper>
        <CalendarIcon
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 2V4M14 2V4M3 8H17M4 4H16C17.1046 4 18 4.89543 18 6V16C18 17.1046 17.1046 18 16 18H4C2.89543 18 2 17.1046 2 16V6C2 4.89543 2.89543 4 4 4Z"
            stroke="#52555F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </CalendarIcon>

        <DateInput
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </DatePickerWrapper>

      <InputsGroup>
        <InputDescription
          type="text"
          placeholder="Опис товару"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <SelectCategoryWrapper>
          <SelectCategory
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled hidden>
              Категорія товару
            </option>

            <option value="Транспорт">Транспорт</option>
            <option value="Продукти">Продукти</option>
            <option value="Здоров'я">Здоров'я</option>
            <option value="Алкоголь">Алкоголь</option>
            <option value="Розваги">Розваги</option>
            <option value="Все для дому">Все для дому</option>
            <option value="Техніка">Техніка</option>
            <option value="Комуналка, зв'язок">
              Комуналка, зв'язок
            </option>
            <option value="Спорт, хобі">Спорт, хобі</option>
            <option value="Навчання">Навчання</option>
            <option value="Інше">Інше</option>
          </SelectCategory>

          <ArrowIcon viewBox="0 0 12 7" fill="none">
            <path
              d="M1 1L6 5L11 1"
              stroke="#52555F"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </ArrowIcon>
        </SelectCategoryWrapper>

        <AmountWrapper>
          <InputAmount
            type="text"
            placeholder="0,00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <CalculatorIcon viewBox="0 0 20 20" fill="none">
            <rect
              x="3"
              y="2"
              width="14"
              height="16"
              rx="2"
              stroke="#52555F"
              strokeWidth="2"
            />

            <rect
              x="6"
              y="5"
              width="8"
              height="3"
              fill="#52555F"
            />

            <circle cx="7" cy="11" r="1" fill="#52555F" />
            <circle cx="10" cy="11" r="1" fill="#52555F" />
            <circle cx="13" cy="11" r="1" fill="#52555F" />
            <circle cx="7" cy="14" r="1" fill="#52555F" />
            <circle cx="10" cy="14" r="1" fill="#52555F" />
            <circle cx="13" cy="14" r="1" fill="#52555F" />
          </CalculatorIcon>
        </AmountWrapper>
        <SelectCategoryWrapper>
          <SelectCategory
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled hidden>
              Категорія  дії
            </option>

            <option value="Income">Дохід</option>
            <option value="Expense">Витрати</option>
            
          </SelectCategory>
          </SelectCategoryWrapper>
      </InputsGroup>
     
      <ButtonGroup>
        <SubmitButton type="submit">
          ВВЕСТИ
        </SubmitButton>

        <ClearButton
          type="button"
          onClick={handleClear}
        >
          ОЧИСТИТИ
        </ClearButton>
      </ButtonGroup>
    </FormContainer>
  );
};

// --- STYLED COMPONENTS ---

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 32px;
  font-family: 'Roboto', sans-serif;
  margin-top: 100px;

  @media (max-width: 1280px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }
`;

const DatePickerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const CalendarIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

const DateInput = styled.input`
  border: none;
  background: transparent;
  font-weight: 900;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  color: #52555f;
  outline: none;
  cursor: pointer;
`;

const InputsGroup = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #f5f6fb;
  border-radius: 16px 16px 16px 0px;
  background-color: #ffffff;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    border-radius: 16px;
  }
`;

const BaseInput = styled.input`
  height: 44px;
  border: none;
  outline: none;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  color: #52555f;

  &::placeholder {
    color: #c7ccdc;
  }
`;

const InputDescription = styled(BaseInput)`
  width: 290px;
  padding: 0 20px;
  border-radius: 16px 0 0 16px;
  border-right: 2px solid #f5f6fb;

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: 2px solid #f5f6fb;
    border-radius: 16px 16px 0 0;
  }
`;

const SelectCategoryWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SelectCategory = styled.select`
  width: 170px;
  height: 44px;
  padding: 0 35px 0 20px;
  border: none;
  border-right: 2px solid #f5f6fb;
  background: transparent;
  outline: none;
  font-size: 12px;
  color: #c7ccdc;
  appearance: none;
  cursor: pointer;

  &:valid {
    color: #52555f;
  }

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: 2px solid #f5f6fb;
  }
`;

const ArrowIcon = styled.svg`
  position: absolute;
  right: 18px;
  width: 10px;
  height: 6px;
  pointer-events: none;
`;

const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  position: relative;
`;

const InputAmount = styled(BaseInput)`
  width: 110px;
  padding: 0 40px 0 12px;
  text-align: right;
  font-weight: 700;
  border-radius: 0 16px 16px 0;

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0 0 16px 16px;
  }
`;

const CalculatorIcon = styled.svg`
  position: absolute;
  right: 16px;
  width: 20px;
  height: 20px;
  pointer-events: none;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
`;

const BaseButton = styled.button`
  width: 136px;
  height: 44px;
  border-radius: 16px;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

const SubmitButton = styled(BaseButton)`
  background: #ff751d;
  border: none;
  color: #ffffff;
  box-shadow: 1px 2px 5px rgba(255, 117, 29, 0.35);

  &:hover {
    background: #f56c11;
  }
`;

const ClearButton = styled(BaseButton)`
  background: #ffffff;
  border: 2px solid #f5f6fb;
  color: #52555f;

  &:hover {
    background: #f5f6fb;
  }
`;