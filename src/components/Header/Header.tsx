import React from 'react';
import styled from 'styled-components';

// --- TYPESCRIPT INTERFACE ---
interface HeaderProps {
  userName?: string;
  onLogout?: () => void; // Функція для виходу з акаунту
}

// --- STYLED COMPONENTS ---

const HeaderContainer = styled.header`
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  padding: 12px 0;

  @media (min-width: 768px) {
    padding: 16px 0;
  }
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px; /* Відступ 16px на мобільці (320px) */
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 0 32px; /* Відступ на планшетах */
  }

  @media (min-width: 1200px) {
    padding: 0 33px; /* Твій відступ 33px для ПК */
  }
`;
/* Обгортка для логотипа */
const LogoLink = styled.a`
  text-decoration: none;
  display: inline-block;
  
  &:hover {
    opacity: 0.9;
  }
`;

/* Текст логотипа (адаптив розміру під мобілку) */
const LogoText = styled.span`
  position: relative;
  font-family: "Roboto", "Montserrat Alternates", sans-serif;
  font-size: 20px;
  font-weight: 900;
  color: #000000;
  letter-spacing: 0.5px;
  padding-left: 12px;
  display: inline-block;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: -4px;
    width: 48px;
    height: 36px;
    background-color: #fde5d4;
    border-radius: 12px;
    z-index: -2;
  }

  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: 4px;
    width: 48px;
    height: 36px;
    background-color: #ff751d;
    border-radius: 12px;
    z-index: -1;
  }

  /* Адаптив лого для планшетів та десктопів */
  @media (min-width: 768px) {
    font-size: 28px;
    padding-left: 18px;
    letter-spacing: 1px;

    &::before {
      top: -10px;
      left: -4px;
      width: 62px;
      height: 46px;
      border-radius: 16px;
    }

    &::after {
      top: -2px;
      left: 6px;
      width: 62px;
      height: 46px;
      border-radius: 16px;
    }
  }
`;

const UserBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #f3f4f6;
  color: #52555f;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
`;

/* Ім'я приховане на мобільці (320px) і з'являється від 768px */
const UserName = styled.span`
  display: none; /* За замовчуванням ховаємо на мобілці */

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    position: relative;
    font-family: "Montserrat Alternates", sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #52555f;
    padding-right: 16px;

    /* Вертикальна паличка після імені */
    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 2px;
      height: 20px;
      border-radius: 10px;
      background-color: #e5e7eb;
    }
  }

  @media (min-width: 1200px) {
    font-size: 16px;
  }
`;

/* Кнопка виходу: іконка на мобілці, текст на 768px+ */
const LogoutBtn = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #52555f;

  /* На мобільці показуємо тільки іконку двері зі стрілкою */
  .logout-text {
    display: none;
  }
  .logout-icon {
    display: block;
    width: 18px;
    height: 18px;
  }

  /* На планшетах і десктопах ховаємо іконку, показуємо текст "Вийти" */
  @media (min-width: 768px) {
    .logout-text {
      display: inline;
      text-decoration: underline;
      font-weight: 400;
      font-family: "Montserrat Alternates", sans-serif;
      font-size: 14px;
      color: #52555f;
    }
    .logout-icon {
      display: none;
    }
  }
`;

// --- SVG ІКОНКА ВИХОДУ ДЛЯ МОБІЛКИ ---
const LogoutIcon = () => (
  <svg
    className="logout-icon"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6"
      stroke="#9C9EAE"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.6665 11.3333L13.9998 8.00001L10.6665 4.66667"
      stroke="#9C9EAE"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 8H6"
      stroke="#9C9EAE"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// --- COMPONENT ---

export const Header: React.FC<HeaderProps> = ({ userName, onLogout }) => {
  const initial = userName && userName.trim() ? userName.trim()[0].toUpperCase() : '';

  return (
    <HeaderContainer>
      <Wrapper>
        <LogoLink href="/">
          <LogoText>INVESTIQ</LogoText>
        </LogoLink>

        {userName && (
          <UserBlock>
            <Avatar>{initial}</Avatar>
            <UserName>{userName}</UserName>
            <LogoutBtn onClick={onLogout} title="Вийти">
              <span className="logout-text">Вийти</span>
              <LogoutIcon />
            </LogoutBtn>
          </UserBlock>
        )}
      </Wrapper>
    </HeaderContainer>
  );
};