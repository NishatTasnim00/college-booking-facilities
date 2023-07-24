import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import CollegeCard from './CollegeCard';

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
	if (isLoading) {
		return <div>Loading...</div>;
	}
	return (
		<div className="">
			<h1 className="font-bold text-5xl pb-20 pt-5 text-center text-blue-500 uppercase">
				Colleges at a glance
			</h1>
			<div className="grid grid-cols-3 gap-5 mx-auto">
				{collegesData.map((college, i) => (
					<CollegeCard college={college} key={college.id}></CollegeCard>
				))}
			</div>
		</div>
	);
};

export default Colleges;
