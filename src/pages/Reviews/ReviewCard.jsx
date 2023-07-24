import React from 'react';
import {MdOutlineRateReview} from 'react-icons/md'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bg from "../../assets/review.jpg"


const ReviewCard = ({college}) => {
    // console.log(college);
    const {college_name, reviews} = college;
	 const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
		};
    return (
			<div
				className=" bg-cover"
				style={{
					backgroundImage: `url(${bg})`,
				}}
			>
				<div className="bg-black opacity-80 ">
					<div className="w-11/12 mx-auto">
						<Slider {...settings}>
							{reviews?.map((review) => (
								<div className="h-96 pt-24">
									<div className="w-4/12 mx-auto text-center text-white space-y-8">
										<h1 className=" font-semibold text-4xl">
											{college_name}
										</h1>
										<div className='flex justify-center  bg-black'>
											<MdOutlineRateReview size={40} color="blue" />
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
		);
};

export default ReviewCard;