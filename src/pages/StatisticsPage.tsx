/** НОВИЙ ФАЙЛ → src/pages/StatisticsPage.tsx */
import { useMemo, useState } from "react";
import styled from "styled-components";
import { BarChart } from "../components/BarChart";
import { MONTHS, fmt } from "../constants/statistics";
import type { Transaction } from "../types/types";
import {
  buildPeriods,
  getBalance,
  getCategoryStats,
  getDetailStats,
  getFirstPeriod,
  getTotals,
  periodKey,
} from "../utils/stats";

type Props = {
  /** Транзакції з Firestore. Якщо не передати — сторінка покаже порожній стан */
  transactions?: Transaction[];
  /** Стартовий баланс рахунку */
  initialBalance?: number;
  onBack?: () => void;
};

export default function StatisticsPage({
  transactions = [],
  initialBalance = 0,
  onBack,
}: Props) {
  const [mode, setMode] = useState<"expense" | "income">("expense");
  const [category, setCategory] = useState<string | null>(null);
  const [startBalance, setStartBalance] = useState(initialBalance);
  const [draft, setDraft] = useState(String(initialBalance));

  // Слайдер: від місяця першої транзакції до грудня 2033
  const periods = useMemo(() => buildPeriods(transactions), [transactions]);

  const [index, setIndex] = useState(0);
  useMemo(() => {
    const first = getFirstPeriod(transactions);
    const i = periods.findIndex((p) => periodKey(p) === periodKey(first));
    if (i > -1) setIndex(i);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactions.length]);

  const period = periods[Math.min(index, periods.length - 1)];

  const totals = useMemo(() => getTotals(transactions, period), [transactions, period]);
  const categories = useMemo(
    () => getCategoryStats(transactions, period, mode),
    [transactions, period, mode]
  );
  const details = useMemo(
    () => getDetailStats(transactions, period, mode, category),
    [transactions, period, mode, category]
  );
  const balance = useMemo(
    () => getBalance(transactions, startBalance),
    [transactions, startBalance]
  );

  const go = (dir: number) =>
    setIndex((i) => Math.min(Math.max(i + dir, 0), periods.length - 1));

  const toggleMode = () => {
    setMode((m) => (m === "expense" ? "income" : "expense"));
    setCategory(null);
  };

  return (
    <Page>
      <Blob />
      <Container>
        {/* --- Верхня панель --- */}
        <TopBar>
          <BackLink type="button" onClick={onBack}>
            <span aria-hidden>←</span> Повернутись на головну
          </BackLink>

          <BalanceForm
            onSubmit={(e) => {
              e.preventDefault();
              const v = Number(draft.replace(/\s/g, "").replace(",", "."));
              if (!Number.isNaN(v)) setStartBalance(v);
            }}
          >
            <MutedLabel>Баланс:</MutedLabel>
            <BalanceBox>
              <BalanceInput
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onFocus={(e) => e.target.select()}
              />
              <Currency>UAH</Currency>
            </BalanceBox>
            <ConfirmBtn type="submit">ПІДТВЕРДИТИ</ConfirmBtn>
          </BalanceForm>

          {/* --- Слайдер періоду --- */}
          <Period>
            <MutedLabel>Поточний період</MutedLabel>
            <PeriodRow>
              <Arrow type="button" onClick={() => go(-1)} disabled={index === 0}>
                ‹
              </Arrow>
              <PeriodValue>
                {MONTHS[period.month]}
                <br />
                {period.year}
              </PeriodValue>
              <Arrow
                type="button"
                onClick={() => go(1)}
                disabled={index >= periods.length - 1}
              >
                ›
              </Arrow>
            </PeriodRow>
          </Period>
        </TopBar>

        {/* --- Підсумок місяця --- */}
        <SummaryCard>
          <SummaryItem>
            <SummaryLabel>Витрати:</SummaryLabel>
            <SummaryValue $color="#e53e3e">- {fmt(totals.expense)} грн.</SummaryValue>
          </SummaryItem>
          <Divider />
          <SummaryItem>
            <SummaryLabel>Доходи:</SummaryLabel>
            <SummaryValue $color="#38a169">+ {fmt(totals.income)} грн.</SummaryValue>
          </SummaryItem>
          <Divider />
          <SummaryItem>
            <SummaryLabel>Баланс:</SummaryLabel>
            <SummaryValue>{fmt(balance)} грн.</SummaryValue>
          </SummaryItem>
        </SummaryCard>

        {/* --- Категорії --- */}
        <Card>
          <SwitchRow>
            <Arrow type="button" onClick={toggleMode}>‹</Arrow>
            <SwitchTitle>{mode === "expense" ? "ВИТРАТИ" : "ДОХОДИ"}</SwitchTitle>
            <Arrow type="button" onClick={toggleMode}>›</Arrow>
          </SwitchRow>

          {categories.length === 0 ? (
            <EmptyText>
              За {MONTHS[period.month].toLowerCase()} {period.year} немає{" "}
              {mode === "expense" ? "витрат" : "доходів"}
            </EmptyText>
          ) : (
            <CategoryGrid>
              {categories.map((c) => {
                const active = category === c.label;
                return (
                  <CategoryBtn
                    key={c.label}
                    type="button"
                    $active={active}
                    onClick={() => setCategory(active ? null : c.label)}
                  >
                    <CatAmount>{fmt(c.amount)}</CatAmount>
                    <CatIcon>{c.icon}</CatIcon>
                    <CatLabel $active={active}>{c.label}</CatLabel>
                  </CategoryBtn>
                );
              })}
            </CategoryGrid>
          )}
        </Card>

        {/* --- Діаграма по описах транзакцій --- */}
        <Card>
          {category && (
            <FilterRow>
              <FilterName>{category}</FilterName>
              <ResetBtn type="button" onClick={() => setCategory(null)}>
                показати всі
              </ResetBtn>
            </FilterRow>
          )}
          <BarChart items={details} />
        </Card>
      </Container>
    </Page>
  );
}

