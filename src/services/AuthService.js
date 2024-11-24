import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ApiAdapter from "@/adapters/apiAdapter";
import AuthRepository from "@/repositories/AuthRepository";

const apiAdapter = new ApiAdapter(import.meta.env.VITE_API_AUTH_BASE_URL);
const authRepository = new AuthRepository(apiAdapter);

export default function AuthService() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    //Fetch user to check if token is valid.
    const fetchUser = async () => {
      const token = localStorage.getItem("authToken");

      if (token) {
        // Using dummy json for authentication through https://dummyjson.com/docs/auth
        try {
          const response = await authRepository.getUserByToken(token);
          if (!response.id) {
            throw new Error("Failed to fetch user");
          }

          setUser(response.username);
        } catch (error) {
          // console.log(error.message);
          setMessage(error.message);
          logout();
        }
      }
    };

    fetchUser();
  }, []);

  const login = async (username, password) => {
    setIsLoading(true);

    // Using dummy json for authentication through https://dummyjson.com/docs/auth
    try {
      const response = await authRepository.login(username, password);

      if (!response.accessToken) {
        throw new Error("Invalid credentials");
      }

      localStorage.setItem("authToken", response.accessToken);
      navigate("/dashboard");
    } catch (error) {
      // console.log(error.message);
      setMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
    navigate("/login");
  };

  return { user, login, logout, isLoading, message };
};
