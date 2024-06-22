import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Introduction } from "../pages/Introduction";
import { NotFound } from "../pages/NotFound";

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", index: true, element: <Introduction /> },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
