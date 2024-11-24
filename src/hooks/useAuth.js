import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import authMe from "@/mockups/auth-me.json"
import authLogin from "@/mockups/auth-login.json"

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Using dummy json for authentication through https://dummyjson.com/docs/auth
    // const fetchUser = async () => {
    //   const token = localStorage.getItem("authToken");

    //   if (token) {
    //     try {
    //       const response = await fetch(`${import.meta.env.VITE_API_AUTH_BASE_URL}/me`, {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //         },
    //       });

    //       if (!response.ok) {
    //         throw new Error("Failed to fetch user");
    //       }

    //       const data = await response.json();
    //       const { username } = data;

    //       console.log(username)
    //       setUser(username);

    //     } catch (error) {
    //       console.log(error.message);
    //       logout();
    //     }
    //   }
    // };


    // Fake API data.
    const fetchUser = async () => {
      const token = localStorage.getItem("authToken");

      if (token) {
        const { username } = authMe;
        setUser(username);
      }
    };

    fetchUser();
  }, []);

  const login = async (usernamex, passwordx) => {
    setIsLoading(true);

    // Using dummy json for authentication through https://dummyjson.com/docs/auth
    // try {
    //   const response = await fetch(`${import.meta.env.VITE_API_AUTH_BASE_URL}/login`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       username: usernamex,
    //       password: passwordx,
    //       expiresInMins: 30, // optional, defaults to 60.
    //     }),
    //   });

    //   if (!response.ok) {
    //     throw new Error("Invalid credentials");
    //   }

    //   const data = await response.json();
    //   const { accessToken } = data;

    //   localStorage.setItem("authToken", accessToken);
    //   navigate("/dashboard");
    // } catch (error) {
    //   // console.log(error.message);
    //   setMessage(error.message);
    // } finally {
    //   setIsLoading(false);
    // }

    // Fake API data.
    try {
      const { username, accessToken } = authLogin;

      if (usernamex !== username) {
        throw new Error("Invalid credentials");
      }
      setUser(username);
      localStorage.setItem("authToken", accessToken);
      navigate("/dashboard");
    } catch (error) {
      setMessage(error.message);
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
