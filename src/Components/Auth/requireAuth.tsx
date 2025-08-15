// src/components/requireAuth.tsx
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "../../store/store";

type ComponentType = React.ComponentType<any>;

export default function requireAuth<T extends object>(
  WrappedComponent: ComponentType
) {
  // نرجع مكون جديد يتأكد من حالة الدخول
  return function WithAuth(props: T) {
    const isAuthenticated = useSelector(
      (state: RootState) => state.auth.isAuthenticated
    );
    const location = useLocation();

    if (!isAuthenticated) {
      // لو مش مسجل، نعمل redirect للصفحة الرئيسية ونرسل مكان العودة
      return <Navigate to="/auth" replace state={{ from: location }} />;
    }

    return <WrappedComponent {...props} />;
  };
}
