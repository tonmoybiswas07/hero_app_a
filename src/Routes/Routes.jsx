import React from "react";

import { createBrowserRouter } from "react-router";
import Root from "../Pages/Roots/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import AllApps from "../Pages/AllApps/AllApps";
import AppDetails from "../Pages/AppsDetails/AppDetails";
import InstallPage from "../Pages/InstallPage/InstallPage";
import AppsError from "../Pages/AppsError/AppsError";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("../trending.json"),
        Component: Home,
      },
      {
        path: "/AllApps",
        loader: () => fetch("../apps_data.json"),
        Component: AllApps,
      },
      {
        path: "/AppDetails/:id",
        loader: () => fetch("../apps_data.json"),
        Component: AppDetails,
        errorElement: <AppsError></AppsError>,
      },
      {
        path: "/installPage",
        loader: () => fetch("../apps_data.json"),
        Component: InstallPage,
      },
    ],
  },
]);
