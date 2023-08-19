import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import SingleCollegeDetails from "../pages/SingleCollegeDetails/SingleCollegeDetails";
import Colleges from "../pages/College/Colleges";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Main from "../Layout/Main/Main";
import PrivateRoute from "./PrivateRoutes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Admission from "../pages/Admission/Admission";
import AdmissionForm from "../pages/Admission/AdmissionForm";
import MyCollege from "../pages/MyCollege/MyCollege";
import Profile from "../pages/Profile/Profile";


export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: '/college',
				element: <Colleges></Colleges>,
			},
			{
				path: `/college/:name`,
				element: (
					<PrivateRoute>
						<SingleCollegeDetails></SingleCollegeDetails>
					</PrivateRoute>
				),
			},
			{
				path: '/admission',
				element: <Admission></Admission>,
			},
			{
				path: '/signup',
				element: <SignUp></SignUp>,
			},
			{
				path: '/login',
				element: <Login></Login>,
			},
			{
				path: '/admission',
				element: <Admission></Admission>,
			},
			{
				path: `/:college_name/admissionForm`,
				element: (
					<PrivateRoute>
						<AdmissionForm></AdmissionForm>
					</PrivateRoute>
				),
			},
			{
				path: '/myColleges',
				element: (
					<PrivateRoute>
						<MyCollege></MyCollege>
					</PrivateRoute>
				),

			},
			{
				path:'/profile',
				element:<Profile></Profile>
			}
		],
	},
]);
