import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "@/services/AuthService";

export default function useRequireAuth() {
  const { user } = AuthService();
  const navigate = useNavigate();

  useEffect(() => {
    // Variable user is null after navigation, needs further investigation.
    console.log(user);
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return user;
};

