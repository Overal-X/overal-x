import { createBrowserRouter, RouterProvider } from "react-router-dom";

import BaseLayout from "@/layouts/baselayout";
import ErrorPage from "@/pages/404";

import { layoutRoutes } from "@/router/layout.routes";

const routes = [
  { path: "*", element: <ErrorPage /> },
  { path: "/", element: <BaseLayout />, children: layoutRoutes },
];

const router = createBrowserRouter(routes);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
