import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export default function useRequireAuth() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Variable user is null after navigation, needs further investigation.
    // console.log(user);
    if (!user) {
      // navigate("/login");
    }
  }, [user, navigate]);

  return user;
};

