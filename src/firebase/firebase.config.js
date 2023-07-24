// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyA9byiElkpus3XEPdHbeMvBwO2gf8h_Oik',
	authDomain: 'collegebookingfacilities.firebaseapp.com',
	projectId: 'collegebookingfacilities',
	storageBucket: 'collegebookingfacilities.appspot.com',
	messagingSenderId: '387380324639',
	appId: '1:387380324639:web:2926fef3469c9e489a682a',
	measurementId: 'G-63LQF0VWDZ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;