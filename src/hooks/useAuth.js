import { useState, useEffect, useRef } from "react";
import authMe from "@/mockups/auth-me.json"
import authLogin from "@/mockups/auth-login.json"

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Using dummy json for authentication through https://dummyjson.com/docs/auth
    // const fetchUser = async () => {
    //   const token = localStorage.getItem("authToken");

    //   if (token) {
    //     try {
    //       const response = await fetch("https://dummyjson.com/auth/me", {
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
    //       userCurrentRef.current = username;
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

  const login = async (email, password) => {
    // Using dummy json for authentication through https://dummyjson.com/docs/auth
    // try {
    //   const response = await fetch("https://dummyjson.com/auth/login", {
    //     method: "post",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     // body: JSON.stringify({ email, password }),
    //     body: JSON.stringify({
    //       // username: email,
    //       // password: password,
    //       username: "emilys",
    //       password: "emilyspass",
    //       expiresInMins: 30, // optional, defaults to 60.
    //     }),
    //   });

    //   if (!response.ok) {
    //     throw new Error("Invalid credentials");
    //   }

    //   const data = await response.json();
    //   const { username, accessToken } = data;

    //   localStorage.setItem("authToken", accessToken);
    //   userCurrentRef.current = username;
    // } catch (error) {
    //   console.log(error.message);
    // } finally {
    //   setIsLoading(false);
    // }

    // Fake API data.
    const { username, accessToken } = authLogin;
    setUser(username);
    localStorage.setItem("authToken", accessToken);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
  };


  return { user, login, logout, isLoading };
};