/* ---------------- styles ---------------- */

const Page = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  background: #f7f9fc;
  font-family: "Roboto", sans-serif;
  color: #08060d;
`;

const Blob = styled.div`
  position: absolute;
  top: 64px;
  left: -320px;
  width: 620px;
  height: 620px;
  border-radius: 50%;
  background: #eaf0ff;
  pointer-events: none;
`;

const Container = styled.main`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 1060px;
  margin: 0 auto;
  padding: 32px 16px 80px;
`;

const TopBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const BackLink = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 13px;
  color: #52555f;

  span {
    font-size: 18px;
    color: #ff751d;
  }

  &:hover {
    color: #ff751d;
  }
`;

const BalanceForm = styled.form`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const MutedLabel = styled.span`
  display: block;
  font-size: 12px;
  color: rgba(82, 85, 95, 0.7);
`;

const BalanceBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(170, 178, 197, 0.25);
`;

const BalanceInput = styled.input`
  width: 120px;
  height: 44px;
  border: none;
  outline: none;
  background: transparent;
  text-align: right;
  font-size: 13px;
  font-weight: 700;
`;

const Currency = styled.span`
  padding-left: 4px;
  font-size: 13px;
  font-weight: 700;
`;

const ConfirmBtn = styled.button`
  height: 44px;
  padding: 0 20px;
  border: 2px solid #fff;
  border-radius: 16px;
  background: transparent;
  font-size: 12px;
  color: rgba(82, 85, 95, 0.7);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #ff751d;
    border-color: #ff751d;
    color: #fff;
  }
`;

const Period = styled.div`
  text-align: center;
`;

const PeriodRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 4px;
`;

const PeriodValue = styled.div`
  min-width: 120px;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.35;
  letter-spacing: 0.04em;
`;

const Arrow = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 24px;
  line-height: 1;
  color: #ff751d;
  padding: 0 4px;

  &:disabled {
    opacity: 0.25;
    cursor: default;
  }
`;

const Card = styled.section`
  padding: 28px 32px;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(170, 178, 197, 0.18);
`;

const SummaryCard = styled(Card)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 20px 32px;
`;

const SummaryItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Divider = styled.span`
  width: 2px;
  height: 22px;
  background: #f0f1f5;
`;

const SummaryLabel = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: #52555f;
`;

const SummaryValue = styled.span<{ $color?: string }>`
  font-size: 13px;
  font-weight: 700;
  color: ${({ $color }) => $color ?? "#08060d"};
`;

const SwitchRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-bottom: 26px;
`;

const SwitchTitle = styled.h2`
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.06em;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
  gap: 28px 12px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 560px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CategoryBtn = styled.button<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  text-align: center;
  background: ${({ $active }) => ($active ? "#fff3ea" : "transparent")};
  transition: background 0.2s;

  &:hover {
    background: ${({ $active }) => ($active ? "#fff3ea" : "#fafbfd")};
  }
`;

const CatAmount = styled.span`
  font-size: 12px;
  color: #52555f;
`;

const CatIcon = styled.span`
  font-size: 34px;
  line-height: 1;
`;

const CatLabel = styled.span<{ $active: boolean }>`
  font-size: 11px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ $active }) => ($active ? "#ff751d" : "#52555f")};
`;

const EmptyText = styled.p`
  margin: 0;
  padding: 24px 0;
  text-align: center;
  font-size: 14px;
  color: #52555f;
`;

const FilterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 8px;
  font-size: 12px;
  color: #52555f;
`;

const FilterName = styled.span`
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

const ResetBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  text-decoration: underline;
  font-size: 12px;
  color: #52555f;

  &:hover {
    color: #ff751d;
  }
`;
