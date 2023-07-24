import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';

const RatingModal = ({ show, handleClose, college_name }) => {
	const [rating, setRating] = useState(0);
	const [review, setReview] = useState('');


	const { user } = useContext(AuthContext);

	const handleRatingChange = (event) => {
		const newRating = parseInt(event.target.value, 10);
		setRating(newRating);
	};
	const handleReviewChange = (event) => {
		const newReview = event.target.value;
		setReview(newReview);
	};

	const handleSave = () => {
		const reviews = {
			name: user.displayName,
			rating: rating,
			review: review,
		};
		console.log(reviews);
		axios
			.put(`${import.meta.env.VITE_API_URL}/review/${college_name}`, reviews)
			.then((result) => {
				if (result.data.modifiedCount) {
					alert('review added');
				}
			});
		setRating(0);
		setReview('');
		handleClose();
	};

	return (
		<div
			className={`fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center ${
				show ? 'block' : 'hidden'
			}`}
		>
			<div className="bg-white w-96 p-6 rounded-md shadow-md">
				<h2 className="text-xl font-bold mb-4">Rate this item</h2>
				<label className="block">
					Your Review:
					<textarea
						name="review"
						value={review}
						onChange={handleReviewChange}
						className="mt-2 block w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
					/>
				</label>
				<label className="block">
					Select Rating:
					<select
						value={rating}
						onChange={handleRatingChange}
						className="mt-2 block w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
					>
						<option value={0}>Select Rating</option>
						<option value={1}>1 star</option>
						<option value={2}>2 stars</option>
						<option value={3}>3 stars</option>
						<option value={4}>4 stars</option>
						<option value={5}>5 stars</option>
					</select>
				</label>
				<div className="mt-4 flex justify-end">
					<button
						onClick={handleClose}
						className="px-4 py-2 mr-2 text-white bg-gray-500 rounded-md"
					>
						Close
					</button>
					<button
						onClick={handleSave}
						className="px-4 py-2 text-white bg-blue-500 rounded-md"
					>
						Save
					</button>
				</div>
			</div>
		</div>
	);
};

export default RatingModal;