import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';
import Layout from "./module/Layout.tsx";
import Main from "./pages/Main/Main.tsx";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Main/></Layout>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
