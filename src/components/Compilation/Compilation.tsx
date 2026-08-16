import React from "react";
import styled from "styled-components";
import type { Transaction } from "../../types/types";

interface CompilationProps {
  transactions: Transaction[];
  type?: "expense" | "income";
}

const MONTH_NAMES = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];

export const Compilation: React.FC<CompilationProps> = ({ transactions, type = "expense" }) => {
  const getMonthlySummary = () => {
    const summaryMap: Record<string, number> = {};

    transactions.forEach((item) => {
      if (item.type !== type) return;

      let monthIndex = -1;

      if (item.date.includes(".")) {
        const parts = item.date.split(".");
        if (parts.length >= 2) {
          monthIndex = parseInt(parts[1], 10) - 1;
        }
      } else if (item.date.includes("-")) {
        const parts = item.date.split("-");
        if (parts.length >= 2) {
          monthIndex = parseInt(parts[1], 10) - 1;
        }
      } else {
        const parsedDate = new Date(item.date);
        if (!isNaN(parsedDate.getTime())) {
          monthIndex = parsedDate.getMonth();
        }
      }

      if (monthIndex >= 0 && monthIndex < 12) {
        const monthName = MONTH_NAMES[monthIndex];
        const positiveAmount = Math.abs(item.amount);
        summaryMap[monthName] = (summaryMap[monthName] || 0) + positiveAmount;
      }
    });

    return Object.entries(summaryMap).map(([month, amount]) => ({
      month,
      amount,
    }));
  };

  const summaryData = getMonthlySummary();

  const formatAmount = (value: number) => {
    return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <CompilationWrapper>
      <HeaderBox>
        <CompilationTitle>Зведення</CompilationTitle>
      </HeaderBox>
      <ListContainer>
        {summaryData.length > 0 ? (
          summaryData.map((item, index) => (
            <CompilationItem key={`${item.month}-${index}`}>
              <MonthText>{item.month}</MonthText>
              <AmountText>{formatAmount(item.amount)}</AmountText>
            </CompilationItem>
          ))
        ) : (
          <CompilationItem>
            <MonthText style={{ margin: "0 auto" }}>Немає даних</MonthText>
          </CompilationItem>
        )}
      </ListContainer>
    </CompilationWrapper>
  );
};

const CompilationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  background: #f5f6fb;
  border-radius: 20px 20px 20px 0px;
  overflow: hidden;
`;

const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  background: #f5f6fb;
  border-bottom: 2px solid #ffffff;
`;

const CompilationTitle = styled.h3`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 1;
  letter-spacing: 0.02em;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
  margin: 0;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  background-color: #ffffff;
`;

const CompilationItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 38px;
  background: #f5f6fb;
`;

const MonthText = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #52555f;
`;

const AmountText = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #52555f;
`;
