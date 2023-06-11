import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home/Home";
import Login from "../pages/login/Login/Login";
import SignUp from "../pages/signup/SignUp/SignUp";
import Instructors from "../pages/instructors/Instructors/Instructors";
import Classes from "../pages/classes/Classes/Classes";
import DashboardLayout from "../layouts/DashboardLayout";
import AddClass from "../pages/dashboardPages/addClass/AddClass";
import AllStudents from "../pages/dashboardPages/allStudents/AllStudents";
import MyClasses from "../pages/dashboardPages/myClasses/MyClasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },

  /* Dashboard layout */
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "allStudents",
        element: <AllStudents></AllStudents>,
      },
      {
        path: "addClass",
        element: <AddClass></AddClass>,
      },
      {
        path: "myClasses",
        element: <MyClasses></MyClasses>,
      },
    ],
  },
]);

export default router;
