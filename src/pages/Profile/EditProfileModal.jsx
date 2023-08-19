import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';

const EditProfileModal = ({ show, profile, onClose, onSave }) => {
	// console.log(profile);
	const { user } = useContext(AuthContext);
	const [editedProfile, setEditedProfile] = useState(profile);
	// const { name, subject, email, phone, address, dob } = profile;
	const handleChange = (event) => {
		const { name, value } = event.target;
		setEditedProfile({ ...editedProfile, [name]: value });
	};
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const handleSave = () => {
		onClose();
	};

	const onSubmit = (data) => {
		// console.log(data);
		const editedProfile = {
			name: data.name || profile.name,
			college_name: data.college_name || profile?.college_name,
			address: data.address || profile?.address,
			email: data.email || profile?.email,
		};
		onSave(editedProfile);
		onClose();

		console.log(editedProfile);
	};
	return (
		<div
			className={`fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center ${
				show ? 'block' : 'hidden'
			}`}
		>
			<div className="bg-white p-6 rounded-md shadow-md ">
				<h2 className="font-bolt text-3xl py-4 text-bg-blue-200 text-center">
					Edit Profile
				</h2>
				{/*  */}
				<form onSubmit={handleSubmit(onSubmit)} className=" mx-auto">
					<div className="grid lg:grid-cols-2">
						<div className="w-full px-5">
							<label className="label">
								<span className="text-add-class">Candidate Name</span>
							</label>
							<input
								className="input input-bordered w-full capitalize"
								{...register('name')}
								placeholder="Candidate Name"
								defaultValue={profile?.name}
							/>
						</div>

						<div className="w-full px-5">
							<label className="label">
								<span className="text-add-class">College Name</span>
							</label>
							<input
								className="input input-bordered w-full"
								{...register('college_name')}
								placeholder="College Name"
								defaultValue={profile?.college_name}
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
								defaultValue={profile?.email}
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
								defaultValue={profile?.address}
							/>
						</div>
					</div>
				</form>
				<div className="w-full p-5 flex justify-evenly">
					<button
						className="w-2/6 btn bg-blue-400"
						onClick={handleSubmit(onSubmit)}
					>
						Save
					</button>
					<button className="w-2/6 btn bg-red-500" onClick={onClose}>
						Cancel
					</button>
				</div>
				{/*  */}
			</div>
		</div>
	);
};

export default EditProfileModal;
