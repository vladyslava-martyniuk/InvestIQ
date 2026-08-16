import React from "react";
import styled from "styled-components";
import type { DetailStat } from "../utils/stats";
import { fmt } from "../constants/statistics";

interface Props {
  items: DetailStat[];
}

export const BarChart: React.FC<Props> = ({ items }) => {
  if (items.length === 0) {
    return <Empty>Немає даних для відображення</Empty>;
  }

  const max = Math.max(...items.map((i) => i.amount));

  return (
    <Wrapper>
      {items.map((item) => {
        const percent = max > 0 ? (item.amount / max) * 100 : 0;
        return (
          <Row key={item.label}>
            <LabelCol title={item.label}>{item.label}</LabelCol>
            <BarCol>
              <BarTrack>
                <BarFill style={{ width: `${percent}%` }} />
              </BarTrack>
            </BarCol>
            <AmountCol>{fmt(item.amount)} грн.</AmountCol>
          </Row>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 180px 1fr 140px;
  align-items: center;
  gap: 16px;

  @media (max-width: 640px) {
    grid-template-columns: 100px 1fr 100px;
    gap: 8px;
  }
`;

const LabelCol = styled.span`
  font-size: 13px;
  color: #52555f;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BarCol = styled.div`
  flex: 1;
`;

const BarTrack = styled.div`
  width: 100%;
  height: 12px;
  background: #f0f1f5;
  border-radius: 25px;
  overflow: hidden;
`;

const BarFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #ff751d, #ffaa6b);
  border-radius: 25px;
  transition: width 0.4s ease;
  min-width: 4px;
`;

const AmountCol = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: #08060d;
  text-align: right;
  white-space: nowrap;
`;

const Empty = styled.p`
  text-align: center;
  font-size: 14px;
  color: #52555f;
  padding: 32px 0;
  margin: 0;
`;