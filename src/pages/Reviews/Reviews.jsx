import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import ReviewCard from './ReviewCard';


import { MdOutlineRateReview } from 'react-icons/md';
import bg from '../../assets/review.jpg';

const Reviews = () => {
    const {
			data: collegesData = [],
			isLoading,
			refetch,
		} = useQuery({
			queryKey: ['collegesData'],
			// enabled:!loading,
			queryFn: async () => {
				const result = await axios.get(
					`${import.meta.env.VITE_API_URL}/colleges`
				);
				return result.data;
			},
		});
        // console.log(collegesData);

       const reviews = [];
				collegesData.forEach((college) => {
					reviews.push(...college.reviews);
				});
				console.log(reviews);


				 const settings = {
						dots: true,
						infinite: true,
						speed: 500,
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: true,
					};
    return (
			<div>
				<h1 className="font-bold text-5xl pb-20 pt-5 text-center text-blue-500 uppercase">
					testimonial
				</h1>

				<div
					className=" bg-cover"
					style={{
						backgroundImage: `url(${bg})`,
					}}
				>
					<div className="bg-black opacity-80 ">
						<div className="w-10/12 lg:w-11/12 mx-auto">
							<Slider {...settings}>
								{reviews?.map((review) => (
									<div className="lg:h-96 px-2 py-5 lg:py-0 lg:pt-24">
										<div className="lg:w-4/12 mx-auto text-center text-white space-y-8">
											{/* <h1 className=" font-semibold text-4xl">{college_name}</h1> */}
											<div className="flex justify-center  bg-black">
												<MdOutlineRateReview size={28} color="white" />
											</div>
											<p className="mx-auto">
												"{review?.review}"
												<span className="font-thin text-slate-500 text-sm">
													-- {review.name}
												</span>
											</p>
										</div>
									</div>
								))}
							</Slider>
						</div>
					</div>
				</div>
			</div>
		);
};

export default Reviews;