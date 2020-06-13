import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB3vr4FJnQPQ3Yet69bmmxR5HURROiaUOE",
    authDomain: "ecommerce-ac6e6.firebaseapp.com",
    databaseURL: "https://ecommerce-ac6e6.firebaseio.com",
    projectId: "ecommerce-ac6e6",
    storageBucket: "ecommerce-ac6e6.appspot.com",
    messagingSenderId: "534470470097",
    appId: "1:534470470097:web:6c81e2a61ce6cc386f18f0",
    measurementId: "G-SRYKJZNFPG"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async(userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get()

	if(!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})

		} catch (error) {
			console.log('erro ao criar usuario', error.message);

		}
	}
	return userRef;

};


export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();
	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj)
	});

	return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollection = collections.docs.map(doc => {
		const { title, items } = doc.data();

		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items
		}
	});

	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	} , {});
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;