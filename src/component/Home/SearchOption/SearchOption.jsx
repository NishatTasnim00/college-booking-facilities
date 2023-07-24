import axios from 'axios';
import { useEffect, useState } from 'react';
import { FcSearch } from 'react-icons/fc';
const SearchOption = () => {
	const [searchText, setSearchText] = useState('');
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
		useEffect(() => {
			axios
				.get(`${import.meta.env.VITE_API_URL}/search/${searchText}`)
				.then((res) => {
					console.log(res);
					setCollege(res.data);
					setError('');
					if (!res.data) {
						setCollege(null);
						setError('College not found!');
					}
				})
				.catch((err) => console.log(err));
		}, [searchText]);
	};

	return (
		<div className="w-full">
			<div className="form-control w-4/12 mx-auto relative mb-10">
				<input
					value={searchText}
					onChange={handleText}
					type="text"
					placeholder="Search"
					className="input input-bordered w-24 md:w-auto"
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
					<figure className="px-10 pt-10 h-64 bg-black">
						<img
							src={college?.college_image}
							alt={college?.college_name}
							className="rounded-xl"
						/>
					</figure>
					<div className="card-body text-left">
						<h2 className="card-title mx-auto py-5">{college?.college_name}</h2>
						<p>
							<span className="card-title">Admission Dates: </span>
							<span className="date-text">{college?.admission_dates}</span>
						</p>
						<h3>
							<span className="card-title">Events:</span>
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
							<span className="card-title">Research History:</span>
							{college?.research_history}
						</p>
						<h3>
							<span className="card-title">Sports:</span>
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
