import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import logo from '../../../public/education.png';
const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);
	const handleLogOut = () => {
		logOut();
	};
	const navItem = (
		<>
			<li>
				<NavLink
					to="/"
					className={({ isActive }) => (isActive ? 'active' : 'default')}
				>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/college"
					className={({ isActive }) => (isActive ? 'active' : 'default')}
				>
					Colleges
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/admission"
					className={({ isActive }) => (isActive ? 'active' : 'default')}
				>
					Admission
				</NavLink>
			</li>
			{user && <li>
				<NavLink
					to="/myColleges"
					className={({ isActive }) => (isActive ? 'active' : 'default')}
				>
					My College
				</NavLink>
			</li>}
		</>
	);
	return (
		<div className="fixed z-10 top-0 navbar bg-blue-200 px-8">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						{navItem}
					</ul>
				</div>
				<img className="h-10" src={logo} alt="" />
				<a className="btn btn-ghost normal-case text-xl"></a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu-horizontal space-x-5">{navItem}</ul>
			</div>
			<div className="navbar-end gap-5">
				{user ? (
					<>
						<div>
							<Link to='/profile'>
								<h1 className="font-bold text-lg">{user.displayName}</h1>
							</Link>
						</div>
						<Link
							className="btn btn-neutral hidden lg:flex"
							onClick={handleLogOut}
						>
							Logout
						</Link>
					</>
				) : (
					<Link to="/login" className="btn btn-neutral">
						Login
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;
