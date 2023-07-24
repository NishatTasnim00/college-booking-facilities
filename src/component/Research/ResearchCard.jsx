// import React from 'react';

// const ResearchCard = ({research}) => {
//     const{link, researchTopic, researcher, publishDate} = research;
//     console.log(research);
//     return (
// 			<div className="">
// 				<h1>{researchTopic}</h1>
// 				<p>{researcher}</p>
// 				<p>{publishDate}</p>
// 			</div>
// 		);
// };

// export default ResearchCard;



import React from 'react';

const formatOrdinal = (day) => {
	const j = day % 10;
	const k = day % 100;
	if (j === 1 && k !== 11) {
		return day + 'st';
	}
	if (j === 2 && k !== 12) {
		return day + 'nd';
	}
	if (j === 3 && k !== 13) {
		return day + 'rd';
	}
	return day + 'th';
};

const formatDate = (dateString) => {
	const date = new Date(dateString);
	const day = formatOrdinal(date.getDate());
	const month = date.toLocaleString('default', { month: 'long' });
	const year = date.getFullYear();
	return `${day} ${month}, ${year}`;
};

const RecommendedResearchPapers = ({ research }) => {
	    const{link, researchTopic, researcher, publishDate} = research;

	return (
		<div>
			<ul className="list-disc pl-8">
				<h3 className="text-lg font-bold">
					<a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-600 hover:underline cursor-pointer"
					>
						{researchTopic}
					</a>
					<span className="font-thin text-slate-500 text-sm gap-5">
						  ~{researcher}({formatDate(publishDate)})
					</span>
				</h3>

				{/* <p className="text-sm">Author: {researcher}</p> */}
			</ul>
		</div>
	);
};

export default RecommendedResearchPapers;
