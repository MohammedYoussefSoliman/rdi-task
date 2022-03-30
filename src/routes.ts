import React from "react";
import { RouterType } from "helpers/types";

const routes: RouterType[] = [
  {
    path: "/",
    element: React.lazy(() => import("app/UserList")),
  },
];

export default routes;
