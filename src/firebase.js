import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyA1kvFzMWspjfM7rkhf5QLV_MUmCno1h8Q",
	authDomain: "testchat-bd934.firebaseapp.com",
	projectId: "testchat-bd934",
	storageBucket: "testchat-bd934.appspot.com",
	messagingSenderId: "216492818076",
	appId: "1:216492818076:web:2ebf965d9eb2aee46fb759"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
