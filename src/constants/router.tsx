import { createBrowserRouter } from "react-router-dom";
import UsersPage from "../pages/UsersPage";
import UserPage from "../pages/UserPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UsersPage />,
  },
  {
    path: "/user/:id",
    element: <UserPage />,
  },
]);
