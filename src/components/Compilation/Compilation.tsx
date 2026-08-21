import React from "react";
import styled from "styled-components";
import type { Transaction } from "../../types/types";
import { fmt } from "../../constants/statistics";

interface Props {
  transactions?: Transaction[];
  type?: "expense" | "income";
}

const signed = (amount: number) =>
  `${amount < 0 ? "-" : "+"}${fmt(amount)} \u20B4`;

export const Compilation: React.FC<Props> = ({ transactions = [], type }) => {
  const filtered = type ? transactions.filter((t) => t.type === type) : transactions;

  const categoryMap: Record<string, number> = {};
  filtered.forEach((t) => {
    categoryMap[t.category] = (categoryMap[t.category] ?? 0) + t.amount;
  });

  const categories = Object.entries(categoryMap)
    .sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]))
    .slice(0, 6);

  const total = filtered.reduce((sum, t) => sum + t.amount, 0);

  return (
    <CompilationWrapper>
      <HeaderRow>
        <CompilationTitle>Зведення</CompilationTitle>
        {type && (
          <TypeBadge $isExpense={type === "expense"}>
            {type === "expense" ? "Витрати" : "Доходи"}
          </TypeBadge>
        )}
      </HeaderRow>

      {categories.length === 0 ? (
        <EmptyText>Немає даних</EmptyText>
      ) : (
        <>
          {categories.map(([label, amount]) => (
            <CompilationItem key={label}>
              <CompilationItemText title={label}>{label}</CompilationItemText>
              <AmountText $positive={amount >= 0}>{signed(amount)}</AmountText>
            </CompilationItem>
          ))}
          <TotalRow>
            <CompilationItemText>Разом:</CompilationItemText>
            <TotalAmount $positive={total >= 0}>{signed(total)}</TotalAmount>
          </TotalRow>
        </>
      )}
    </CompilationWrapper>
  );
};

const CompilationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 230px;
  background: #ffffff;
  border-radius: 16px 16px 16px 0;
  overflow: hidden;
  border: 2px solid #f5f6fb;
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 22px;
  background: #f5f6fb;
`;

const CompilationTitle = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

const TypeBadge = styled.span<{ $isExpense: boolean }>`
  font-size: 10px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 25px;
  background: ${({ $isExpense }) => ($isExpense ? "#ffe5e5" : "#e5f5ee")};
  color: ${({ $isExpense }) => ($isExpense ? "#e53e3e" : "#38a169")};
`;

const CompilationItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0 22px;
  justify-content: space-between;
  background: #f5f6fb;
  height: 38px;
  border-top: 2px solid #ffffff;
  gap: 8px;
`;

const CompilationItemText = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #52555f;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 130px;
`;

const AmountText = styled.div<{ $positive: boolean }>`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: ${({ $positive }) => ($positive ? "#38a169" : "#e53e3e")};
  white-space: nowrap;
`;

const TotalRow = styled(CompilationItem)`
  border-top: 2px solid #e5e7eb;
  background: #eef0f7;
`;

const TotalAmount = styled(AmountText)``;

const EmptyText = styled.p`
  font-size: 12px;
  color: #9ca3af;
  text-align: center;
  padding: 20px;
  margin: 0;
`;
