import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./index.css";

import { Toaster } from "sonner";

// PAGES

import LandingPage from "@/pages/LandingPage";

import LoginPage from "@/pages/LoginPage";

import RegisterPage from "@/pages/RegisterPage";

import DashboardPage from "@/pages/DashboardPage";

import RankingPage from "@/pages/RankingPage";

import RecommendationPage from "@/pages/RecommendationPage";

import AdminPage from "@/pages/AdminPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* LANDING */}
        <Route
          path="/"
          element={<LandingPage />}
        />

        {/* AUTH */}
        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/register"
          element={<RegisterPage />}
        />

        {/* USER */}
        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />

        <Route
          path="/ranking"
          element={<RankingPage />}
        />

        <Route
          path="/recommendation"
          element={<RecommendationPage />}
        />

        {/* ADMIN */}
        <Route
          path="/admin"
          element={<AdminPage />}
        />
      </Routes>

      <Toaster
        richColors
        position="top-right"
      />
    </BrowserRouter>
  </StrictMode>
);