import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { saveGoogleUser } from '../../../api/saveUser';

const SocialLogin = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { googleSignIn, githubSignIn } = useContext(AuthContext);
	let from = location.state?.from?.pathname || '/';

	const handleGoogleSignIn = () => {
		googleSignIn().then((result) => {
			const loggedInUser = result.user;
			console.log(loggedInUser);
			saveGoogleUser(loggedInUser);
		});
    }
        const handleGithubSignIn = () => {
		githubSignIn().then((result) => {
			const loggedInUser = result.user;
			console.log(loggedInUser);
			saveGoogleUser(loggedInUser);
		});
		navigate(from, { replace: true });
	};
	return (
		<div>
			<div className="divider"></div>
			<div
				className="w-full flex justify-center gap-4
                "
			>
				<button
					onClick={handleGoogleSignIn}
					className="btn btn-circle btn-outline"
				>
					<FaGoogle />
				</button>
				<button
					onClick={handleGithubSignIn}
					className="btn btn-circle btn-outline"
				>
					<FaGithub />
				</button>
			</div>
		</div>
	);
};

export default SocialLogin;
