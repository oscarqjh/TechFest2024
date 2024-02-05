import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import LandingPage from "./routes/LandingPage";
import TestingPage from "./routes/TestingPage";
import App from "./App"

import "./styles/base.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/testing",
    element: <TestingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/apitest",
    element: <App />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
