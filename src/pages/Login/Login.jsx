import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import SocialLogin from '../../component/Shared/SocialLogin/SocialLogin';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Login = () => {
    const emailRef = useRef(); // Explicitly specify the type
	console.log(emailRef.current?.value);

	const navigate = useNavigate();
	const location = useLocation();
	const { signIn, resetPass } = useContext(AuthContext);
	let from = location.state?.from?.pathname || '/';
	const { register, handleSubmit } = useForm();

	const handleLogin = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);
		signIn(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				navigate(from, { replace: true });
			})
			.catch((error) => {
				console.log(error.code);
			});
	};

	const handlerRestPassword = () => {
		const email = emailRef.current?.value;
		console.log(emailRef);
		if (!email) {
			alert('Please provide your email address to reset password.');
		}
		resetPass(email)
			.then(() => {
				Swal.fire('Please check your email');
			})
			.catch((error) => {
				console.log(error, 'reset error');
			});
	};

	return (
		<div className="hero">
			<div className="w-4/12 hero-content flex-col-reverse md:flex-row border-2">
				<div className="card flex-shrink-0 w-full max-w-sm">
					<div className="card-body">
						<h1 className="text-5xl font-bold text-center">Login</h1>

						<form onSubmit={handleLogin}>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									ref={emailRef}
									type="text"
									placeholder="email"
									className="input input-bordered"
									name="email"
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									type="password"
									placeholder="password"
									className="input input-bordered"
									name="password"
								/>
							</div>

							<label className="label">
								<a
									href="#"
									onClick={handlerRestPassword}
									className="label-text-alt link link-hover"
								>
									Forgot password?
								</a>
							</label>
							<div className="form-control mt-6">
								<button className="btn btn-primary" type="submit">
									Login
								</button>
							</div>
							<p className="text-gray-400">
								<small>
									New here?
									<Link to="/signUp">Create a new Account</Link>
								</small>
							</p>
							<SocialLogin></SocialLogin>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
