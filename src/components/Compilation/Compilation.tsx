import React from "react";
import styled from "styled-components";
import type { Transaction } from "../../types/types";
import { fmt } from "../../constants/statistics";

interface Props {
  transactions?: Transaction[];
  type?: "expense" | "income";
}

export const Compilation: React.FC<Props> = ({
  transactions = [],
  type = "expense",
}) => {
  const filtered = transactions.filter((t) => t.type === type);

  const categoryMap: Record<string, number> = {};
  filtered.forEach((t) => {
    categoryMap[t.category] =
      (categoryMap[t.category] ?? 0) + Math.abs(t.amount);
  });

  const categories = Object.entries(categoryMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  const total = filtered.reduce((sum, t) => sum + Math.abs(t.amount), 0);

  return (
    <CompilationWrapper>
      <HeaderRow>
        <CompilationTitle>Зведення</CompilationTitle>
        <TypeBadge $isExpense={type === "expense"}>
          {type === "expense" ? "Витрати" : "Доходи"}
        </TypeBadge>
      </HeaderRow>

      {categories.length === 0 ? (
        <EmptyText>Немає даних</EmptyText>
      ) : (
        <>
          {categories.map(([label, amount]) => (
            <CompilationItem key={label}>
              <CompilationItemText title={label}>{label}</CompilationItemText>
              <AmountText>{fmt(amount)} ₴</AmountText>
            </CompilationItem>
          ))}
          <TotalRow>
            <CompilationItemText>Разом:</CompilationItemText>
            <TotalAmount>{fmt(total)} ₴</TotalAmount>
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
  font-family: Roboto, sans-serif;
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
  font-family: Roboto, sans-serif;
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

const AmountText = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #e53e3e;
  white-space: nowrap;
`;

const TotalRow = styled(CompilationItem)`
  border-top: 2px solid #e5e7eb;
  background: #eef0f7;
`;

const TotalAmount = styled(AmountText)`
  color: #08060d;
`;

const EmptyText = styled.p`
  font-size: 12px;
  color: #9ca3af;
  text-align: center;
  padding: 20px;
  margin: 0;
`;