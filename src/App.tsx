import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "./firebase.ts";
import styled from "styled-components";

const Header = lazy(() =>
  import("./components/Header/Header.tsx").then((module) => ({
    default: module.Header,
  }))
);

const Home = lazy(() => import("./pages/Home.tsx"));
const LoginPage = lazy(() => import("./pages/LoginPage.tsx"));
const StatisticsPage = lazy(() => import("./pages/StatisticsPage.tsx"));

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

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
      navigate("/auth");
    } catch (error) {
      console.error("Помилка виходу:", error);
    }
  };

  const userName = user?.displayName || user?.email || undefined;
  const isAuthPage = location.pathname === "/auth";

  if (loading) {
    return <LoadingFallback>Завантаження...</LoadingFallback>;
  }

  return (
    <AppWrapper>
      <Suspense fallback={<LoadingFallback>Завантаження...</LoadingFallback>}>
        {!isAuthPage && <Header userName={userName} onLogout={handleLogout} />}

        <MainLayout>
          <Routes>
            <Route path="/" element={<Navigate to="/auth" replace />} />
            <Route path="/auth" element={<LoginPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/spends" element={<StatisticsPage />} />
          </Routes>
        </MainLayout>
      </Suspense>
    </AppWrapper>
  );
};

export default App;

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f5f6fb;
`;

const MainLayout = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const LoadingFallback = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: "Montserrat", sans-serif;
  color: #52555f;
`;
