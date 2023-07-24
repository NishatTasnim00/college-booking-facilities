import { Link } from 'react-router-dom';

const CollegeCard = ({ college }) => {
	// console.log(college);
	const {
		_id,
		college_image,
		college_name,
		admission_dates,
		events,
		research_history,
		sports,
	} = college;
	return (
		<div>
			<div className="card w-96 bg-base-100 shadow-xl">
				<figure className="h-64 bg-black">
					<img
						className="h-64 rounded-t-xl absolute "
						src={college.college_image}
						alt={college.college_name}
					/>
				</figure>
				<div className="card-body text-left h-[600px] font-medium text-gray-700">
					<h2 className="card-title mx-auto">{college.college_name}</h2>
					<p>
						<span className="card-subtitle">Admission Dates:</span>
						{college.admission_dates}
					</p>
					<h3>
						<span className="card-subtitle">Events:</span>
					</h3>
					<ul>
						{college.events.map((event, index) => (
							<li key={index}>
								<strong className="text-gray-700">{event.event_name}</strong> -{' '}
								<span className="event-date">{event.date}</span>
							</li>
						))}
					</ul>
					<p>
						<span className="card-subtitle text-justify">
							Research History:
						</span>
						{college.research_history}
					</p>
					<h3>
						<span className="card-subtitle">Sports:</span>
					</h3>
					<ul className="">
						{college.sports.map((sport, index) => (
							<li key={index}>{sport}</li>
						))}
					</ul>
				</div>
				<div className="">
					<Link to={`/college/${college.college_name}`}>
						<button className="btn bg-blue-400 w-full rounded-none rounded-b-lg">
							Details
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CollegeCard;
