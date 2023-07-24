import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import RatingModal from './RatingModal';

const MyCollegesCard = ({ college }) => {
	// console.log(college);
	const {
		id,
		college_image,
		college_name,
		admission_dates,
		events,
		research_history,
		sports,
	} = college;

      const [showModal, setShowModal] = useState(false);

			const handleShowModal = () => {
				setShowModal(true);
			};

			const handleCloseModal = () => {
				setShowModal(false);
			};
	return (
		<div>
			<div className="card w-10/12 bg-base-100 shadow-xl mx-auto">
				<figure className="h-72 w-8/12 mx-auto mt-10">
					<img
						className="h-72 w-6/12 rounded-xl absolute object-cover"
						src={college_image}
						alt={college_name}
					/>
				</figure>
				<div className="card-body text-left">
					<h2 className="card-title mx-auto py-5">{college_name}</h2>
					<p>
						<span className="card-title">Admission Dates: </span>
						<span className="date-text">{admission_dates}</span>
					</p>
					<h3>
						<span className="card-title">Events:</span>
					</h3>
					<ul>
						{events?.map((event, index) => (
							<li key={index}>
								<strong>{event.event_name}</strong> -
								<span className="date-text">{event.date}</span>
								<br />
								{event.description}
							</li>
						))}
					</ul>
					<p>
						<span className="card-title">Research History:</span>
						{research_history}
					</p>
					<h3>
						<span className="card-title">Sports:</span>
					</h3>
					<ul>
						{sports?.map((sport, index) => (
							<li key={index}>{sport} </li>
						))}
					</ul>
				</div>

				<div>
					{/* Your main content */}
					<button
						className="btn bg-sky-200 w-full rounded-none rounded-b-lg"
						onClick={handleShowModal}
					>
						Open Rating Modal
					</button>

					{/* Render the RatingModal component */}
					<RatingModal
						show={showModal}
						handleClose={handleCloseModal}
						college_name={college_name}
					/>
				</div>
			</div>
		</div>
	);
};

export default MyCollegesCard;
