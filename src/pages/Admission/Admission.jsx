import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const Admission = () => {
	const {
		data: collegesData = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ['collegesData'],
		// enabled:!loading,
		queryKey: ['collegesData'],
		queryFn: async () => {
			const result = await axios.get('http://localhost:5000/colleges');
			return result.data;
		},
	});
	return (
		<div className="w-10/12 mx-auto grid grid-cols-3 gap-8">
			{collegesData.map((college) => (
				<Link to={`/${college.college_name}/admissionForm`}>
					<div>
						<div
							className="hero h-64"
							style={{
								backgroundImage: `url(${college.college_image})`,
							}}
						>
							<div className="hero-overlay bg-opacity-60"></div>
							<div className="hero-content text-center text-neutral-content">
								<div className="max-w-md">
									<h1 className="mb-5 text-3xl font-bold">{college.college_name}</h1>
								</div>
							</div>
						</div>
					</div>

					{/* <p>{college.college_name}</p> */}
				</Link>
			))}
		</div>
	);
};

export default Admission;
