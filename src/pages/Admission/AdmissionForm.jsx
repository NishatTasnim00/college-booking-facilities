import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AdmissionForm = () => {
   const { college_name } = useParams();
		console.log(college_name);
	const { user } = useContext(AuthContext);
    // console.log(user);
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (newData) => {

		// Image Upload
		const image = newData.image[0];
		const formData = new FormData();
		formData.append('image', image);
		const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`;

		axios
			.post(url, formData)
			.then((imageData) => {
				// console.log(imageData);
				if (imageData.data.success) {
					const imageUrl = imageData.data.data.url;
					const {
						name,
						subject,
						email,
						phone,
						address,
                        dob
					} = newData;
					const candidate = {
						name,
						subject,
                        college_name,
						email,
						phone,
						address,
                        dob,
						image: imageUrl,
					};
					// console.log(imageUrl);
					console.log(candidate);
					axios
						.post(`${import.meta.env.VITE_API_URL}/candidate`, candidate)
						.then((result) => {
							// console.log(candidate);
							if (result.data.insertedId) {
								Swal.fire({
									title: 'Welcome!',
									text: 'candidate added successfully!',
									icon: 'success',
									buttons: false,
									className: 'text-red-800',
									closeModal: false,
									timer: 1500,
								});
								navigate('/admission');
							}
						});
				}
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	return (
		<div className="w-full">
			<form onSubmit={handleSubmit(onSubmit)} className="w-3/5 mx-auto">
				{errors.exampleRequired && <span>This field is required</span>}
				<div className="grid lg:grid-cols-2">
					<div className="w-full px-5">
						<label className="label">
							<span className="text-add-class">Candidate Name</span>
						</label>
						<input
							className="input input-bordered w-full capitalize"
							{...register('name')}
							placeholder="Candidate Name"
							required
						/>
					</div>

					<div className="w-full px-5 relative">
						<label className="label">
							<span className="text-add-class">Image</span>
						</label>
						<div className="input input-bordered w-full relative ">
							<input
								className="opacity-100 top-2 absolute"
								{...register('image')}
								type="file"
								accept="image/*"
								placeholder="Image"
								required
							/>
							<p className="py-[11px] rounded-none rounded-l-lg  z-10 top-0 absolute bg-slate-100 p-[7px]  left-0">
								Upload Image
							</p>
						</div>
					</div>

					<div className="w-full px-5">
						<label className="label">
							<span className="text-add-class">College Name</span>
						</label>
						<input
							className="input input-bordered w-full"
							{...register('college_name')}
							placeholder="College Name"
							value={college_name}
							required
						/>
					</div>

					<div className="w-full px-5">
						<label className="label">
							<span className="text-add-class">Subject</span>
						</label>
						<input
							className="input input-bordered w-full"
							{...register('subject')}
							placeholder="Subject"
							required
						/>
					</div>

					<div className="w-full px-5">
						<label className="label">
							<span className="text-add-class">Candidate Email</span>
						</label>
						<input
							className="input input-bordered w-full"
							{...register('email')}
							placeholder="Candidate Email"
							value={user.email}
							required
						/>
					</div>

					<div className="w-full px-5">
						<label className="label">
							<span className="text-add-class">Candidate Phone number</span>
						</label>
						<input
							className="input input-bordered w-full"
							{...register('phone')}
							placeholder="Candidate Phone number"
							type="tel"
							required
						/>
					</div>
					<div className="w-full px-5">
						<label className="label">
							<span className="text-add-class">Address</span>
						</label>
						<input
							className="input input-bordered w-full"
							{...register('address')}
							placeholder="Address"
							required
						/>
					</div>

					<div className="w-full px-5">
						<label className="label">
							<span className="text-add-class">Date of Birth</span>
						</label>
						<input
							className="input input-bordered w-full"
							{...register('dob')}
							placeholder="Date of Birth"
							type="date"
							required
						/>
					</div>
				</div>

				<div className="w-full p-5 ">
					<button type="submit" className="btn btn-block btn-primary">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default AdmissionForm;
