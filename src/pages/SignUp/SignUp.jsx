import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import SocialLogin from '../../component/Shared/SocialLogin/SocialLogin';
import { saveUser } from '../../api/saveUser';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AuthContext } from '../../Provider/AuthProvider';

const validationSchema = yup.object().shape({
	password: yup
		.string()
		// .test(
		// 	'length',
		// 	'Password must be at least 6 characters long',
		// 	(value) => value.length >= 6
		// )
		// .test(
		// 	'uppercase',
		// 	'Password must contain at least one uppercase letter',
		// 	(value) => /[A-Z]/.test(value)
		// )
		// .test(
		// 	'specialChar',
		// 	'Password must contain at least one special character',
		// 	(value) => /[!@#$%^&*]/.test(value)
		// )
		.required('Password is required'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must need to match')
		.required('Confirm Password is required'),
});

const SignUp = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const navigate = useNavigate();
	const { createUser, updateUserProfile, logOut } = useContext(AuthContext);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
	});

	const onSubmit = (data) => {
		// console.log(data);
		createUser(data.email, data.password)
			.then((result) => {
				const loggedUser = result.user;
				console.log(loggedUser);
				updateUserProfile(data.name, data.photoUrl)
					.then(() => {
						saveUser(loggedUser);
						reset();
						logOut();
						navigate('/login');
					})
					.catch((error) => console.log(error.message));
			})
			.catch((error) => console.log(error.message));
	};
	return (
		<div className="hero flex justify-center align-middle">
			<div className="w-4/12 hero-content flex-col-reverse md:flex-row border-2">
				<div className="card flex-shrink-0 w-full max-w-sm">
					<div className="card-body">
						<h1 className="text-5xl font-bold text-center">Sign Up</h1>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div>
								<label className="label">
									<span className="label-text">Name</span>
								</label>
								<input
									{...register('name', { required: true })}
									placeholder="name"
									className="input input-bordered w-full"
								/>
								{errors.Name?.type === 'required' && (
									<p className="text-base-100">Name is required</p>
								)}
							</div>

							<div>
								<label className="label">
									<span className="label-text">Photo Url</span>
								</label>
								<input
									// ToDO:required: true

									{...register('photoUrl', { required: true })}
									aria-invalid={errors.photoUrl ? 'true' : 'false'}
									placeholder="photo Url"
									className="input input-bordered w-full"
								/>
								{errors.photoUrl?.type === 'required' && (
									<p className="text-base-100">Photo Url is required</p>
								)}
							</div>

							<div>
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									{...register('email', {
										required: true,
									})}
									aria-invalid={errors.email ? 'true' : 'false'}
									placeholder="email"
									className="input input-bordered w-full"
								/>
								{errors.email && (
									<p className="text-base-100">Email is required</p>
								)}
							</div>
							<div>
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<div className="relative">
									<input
										{...register('password')}
										aria-invalid={errors.password ? 'true' : 'false'}
										name="password"
										type={showPassword ? 'text' : 'password'}
										placeholder="Password"
										className="input input-bordered w-full pr-10"
									/>
									<button
										type="button"
										className="absolute right-3 top-1/2 transform -translate-y-1/2"
										onClick={() => setShowPassword(!showPassword)}
									>
										{showPassword ? <FaEye /> : <FaEyeSlash />}
									</button>
								</div>
								{errors.password && (
									<p className="text-base-100">{errors.password.message}</p>
								)}
							</div>

							<div>
								<label className="label">
									<span className="label-text">Confirm Password</span>
								</label>
								<div className="relative">
									<input
										{...register('confirmPassword')}
										aria-invalid={errors.confirmPassword ? 'true' : 'false'}
										name="confirmPassword"
										type={showConfirmPassword ? 'text' : 'password'}
										placeholder="Confirm Password"
										className="input input-bordered w-full pr-10"
									/>
									<button
										type="button"
										className="absolute right-3 top-1/2 transform -translate-y-1/2"
										onClick={() => setShowConfirmPassword(!showConfirmPassword)}
									>
										{showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
									</button>
								</div>
								{errors.confirmPassword && (
									<p className="text-base-100">
										{errors.confirmPassword.message}
									</p>
								)}
							</div>

							<div className="form-control mt-6">
								<button className="btn btn-primary" type="submit">
									Sign Up
								</button>
							</div>
							<p className="text-center text-gray-400">
								<small>
									Already have an account?<Link to="/login">LogIn</Link>
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

export default SignUp;
