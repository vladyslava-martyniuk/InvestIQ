import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./pages/Home"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
import { PrivateRoute } from "./routes/PrivateRoute";
import { Header } from "./components/Header/Header";
const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="/auth" element={<LoginPage />} />
        {/* <Route element={<PrivateRoute />}> */}
          <Route path="/home" element={<Home />} />
        {/* </Route> */}
      </Routes>
    </Suspense>
  );
};

export default App;
