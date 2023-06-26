import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import Login from "../../pages/login/Login";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/dashboard",
    element:<Main></Main>,
    children: [
      {
        path: "/dashboard",
        element: <Home></Home>,
      },
    ],
  },
]);
