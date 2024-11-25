import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "@/services/AuthService";

export default function useRequireAuth() {
  const [user, setUser] = useState(null);
  const { fetchUser, logout } = AuthService();
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => await fetchUser();
    const userAuth = getUser().then((user) => {
      if (!user) {
        setUser(null);
        logout();
      }

      setUser(user);
    });
  }, [navigate]);

  return user;
};
