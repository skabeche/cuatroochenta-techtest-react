import { createBrowserRouter } from "react-router-dom";

// import App from "./App";
import Error from "@pages/Error";
import GuestLayout from "@layouts/GuestLayout";
import AuthLayout from "@layouts/AuthLayout";
import Login from "@pages/Login";
import Dashboard from "@pages/Dashboard";
import Contact from "@pages/Contact";

const routes = [
  // {
  //   path: '/',
  // element: <App />,
  //   errorElement: <Error />,
  // },

  {
    element: <GuestLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Login />,

      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
