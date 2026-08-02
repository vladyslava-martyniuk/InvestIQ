import React from "react";
import styled from "styled-components";
import type { Transaction } from "../types/types";

const dateFmt = new Intl.DateTimeFormat("uk-UA", { day: "2-digit", month: "short" });
const moneyFmt = new Intl.NumberFormat("uk-UA", {
  style: "currency",
  currency: "UAH",
  minimumFractionDigits: 2,
});

const Card = styled.div`
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  overflow: hidden;
`;

const ScrollArea = styled.div`
  max-height: 420px;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: #ff751d transparent;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #ff751d;
    border-radius: 25px;
    border: 2px solid #ffffff;
  }

  @media (max-width: 640px) {
    max-height: none;
    overflow: visible;
  }
`;

const Table = styled.table`
  width: 100%;
  min-width: 560px;
  border-collapse: collapse;
  font-size: 14px;

  @media (max-width: 640px) {
    min-width: 0;
  }
`;

const Head = styled.thead`
  @media (max-width: 640px) {
    display: none;
  }
`;

const Th = styled.th`
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #f7f9fc;
  color: #52555f;
  text-align: left;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 16px 20px;
  white-space: nowrap;
`;

const Row = styled.tr`
  &:hover td {
    background-color: #fafbfd;
  }

  @media (max-width: 640px) {
    display: grid;
    padding: 14px 16px;
    border-top: 1px solid #f0f1f5;

    &:hover td {
      background-color: transparent;
    }
  }
`;

const Td = styled.td`
  padding: 18px 20px;
  border-top: 1px solid #f0f1f5;
  vertical-align: middle;

  @media (max-width: 640px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding: 2px 0;
    border: none;

    &::before {
      content: attr(data-label);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: #52555f;
    }
  }
`;

const DateCell = styled(Td)`
  width: 15%;
  color: #52555f;
  white-space: nowrap;
`;

const DescCell = styled(Td)`
  width: 40%;
  font-weight: 500;
`;

const CategoryCell = styled(Td)`
  width: 25%;
`;

const AmountCell = styled(Td)<{ $positive: boolean }>`
  width: 20%;
  text-align: right;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: ${({ $positive }) => ($positive ? "#38a169" : "#e53e3e")};

  @media (max-width: 640px) {
    text-align: left;
  }
`;

const Badge = styled.span`
  display: inline-block;
  padding: 5px 12px;
  border-radius: 25px;
  background-color: #aab2c533;
  color: #52555f;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
`;

const EmptyText = styled.p`
  font-size: 13px;
  color: #52555f;
  text-align: center;
  padding: 40px 20px;
  margin: 0;
`;

interface TransactionsTableProps {
  items: Transaction[];
}

export const TransactionsTable: React.FC<TransactionsTableProps> = ({ items }) => {
  if (items.length === 0) {
    return (
      <Card>
        <EmptyText>Транзакцій поки немає</EmptyText>
      </Card>
    );
  }

  return (
    <Card>
      <ScrollArea>
        <Table>
          <Head>
            <tr>
              <Th>Дата</Th>
              <Th>Опис</Th>
              <Th>Категорія</Th>
              <Th>Сума</Th>
            </tr>
          </Head>
          <tbody>
            {items.map((tx) => (
              <Row key={tx.id}>
                <DateCell data-label="Дата">{dateFmt.format(new Date(tx.date))}</DateCell>
                <DescCell data-label="Опис">{tx.description}</DescCell>
                <CategoryCell data-label="Категорія">
                  <Badge>{tx.category}</Badge>
                </CategoryCell>
                <AmountCell data-label="Сума" $positive={tx.amount >= 0}>
                  {tx.amount > 0 ? "+" : ""}
                  {moneyFmt.format(tx.amount)}
                </AmountCell>
              </Row>
            ))}
          </tbody>
        </Table>
      </ScrollArea>
    </Card>
  );
};