import useRequireAuth from "@/hooks/useRequireAuth";

export default function AuthRoute({ children }) {
  const user = useRequireAuth();
  return user ? children : null;
};
