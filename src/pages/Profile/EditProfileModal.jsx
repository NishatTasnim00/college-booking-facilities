import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';


const EditProfileModal = ({ show, profile, onClose, onSave }) => {
    // console.log(profile);
    const{user} =useContext(AuthContext)
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
		// onSave(editedProfile);
		// onClose();
	};

    const onSubmit = (data)=>{
    
        console.log(data);
        const editedProfile = {
            
name : data.name  profile.name

subject : 
"CSE"
college_name
"Harvard University"
email
"nish6@gmail.com"
phone
"+8801308024634"
address
"Bangladesh"
dob
"1997-09-23"
image
"https://i.ibb.c
        }
        onSave(editedProfile);
    };
	return (
		<div
			className={`fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center ${
				show ? 'block' : 'hidden'
			}`}
		>
			<div className="bg-white p-6 rounded-md shadow-md ">
				<h2 className="font-bolt text-3xl py-4 text-blue-400 text-center">
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
								
							/>
						</div>

						<div className="w-full px-5 relative">
							<label className="label">
								<span className="text-add-class">Image</span>
							</label>
							<div className="input input-bordered w-full relative overflow-x-hidden">
								<input
									className="opacity-100 top-2 absolute "
									{...register('image')}
									type="file"
									accept="image/*"
									placeholder="Image"
									
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
								defaultValue={profile?.college_name}
								
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
								
							/>
						</div>
					</div>

					<div className="w-full p-5 flex justify-evenly">
						<button className="w-2/6 btn bg-blue-400" onClick={handleSave}>
							Save
						</button>
						<button className="w-2/6 btn bg-red-500" onClick={onClose}>
							Cancel
						</button>
					</div>
				</form>
				{/*  */}
			</div>
		</div>
	);
};

export default EditProfileModal;
