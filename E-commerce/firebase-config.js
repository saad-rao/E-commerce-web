// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
// import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyD6-QEATIUr2QWdZcMxGw_s01Pa7p9P5-M",
    authDomain: "e-commerce-d0044.firebaseapp.com",
    projectId: "e-commerce-d0044",
    storageBucket: "e-commerce-d0044.firebasestorage.app",
    messagingSenderId: "7255847825",
    appId: "1:7255847825:web:2177a2639d68230f282030",
    measurementId: "G-JZHJ7LKX73"
  };
  
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// export { auth, db };

firebase.initializeApp(firebaseConfig)