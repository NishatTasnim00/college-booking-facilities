import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Provider/AuthProvider';
import EditProfileModal from './EditProfileModal';
import { toast } from 'react-hot-toast';
// import EditProfileModal from './EditProfileModal';

const Profile = () => {
	const { user } = useContext(AuthContext);
	const [profile, setProfile] = useState(null);
	const [showEditModal, setShowEditModal] = useState(false);
	// console.log(profile);
	useEffect(() => {
		axios
			.get(`${import.meta.env.VITE_API_URL}/profile/${user.email}`)
			.then((res) => setProfile(res.data))
			.catch((err) => console.log(err));
	}, [user.email]);

	const handleEditClick = () => {
		setShowEditModal(true);
	};

	const handleEditClose = () => {
		setShowEditModal(false);
	};

	const handleEditSave = (editedProfile) => {
		axios
			.put(
				`${import.meta.env.VITE_API_URL}/updateProfile/${profile._id}`,
				editedProfile
			)
			.then((res) => {
				console.log(res);
				// setProfile(editedProfile);
				if (res.data.acknowledged) {
					toast.success('Profile updated successfully!');

					// alert('Profile updated successfully!');
				}
			})
			.catch((err) => console.log(err));
	};
	return (
		<div>
			{profile && (
				<div className="card space-y-4 pt-12">
					<figure className="mx-auto  h-40 w-40 rounded-full">
						<img
							src={profile?.image}
							alt={profile?.name}
							className="h-40 w-40 rounded-full"
						/>
					</figure>
					<div className=" items-center text-center space-y-2 font font-semibold text-lg">
						<h2 className="card-subtitle mx-auto">{profile?.name}</h2>
						<p>
							{profile?.subject}, {profile?.college_name}
						</p>
						<p>Email: {profile?.email}</p>
						<p>Phone: {profile?.phone}</p>
						<p>Address: {profile?.address}</p>
						<p>Date of Birth: {profile?.dob}</p>
						{/* <p>College Name: {profile?.college_name}</p> */}

						<div className="card-actions"></div>
						<div className="flex justify-center">
							<button
								className="btn btn-neutral  mt-7 px-10"
								onClick={handleEditClick}
							>
								Edit
							</button>
						</div>
					</div>
				</div>
			)}
			<EditProfileModal
				profile={profile}
				show={showEditModal}
				onClose={handleEditClose}
				onSave={handleEditSave}
			></EditProfileModal>
		</div>
	);
};

export default Profile;
