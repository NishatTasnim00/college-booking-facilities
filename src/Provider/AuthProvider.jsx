import {
    GithubAuthProvider,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import axios from 'axios';
const auth = getAuth(app);

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({});
    // console.log(user);
	const [Loading, setLoading] = useState(true);

	const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const googleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

    const githubSignIn = () => {
			setLoading(true);
			return signInWithPopup(auth, githubProvider);
		};

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

    	const resetPass = (email) => {
				setLoading(true);
				return sendPasswordResetEmail(auth, email);
			};

	const updateUserProfile = (name, photo) => {
		setLoading(true);
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo,
		});
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			// console.log(currentUser);
			
		});
		return () => {
			unsubscribe();
		};
	}, []);

	const authInfo = {
		user,
		Loading,
		setLoading,
		createUser,
		signIn,
		googleSignIn,
        githubSignIn,
		logOut,
        resetPass,
		updateUserProfile,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
