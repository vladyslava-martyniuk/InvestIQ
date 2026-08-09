import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from '../firebase.ts';
import { Header } from '../components/Header/Header.tsx';
import { Balance } from '../components/Balance/Balance.tsx';
import { TransactionForm } from '../components/TransactionForm/TransactionForm.tsx';

import { Compilation } from '../components/Compilation/Compilation.tsx';
import { TransactionsTable } from '../components/TransactionsTable.tsx';
import type { Transaction } from '../types/types.ts';
import {
  subscribeToTransactions,
  deleteTransactionFromDb,
} from '../services/transactionsApi.ts';

const Home: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/auth');
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteTransactionFromDb(id);
    } catch {
      alert('Не вдалося видалити транзакцію');
    }
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif' }}>
        Завантаження...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  const userName = user.displayName || user.email || undefined;

  return (
    <div>
      <Header userName={userName} onLogout={handleLogout} />
     
      <Balance />  
      <TransactionForm /> 
      <TransactionsTable items={transactions} onDelete={handleDelete} />
      <Compilation />
    </div>
  );
};

export default Home;