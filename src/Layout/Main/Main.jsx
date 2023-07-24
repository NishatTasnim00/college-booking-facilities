import { Outlet } from 'react-router-dom';
import Navbar from '../../component/Navbar/Navbar';

const Main = () => {
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
