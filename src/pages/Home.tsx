import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import styled from "styled-components";
import { IoBarChart } from "react-icons/io5";
import { auth } from "../firebase.ts";
import { Header } from "../components/Header/Header.tsx";
import { Balance } from "../components/Balance/Balance.tsx";
import { TransactionForm } from "../components/TransactionForm/TransactionForm.tsx";
import { Compilation } from "../components/Compilation/Compilation.tsx";
import { TransactionsTable } from "../components/TransactionsTable.tsx";
import type { Transaction } from "../types/types.ts";
import {
  subscribeToTransactions,
  deleteTransactionFromDb,
} from "../services/transactionsApi.ts";

const Home: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [startBalance, setStartBalance] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) {
      setTransactions([]);
      return;
    }

    const unsubscribe = subscribeToTransactions(user.uid, setTransactions);
    return () => unsubscribe();
  }, [user]);

  useEffect(() => {
    if (!user) return;

    const saved = localStorage.getItem(`investiq-balance-${user.uid}`);
    setStartBalance(saved === null ? null : Number(saved));
  }, [user]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/auth");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!user) return;

    try {
      await deleteTransactionFromDb(user.uid, id);
    } catch {
      alert("Не вдалося видалити транзакцію");
    }
  };

  const handleConfirmBalance = (value: number) => {
    if (!user) return;

    localStorage.setItem(`investiq-balance-${user.uid}`, String(value));
    setStartBalance(value);
  };

  if (loading) {
    return <LoadingBox>Завантаження...</LoadingBox>;
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  const userName = user.displayName || user.email || undefined;

  const transactionsTotal = transactions.reduce((sum, tx) => sum + tx.amount, 0);
  const currentBalance = (startBalance ?? 0) + transactionsTotal;

  return (
    <>
      <Header userName={userName} onLogout={handleLogout} />

      <ContentContainer>
        <TopBar>
          <BalanceBox>
            <Balance
              value={currentBalance}
              isSet={startBalance !== null}
              onConfirm={handleConfirmBalance}
            />
          </BalanceBox>
          <ReportsButton type="button" onClick={() => navigate("/spends")}>
            <span>Перейти до розрахунків</span>
            <IoBarChart size={18} color="#52555f" />
          </ReportsButton>
        </TopBar>

        <MainCard>
          <TransactionForm />

          <TableAndSummarySection>
            <TableWrapper>
              <TransactionsTable items={transactions} onDelete={handleDelete} />
            </TableWrapper>
            <Compilation transactions={transactions} type="expense" />
          </TableAndSummarySection>
        </MainCard>
      </ContentContainer>
    </>
  );
};

export default Home;

const LoadingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px 0;
`;

const TopBar = styled.div`
  display: flex;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 20px;
  }
`;

const BalanceBox = styled.div`
  margin: 0 auto;
`;

const ReportsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: rgba(82, 85, 95, 0.7);
  transition: color 0.2s ease;
  svg {
    transition: fill 0.2s ease;
  }
  &:hover {
    color: #ff751d;
    svg {
      fill: #ff751d;
    }
  }
`;

const MainCard = styled.div`
  background-color: #ffffff;
  border-radius: 30px;
  padding: 30px 20px 60px;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
`;

const TableAndSummarySection = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 60px;
  align-items: flex-start;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TableWrapper = styled.div`
  flex: 1;
`;
