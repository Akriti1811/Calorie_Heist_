import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// firebase config
const config = {
  apiKey: "AIzaSyB2uGLtksOUnV2l1GLZPrfrSqT8HhLNFZQ",
  authDomain: "calorieheist.firebaseapp.com",
  projectId: "calorieheist",
  messagingSenderId: "82357699180",
  appId: "1:82357699180:web:ec03a154552a8bad1e4e49",
};
// initialize firebase app
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
// export
// export default firebase;
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();