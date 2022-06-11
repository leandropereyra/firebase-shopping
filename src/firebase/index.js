// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getMessaging, getToken } from "firebase/messaging";
import { getFirestore } from "firebase/firestore";

// const vapidKey = "BBzED74iSo_GqwCJiu9Ni5aPjnppNg5EbjAbrlV1mKhDj_LzD04HpnF694R-FtIZi3BP2rivB6et0P7rIiX-ZXA"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAqTuEdp8T7mj3GVKYKafWshwy7pNru64",
  authDomain: "fir-shopping-ae027.firebaseapp.com",
  projectId: "fir-shopping-ae027",
  storageBucket: "fir-shopping-ae027.appspot.com",
  messagingSenderId: "426787330823",
  appId: "1:426787330823:web:4a984203b492ca853b03a2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging();
getToken(messaging, {
  vapidKey:
    "BBzED74iSo_GqwCJiu9Ni5aPjnppNg5EbjAbrlV1mKhDj_LzD04HpnF694R-FtIZi3BP2rivB6et0P7rIiX-ZXA",
})
  .then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
      // console.log('CurrentToken: ', currentToken);
      sendTokenToServer(currentToken);
    } else {
      // Show permission request UI
      console.log(
        "No registration token available. Request permission to generate one."
      );
      // ...
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
    // ...
  });

const sendTokenToServer = (token) => {
  //para que se almacene una sola vez por cliente
  if (localStorage.getItem("tokenSentToServer")) return;
  //Else:
  localStorage.setItem("tokenSentToServer", "1");
};

// currentToken="eO9dIA5Bd6WWTx5QWKMsMA:APA91bHlZIvxvVm5eJavsXaksFQE6PgzouP_7jiUfQlxzxfJlVaiKkTODfcD7uun0YB-AKkhvfdtA1jFtBaFK66QHEexf3ZmQYczIkbcUT-wmHgBt3igRpGJhM_2Iwrv2KS-UDN95mUG"

//Base de datos FireStore
export const db = getFirestore();
