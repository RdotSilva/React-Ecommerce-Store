import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyB5rrv4ghTk7WWfM_FIijkpTcqGsnubk34",
	authDomain: "ecommerce-db-e666d.firebaseapp.com",
	databaseURL: "https://ecommerce-db-e666d.firebaseio.com",
	projectId: "ecommerce-db-e666d",
	storageBucket: "",
	messagingSenderId: "392590566883",
	appId: "1:392590566883:web:913f90f8c9b2b4ab"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
	}
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
