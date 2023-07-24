import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import MyCollegesCard from './MyCollegesCard';

const MyCollege = () => {
    const [myCollegesData, setMyCollegesData] = useState([])
    // console.log(myCollegesData);
    const {user} = useContext(AuthContext)
    const email = user.email;
    // console.log(email);


 useEffect(() => {
		 axios
				.get(`${import.meta.env.VITE_API_URL}/myColleges/${email}`)
				.then((data) => setMyCollegesData(data.data));
 }, [email]);
			;
 
    return (
			<div>
				<h1 className="font-bold text-5xl pb-10 pt-5 text-center text-blue-500 uppercase">
					My College
				</h1>
				<div>
					{myCollegesData.map((college) => (
						<MyCollegesCard college={college}></MyCollegesCard>
					))}
				</div>
			</div>
		);
};

export default MyCollege;