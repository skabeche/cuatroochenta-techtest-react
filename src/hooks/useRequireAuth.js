import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export default function useRequireAuth() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      // Variable user is null after navigation, needs further investigation.
      // navigate("/login");
    }
  }, [user, navigate]);

  return user;
};

