import { useMemo, useState, useEffect } from "react";
import styled from "styled-components";
import { BarChart } from "../components/BarChart";
import { MONTHS, fmt } from "../constants/statistics";
import type { Transaction } from "../types/types";
import { Balance } from "../components/Balance/Balance";
import {
  buildPeriods,
  getBalance,
  getCategoryStats,
  getDetailStats,
  getFirstPeriod,
  getTotals,
  periodKey,
} from "../utils/stats";
import { useNavigate } from "react-router-dom";
import { auth  } from "../firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import {
  subscribeToTransactions,
  deleteTransactionFromDb,
} from "../services/transactionsApi";

export default function StatisticsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [mode, setMode] = useState<"expense" | "income">("expense");
  const [category, setCategory] = useState<string | null>(null);
  const [startBalance, setStartBalance] = useState(0);
  const [draft, setDraft] = useState("0");
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
const userId = auth.currentUser?.uid;
  // Підписка на транзакції з Firebase
  useEffect(() => {
    const unsubscribe = subscribeToTransactions(userId || "", setTransactions);
    return () => unsubscribe();
  }, []);

  const periods = useMemo(() => buildPeriods(transactions), [transactions]);
   
  // Автоматично переходимо до першого місяця з транзакціями
  useMemo(() => {
    const first = getFirstPeriod(transactions);
    const i = periods.findIndex((p) => periodKey(p) === periodKey(first));
    if (i > -1) setIndex(i);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactions.length]);

  const period = periods[Math.min(index, periods.length - 1)];

  const totals = useMemo(
    () => getTotals(transactions, period),
    [transactions, period]
  );
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

  const handleDelete = async (id: string) => {

    try {
      if (!userId) {
        throw new Error('Поточний користувач не знайдено');
      }
      await deleteTransactionFromDb(userId, id);
    } catch {
      alert("Не вдалося видалити транзакцію");
    }
  };
  const [user, setUser] = useState<User | null>(null);
  const handleConfirmBalance = (value: number) => {
    if (!user) return;

    localStorage.setItem(`investiq-balance-${user.uid}`, String(value));
    setStartBalance(value);
  };
  const transactionsTotal = transactions.reduce((sum, tx) => sum + tx.amount, 0);
  // Щоб уникнути помилки якщо periods порожній
  if (!period) return <LoadingBox>Завантаження...</LoadingBox>;
 const currentBalance = (startBalance ?? 0) + transactionsTotal;
  return (
    <Page>
      <Blob />
      <Container>
        {/* Верхня панель */}
        <TopBar>
          <BackLink type="button" onClick={() => navigate("/home")}>
            <span aria-hidden>←</span> Повернутись на головну
          </BackLink>

             <BalanceBox>
                     <Balance
                       value={currentBalance}
                       isSet={startBalance !== null}
                       onConfirm={handleConfirmBalance}
                     />
                   </BalanceBox>

          {/* Слайдер періоду */}
          <Period>
            <MutedLabel>Поточний період</MutedLabel>
            <PeriodRow>
              <Arrow
                type="button"
                onClick={() => go(-1)}
                disabled={index === 0}
              >
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

        {/* Підсумок місяця */}
        <SummaryCard>
          <SummaryItem>
            <SummaryLabel>Витрати:</SummaryLabel>
            <SummaryValue $color="#e53e3e">
              - {fmt(totals.expense)} грн.
            </SummaryValue>
          </SummaryItem>
          <Divider />
          <SummaryItem>
            <SummaryLabel>Доходи:</SummaryLabel>
            <SummaryValue $color="#38a169">
              + {fmt(totals.income)} грн.
            </SummaryValue>
          </SummaryItem>
          <Divider />
          <SummaryItem>
            <SummaryLabel>Баланс:</SummaryLabel>
            <SummaryValue>{fmt(balance)} грн.</SummaryValue>
          </SummaryItem>
        </SummaryCard>

        {/* Категорії */}
        <Card>
          <SwitchRow>
            <Arrow type="button" onClick={toggleMode}>
              ‹
            </Arrow>
            <SwitchTitle>
              {mode === "expense" ? "ВИТРАТИ" : "ДОХОДИ"}
            </SwitchTitle>
            <Arrow type="button" onClick={toggleMode}>
              ›
            </Arrow>
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

        {/* Діаграма */}
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

        {/* Таблиця витрат за місяць */}
        <Card>
          <SectionTitle>
            Транзакції за {MONTHS[period.month].toLowerCase()} {period.year}
          </SectionTitle>
          {transactions
            .filter((t) => {
              const d = new Date(t.date);
              return (
                d.getFullYear() === period.year &&
                d.getMonth() === period.month &&
                t.type === mode
              );
            })
            .length === 0 ? (
            <EmptyText>Транзакцій немає</EmptyText>
          ) : (
            <SimpleTable>
              <thead>
                <tr>
                  <STh>Дата</STh>
                  <STh>Опис</STh>
                  <STh>Категорія</STh>
                  <STh>Сума</STh>
                  <STh />
                </tr>
              </thead>
              <tbody>
                {transactions
                  .filter((t) => {
                    const d = new Date(t.date);
                    return (
                      d.getFullYear() === period.year &&
                      d.getMonth() === period.month &&
                      t.type === mode
                    );
                  })
                  .map((tx) => (
                    <STr key={tx.id}>
                      <STd>{tx.date}</STd>
                      <STd>{tx.description}</STd>
                      <STd>
                        <Badge>{tx.category}</Badge>
                      </STd>
                      <STd>
                        <AmountSpan $positive={tx.amount >= 0}>
                          {tx.amount > 0 ? "+" : ""}
                          {fmt(tx.amount)} ₴
                        </AmountSpan>
                      </STd>
                      <STd>
                        <DeleteBtn
                          type="button"
                          onClick={() => handleDelete(tx.id)}
                          title="Видалити"
                        >
                          🗑
                        </DeleteBtn>
                      </STd>
                    </STr>
                  ))}
              </tbody>
            </SimpleTable>
          )}
        </Card>
      </Container>
    </Page>
  );
}

// --- STYLED COMPONENTS ---

const Page = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  background: #f7f9fc;
  font-family: "Montserrat", sans-serif;
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
  text-align: center;
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

  @media (max-width: 640px) {
    padding: 20px 16px;
  }
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
  margin-bottom: 16px;
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

const SectionTitle = styled.h3`
  margin: 0 0 20px 0;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #52555f;
`;

const SimpleTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
`;

const STh = styled.th`
  text-align: left;
  padding: 10px 12px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #52555f;
  background: #f7f9fc;
`;

const STr = styled.tr`
  &:hover td {
    background: #fafbfd;
  }
`;

const STd = styled.td`
  padding: 12px;
  border-top: 1px solid #f0f1f5;
  vertical-align: middle;
`;

const Badge = styled.span`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 25px;
  background: #aab2c533;
  color: #52555f;
  font-size: 11px;
  font-weight: 600;
`;

const AmountSpan = styled.span<{ $positive: boolean }>`
  font-weight: 700;
  color: ${({ $positive }) => ($positive ? "#38a169" : "#e53e3e")};
`;

const DeleteBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  opacity: 0.5;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

const LoadingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #52555f;
`;