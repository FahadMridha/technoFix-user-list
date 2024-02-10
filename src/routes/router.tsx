import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import React from "react";
import UserList from "../pages/user/UserList";
import SingleUser from "../pages/user/SingleUserDetails";
import SingleUserDetails from "../pages/user/SingleUserDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserList />,
  },
  {
    path: "/userList",
    element: <UserList />,
  },

  {
    path: "/userList/:id",
    element: <SingleUserDetails />,
    loader: ({ params }) => fetch(`https://dummyjson.com/users/${params.id}`),
  },
]);

export default router;
