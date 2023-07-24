import { Outlet } from 'react-router-dom';
import Navbar from '../../component/Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Main = () => {
	const{ user, loading} = useContext(AuthContext)
	
	return (
		<div>
			<Navbar></Navbar>
			<div className="my-20 flex justify-center">
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default Main;
