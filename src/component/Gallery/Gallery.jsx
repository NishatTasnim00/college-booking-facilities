import React from 'react';

const Gallery = () => {
	// Sample image URLs (Replace these with your actual image URLs)
	const imageUrls = [
		'https://i.ibb.co/dphhnvD/image1.jpg',
		'https://i.ibb.co/0n4B0tJ/image2.jpg',
		'https://i.ibb.co/LYKYx63/images-3.jpg',
		'https://i.ibb.co/x2VFn98/images-4.jpg',
		'https://i.ibb.co/yX9Cd5C/images-5.jpg',
		'https://i.ibb.co/GQLjsb1/images-6.jpg',
		'https://i.ibb.co/crSyxr5/Grad2018-1-Web700-1024x683-1-678x381.jpg',
		'https://i.ibb.co/6mH2BfL/52279174972-acdcd85d69-o.jpg',
		'https://i.ibb.co/84G741g/Oxford-University-Graduation.jpg',
	];

	return (
		<div>
			<h1 className="font-bold text-5xl pb-20 pt-5 text-center text-blue-500 uppercase">
				Gallery
			</h1>
			<div className="grid lg:grid-cols-3 gap-4">
				{imageUrls.map((url, index) => (
					<div key={index} className="w-full h-48 rounded-lg overflow-hidden">
						<img
							src={url}
							alt={`Image ${index + 1}`}
							className="w-full h-full object-cover"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Gallery;
