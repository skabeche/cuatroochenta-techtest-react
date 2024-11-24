import { createBrowserRouter } from "react-router-dom";

import Error from "@/pages/Error";
import NotFound from "@/pages/NotFound";
import GuestLayout from "@/layouts/GuestLayout";
import AuthLayout from "@/layouts/AuthLayout";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Contact from "@/pages/Contact";
import AuthRoute from "@/components/AuthRoute";

const routes = [
  {
    element: <GuestLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Login />,
        handle: { pageCssClass: "page-login" },

      },
      {
        path: "/login",
        element: <Login />,
        handle: { pageCssClass: "page-login" },
      },
    ],
  },
  {
    element: <AuthRoute><AuthLayout /></AuthRoute>,
    errorElement: <Error />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
        handle: { pageCssClass: "page-dashboard" },
      },
      {
        path: "/contact",
        element: <Contact />,
        handle: { pageCssClass: "page-contact" },
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
    handle: { pageCssClass: "page-notfound" },
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
