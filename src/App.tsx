import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./pages/Home"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const Spends = lazy(() => import("./pages/Spends"));
const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="/auth" element={<LoginPage />} />
        {/* <Route element={<PrivateRoute />}> */}
          <Route path="/home" element={<Home />} />
        {/* </Route> */}
        <Route path="/spends" element={<Spends />} />
      </Routes>
    </Suspense>
  );
};

export default App;
