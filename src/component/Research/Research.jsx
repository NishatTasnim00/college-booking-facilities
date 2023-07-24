import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import ResearchCard from './ResearchCard';

const Research = () => {


    const {
			data: researchesData = [],
			isLoading,
			refetch,
		} = useQuery({
			queryKey: ['researchesData'],
			// enabled:!loading,
			queryKey: ['researchesData'],
			queryFn: async () => {
				const result = await axios.get('http://localhost:5000/research');
				return result.data;
			},
		});
        // console.log(researchesData);
    return (
			<div className='w-11/12'>
				<h2 className="text-2xl font-bold mb-4">Research Papers</h2>
				{researchesData.map((research) => (
					<ResearchCard research={research}></ResearchCard>
				))}
			</div>
		);
};

export default Research;