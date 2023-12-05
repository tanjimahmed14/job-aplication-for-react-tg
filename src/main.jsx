import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./componints/Root/Root";
import Home from "./componints/Home/Home";
import AppliedJobs from "./componints/AppliedJobs/AppliedJobs";
import Jobs from "./componints/Jobs/Jobs";
import ErrorPage from "./componints/ErrorPage/ErrorPage";
import JobDetels from "./componints/JobDetels/JobDetels";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('../jobs.json')
      },
      {
        path: "/job/:id",
        element: <JobDetels></JobDetels>,
        loader: () => fetch('../jobs.json'),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
