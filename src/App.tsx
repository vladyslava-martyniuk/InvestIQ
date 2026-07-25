
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from './firebase.ts';
import { Header } from './components/Header/Header.tsx';
import { LoginPage } from './pages/LoginPage.tsx';

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
    </div>
  );
};

export default App;

