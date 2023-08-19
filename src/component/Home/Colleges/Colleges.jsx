import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import CollegeCard from '../CollegeCard/CollegeCard';

const Colleges = () => {
	const {
		data: collegesData = [],
		isLoading,
		refetch,
	} = useQuery({
		// enabled:!loading,
		queryKey: ['collegesData'],
		queryFn: async () => {
			const result = await axios.get(
				`${import.meta.env.VITE_API_URL}/colleges`
			);
			return result.data;
		},
	});
	// console.log(collegesData);
     
	return (
		<>
			<h1 className="font-bold text-5xl pt-5 text-center text-blue-500 uppercase">
				colleges
			</h1>
			<div className="grid lg:grid-cols-3 gap-5 mx-auto">
				{collegesData.slice(0, 3).map((college, i) => (
					<CollegeCard college={college} key={college.id}></CollegeCard>
				))}
			</div>
		</>
	);
};

export default Colleges;
