import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Crypto from "./pages/Crypto.jsx";
import Trending from "./pages/Trending.jsx";
import Saved from "./pages/Saved.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element:<Crypto/>
      },
      {
        path: "/trending",
        element:<Trending/>
      },
      {
        path: "/saved",
        element:<Saved/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
