import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Lottie from 'lottie-react';
import img from '../../error.json';
const ErrorPage = () => {
	const { error, status } = useRouteError();
	return (
		<section
			className="flex items-center h-screen p-16  text-gray-900 bg-bottom"
			
		>
			<div className="flex flex-col items-center justify-center px-5 mx-auto py-10 lg:py-0">
				<Lottie className="h-" animationData={img} loop={true} />

				<div className="max-w-md text-center">
					<p className="text-2xl font-semibold md:text-2xl mb-4 text-gray-700">
						{error?.message}
					</p>
					<Link to="/">
						<button className="btn btn-primary mb-8">Back to Home</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ErrorPage;
