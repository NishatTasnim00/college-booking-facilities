import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // You can use any HTTP library for making API requests
import { useQuery } from '@tanstack/react-query';

const CollegeDetails = () => {
	const { name } = useParams();
	console.log(name);
	const [loading, setLoading] = useState(true);

	const {
		data: collegeData = [],
		isLoading,
		refetch,
	} = useQuery(['collegeData', name], {
		// enabled: !loading,
		queryFn: async () => {
			const result = await axios.get(
				`${import.meta.env.VITE_API_URL}/colleges/${name}`
			);
			return result.data;
		},
	});

	// console.log(collegeData);

	const {
		college_image,
		college_name,
		admission_dates,
		events,
		research_history,
		sports,
	} = collegeData;
	return (
		<div>
			<div className="card w-10/12 bg-base-100 shadow-xl mx-auto">
				<h2 className="card-title mx-auto py-5">{college_name}</h2>

				<figure className="h-72 w-8/12 mx-auto mt-10">
					<img
						className="h-72 w-6/12 rounded-xl absolute object-cover"
						src={college_image}
						alt={college_name}
					/>
				</figure>
				<div className="card-body text-left font-medium text-gray-700">
					<p>
						<span className="card-subtitle">Admission Dates: </span>
						<span className="date-text">{admission_dates}</span>
					</p>
					<h3>
						<span className="card-subtitle">Events:</span>
					</h3>
					<ul>
						{events?.map((event, index) => (
							<li key={index}>
								<strong className="text-gray-700">{event.event_name}</strong> -
								<span className="event-date">{event.date}</span>
								<br />
								{event.description}
							</li>
						))}
					</ul>
					<p>
						<span className="card-subtitle">Research History:</span>
						{research_history}
					</p>
					<h3>
						<span className="card-subtitle">Sports:</span>
					</h3>
					<ul>
						{sports?.map((sport, index) => (
							<li key={index}>{sport} </li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CollegeDetails;
