import axios from 'axios';
import { useEffect, useState } from 'react';
import { FcSearch } from 'react-icons/fc';
const SearchOption = () => {
	const [searchText, setSearchText] = useState("");
	const [college, setCollege] = useState(null);
	const [error, setError] = useState(null);
	console.log(college);
	console.log(error);

	console.log(searchText);
	const handleText = (event) => {
		const newText = event.target.value;
		setSearchText(newText);
	};
	const handleSearch = () => {
		axios
			.get(`${import.meta.env.VITE_API_URL}/search/${searchText}`)
			.then((res) => {
				console.log(res);
				setCollege(res.data);
				setError('');
				setSearchText("");
				if (!res.data) {
					setCollege(null);
					setError('College not found!');
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="w-full">
			<div className="form-control lg:w-4/12 mx-auto relative mb-10">
				<input
					value={searchText}
					onChange={handleText}
					type="text"
					placeholder="Search"
					className="input input-bordered"
				/>
				<button
					className="btn absolute top-0 right-0  w-2/12 h-full bg-gray-100 rounded-r-lg rounded-none"
					onClick={handleSearch}
				>
					<FcSearch size={28} className="mx-auto" />
				</button>
			</div>

			{college && (
				<div className="card w-10/12 bg-base-100 shadow-xl mx-auto">
					<figure className="h-72 w-8/12 mx-auto mt-10">
						<img
							className="h-72 w-6/12 rounded-xl absolute object-cover"
							src={college?.college_image}
							alt={college?.college_name}
						/>
					</figure>
					<div className="card-body text-left">
						<h2 className="card-title mx-auto py-5">
							{college?.college_name}
						</h2>
						<p>
							<span className="card-subtitle">Admission Dates: </span>
							<span className="date-text">{college?.admission_dates}</span>
						</p>
						<h3>
							<span className="card-subtitle">Events:</span>
						</h3>
						<ul>
							{college?.events?.map((event, index) => (
								<li key={index}>
									<strong>{event.event_name}</strong> -
									<span className="date-text">{event.date}</span>
									<br />
									{event.description}
								</li>
							))}
						</ul>
						<p>
							<span className="card-subtitle">Research History:</span>
							{college?.research_history}
						</p>
						<h3>
							<span className="card-subtitle">Sports:</span>
						</h3>
						<ul>
							{college?.sports?.map((sport, index) => (
								<li key={index}>{sport} </li>
							))}
						</ul>
					</div>
				</div>
			)}
			{error && (
				<div>
					<h1 className="text-center font-bold text-3xl">{error}</h1>
				</div>
			)}
		</div>
	);
};

export default SearchOption;
