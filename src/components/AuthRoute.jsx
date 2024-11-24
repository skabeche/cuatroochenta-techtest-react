import { Navigate } from "react-router-dom";

export default function AuthRoute({ children }) {
  const token = localStorage.getItem("authToken");
  return token ? children : <Navigate to="/login" />;
}

// Variable user is null after navigation, needs further investigation.
// import useRequireAuth from "@/hooks/useRequireAuth";

// export default function AuthRoute({ children }) {
//   const user = useRequireAuth();
//   return user ? children : null;
// };
