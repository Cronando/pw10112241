import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//  Comienza Firebase

    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "AIzaSyDWzM772sL49xukOfEQYsfo7f_BfYtGhN4",
    authDomain: "programacion-web-a23e0.firebaseapp.com",
    projectId: "programacion-web-a23e0",
    storageBucket: "programacion-web-a23e0.appspot.com",
    messagingSenderId: "953058760589",
    appId: "1:953058760589:web:1c2af64604c8655c5a4fc4"
    };

    // Initialize Firebase
    initializeApp(firebaseConfig);

//  Termina Firebase

const app = createApp(App)

app.use(router)

app.mount('#app')

