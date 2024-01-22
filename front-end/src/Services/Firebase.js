import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    // sendPasswordResetEmail,
    // sendEmailVerification,
  } from "firebase/auth";

//   import {
//     getFirestore,
//     query,
//     getDocs,
//     collection,
//     where,
//     addDoc,
//   } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
auth.useDeviceLanguage();
// // Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    signInWithPopup(auth, googleProvider).then((res) => {
        const loggedInUser = res;
        console.log(loggedInUser)
        // const isNewUser = getAdditionalUserInfo(res).isNewUser;
  
        // if (isNewUser) {
        //   //delete user if the user is not in our database, regardless of signing in with Google
        //   loggedInUser.delete().then(() => {
        //     signOut().then(() => {
        //       console.log("Signed Out!");
        //       alert("Please Sign Up First!!");
        //     });
        //   });
        // }
      });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error(error);
  }
};

// const logInWithEmailAndPassword = async (email, password) => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

// const registerWithEmailAndPassword = async (email, password) => {
//   try {
//     const res = await createUserWithEmailAndPassword(auth, email, password);
//     const user = res.user;
//     await addDoc(collection(db, "users"), {
//       uid: user.uid,
//       authProvider: "local",
//       email,
//     });
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

// const sendPasswordReset = async (email) => {
//   try {
//     await sendPasswordResetEmail(auth, email);
//     alert("Password reset link sent!");
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

export {
  auth,
//   db,
  signInWithGoogle,
//   logInWithEmailAndPassword,
//   registerWithEmailAndPassword,
//   sendPasswordReset,
  logOut,
};
