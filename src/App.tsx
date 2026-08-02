
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from './firebase.ts';
import { Header } from './components/Header/Header.tsx';
import { Balance } from './components/Balance/Balance.tsx';
import { TransactionForm } from './components/TransactionForm/TransactionForm.tsx';
import { LoginPage } from './pages/LoginPage.tsx';
import { Compilation } from './components/Compilation/Compilation.tsx';
import { TransactionsTable } from './components/TransactionsTable.tsx';
import { Transaction } from './types/types.ts';

const transactions: Transaction[] = [
  { id: "1", date: "2023-08-01", amount: 100, category: "Food", description: "Burger", type: "expense" },
  { id: "2", date: "2023-08-02", amount: 50, category: "Entertainment", description: "Movie", type: "expense" },
];
const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif' }}>
        Завантаження...
      </div>
    );
  }

  const userName = user?.displayName || user?.email || undefined;

  return (
    <div>
      <Header userName={userName} onLogout={handleLogout} />
      {!user && <LoginPage />}
      <Balance />  
      <TransactionForm /> 
      <TransactionsTable items={transactions} />
      <Compilation />
    </div>
  );
};

export default App;

