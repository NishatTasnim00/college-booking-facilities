import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Provider/AuthProvider';
import EditProfileModal from './EditProfileModal';
// import EditProfileModal from './EditProfileModal';

const Profile = () => {
	const { user } = useContext(AuthContext);
	const [profile, setProfile] = useState(null);
	const [showEditModal, setShowEditModal] = useState(false);
    console.log(showEditModal);

	useEffect(() => {
		axios
			.get(`http://localhost:5000/profile/${user.email}`)
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
		// axios
		// 	.put(`http://localhost:5000/profile/${user.email}`, editedProfile)
		// 	.then((res) => {
		// 		setProfile(editedProfile);
		// 	})
		// 	.catch((err) => console.log(err));
	};
	return (
		<div>
			{profile && (
				<div className="card space-y-4">
					<figure className="mx-auto  h-40 w-40 rounded-full">
						<img
							src={profile?.image}
							alt={profile?.name}
							className="h-40 w-40 rounded-full"
						/>
					</figure>
					<div className=" items-center text-left">
						<h2 className="card-title mx-auto">{profile?.name}</h2>
						<p>College Name: {profile?.college_name}</p>
						<p>Subject: {profile?.subject}</p>
						<p>Email: {profile?.email}</p>
						<p>Phone: {profile?.phone}</p>
						<p>Address: {profile?.address}</p>
						<p>Date of Birth: {profile?.dob}</p>
						<div className="card-actions"></div>
						<button className="btn btn-neutral px-8" onClick={handleEditClick}>
							Edit
						</button>
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
