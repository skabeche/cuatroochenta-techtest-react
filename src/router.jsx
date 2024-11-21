import { createBrowserRouter } from "react-router-dom";

import Error from "@/pages/Error";
import GuestLayout from "@/layouts/GuestLayout";
import AuthLayout from "@/layouts/AuthLayout";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Contact from "@/pages/Contact";
import PrivateRoute from "@/components/PrivateRoute";

const routes = [
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
    element: <PrivateRoute><AuthLayout /></PrivateRoute>,
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

const router = createBrowserRouter(routes, {
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
    v7_startTransition: true,
  }
});

export default router;
