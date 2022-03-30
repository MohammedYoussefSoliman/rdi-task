import React from "react";
import { RouterType } from "helpers/types";

const routes: RouterType[] = [
  {
    path: "/",
    element: React.lazy(() => import("app/user-list")),
  },
  {
    path: "/new-user",
    element: React.lazy(() => import("app/add-user")),
  },
  {
    path: "/edit-user/:id",
    element: React.lazy(() => import("app/edit-user")),
  },
  {
    path: "/view-user/:id",
    element: React.lazy(() => import("app/user-page")),
  },
];

export default routes;
