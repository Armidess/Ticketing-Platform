import LoginUi from './Pages/LoginUi/LoginUi.jsx';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from './Pages/Error/Error.jsx';
import Homepage from './Pages/HomePage/Homepage.jsx';

const Layout = () => {
	return (
		<div >
			<Outlet></Outlet>
		</div>
	);
};

const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <Error />,
		element: <Layout />,
		children: [

      {
				path: "/login",
				element: <LoginUi />,
			},
      {
				path: "/home",
				element: <Homepage />,
			},
      			{
				path: "/",
				element: <LoginUi />,
			},
		],
	},
]);


function App() {
	return (
		<div>
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}
export default App;
