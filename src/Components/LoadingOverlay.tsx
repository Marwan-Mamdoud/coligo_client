// components/LoadingOverlay.tsx
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function LoadingOverlay() {
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);
  return (
    <div
      className={`loading-overlay ${
        isLoading ? "loading-overlay--visible" : ""
      }`}
      role="status"
      aria-live="polite"
      aria-busy={isLoading}
    >
      <div className="loading-card">
        <div className="spinner" aria-hidden="true" />
        <div className="loading-text">Loading...</div>
      </div>
    </div>
  );
}
