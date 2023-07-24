import Swal from "sweetalert2";

export const saveUser = (user) => {
	const currentUser = {
		name: user.displayName,
		email: user.email,
		
	};
	console.log(currentUser);

	fetch(`http://localhost:5000/users`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(currentUser),
	})
		.then((res) => res.json())
		.then((data) => {
			if (data.insertedId) {
				Swal.fire({
					position: 'top-center',
					icon: 'success',
					title: 'User created successfully.',
					showConfirmButton: false,
					timer: 1500,
				});
			}
		})
		.catch((error) => console.log(error));
};


export const saveGoogleUser = (user) => {
	const currentUser = {
		name: user.displayName,
		email: user.email,
	};
	// console.log(currentUser);
	fetch(`http://localhost:5000/users/${user?.email}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(currentUser),
	})
		.then((res) => res.json())
		.then((data) => {
			if (data.upsertedId) {
				Swal.fire({
					position: 'top-center',
					icon: 'success',
					title: 'User created successfully.',
					showConfirmButton: false,
					timer: 1500,
				});
			}
		})
		.catch((error) => console.log(error));
};