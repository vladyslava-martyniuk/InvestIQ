/** НОВИЙ ФАЙЛ → src/components/BarChart.tsx */
import styled from "styled-components";
import type { StatItem } from "../utils/stats";
import { fmtShort } from "../constants/statistics";

export function BarChart({ items }: { items: StatItem[] }) {
  if (items.length === 0) {
    return <Empty>Немає даних за обраний період</Empty>;
  }

  const max = Math.max(...items.map((i) => i.amount), 1);

  return (
    <Chart>
      <Grid aria-hidden>
        {Array.from({ length: 8 }).map((_, i) => (
          <GridLine key={i} />
        ))}
      </Grid>

      <Bars>
        {items.map((item, i) => (
          <Col key={item.label} title={`${item.label}: ${fmtShort(item.amount)} грн`}>
            <Value>{fmtShort(item.amount)} грн</Value>
            <Track>
              <Bar $accent={i % 2 === 0} style={{ height: `${(item.amount / max) * 100}%` }} />
            </Track>
            <Label>{item.label}</Label>
          </Col>
        ))}
      </Bars>
    </Chart>
  );
}

const Empty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 280px;
  font-size: 14px;
  color: #52555f;
`;

const Chart = styled.div`
  position: relative;
  width: 100%;
  height: 360px;
  padding-top: 32px;
`;

const Grid = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 56px;
  bottom: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const GridLine = styled.div`
  width: 100%;
  height: 1px;
  background: #f2f4f8;
`;

const Bars = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  gap: 8px;
  height: 100%;
`;

const Col = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
`;

const Value = styled.span`
  font-size: 11px;
  color: #52555f;
  white-space: nowrap;
`;

const Track = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  max-width: 36px;
  flex: 1;
`;

const Bar = styled.div<{ $accent: boolean }>`
  width: 100%;
  border-radius: 6px 6px 0 0;
  background: ${({ $accent }) => ($accent ? "#f07020" : "#fbd8bf")};
  transition: height 0.7s ease;
`;

const Label = styled.span`
  max-width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 11px;
  color: #52555f;
`;
