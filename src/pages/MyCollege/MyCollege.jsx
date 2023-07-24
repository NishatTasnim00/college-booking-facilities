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
				.get(`http://localhost:5000/myColleges/${email}`)
				.then((data) => setMyCollegesData(data.data));
 }, [email]);
    return <div>{myCollegesData.map((college)=>(
        <MyCollegesCard college={college}></MyCollegesCard>
    ))}</div>;
};

export default MyCollege;