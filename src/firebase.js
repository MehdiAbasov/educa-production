// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import Toast, { toast } from "react-hot-toast";
import { userHandle } from "utils";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFqpGRAObJqxuThaD0YeJqgb-GTJC94YU",
    authDomain: "mehdiabasov-instagram.firebaseapp.com",
    projectId: "mehdiabasov-instagram",
    storageBucket: "mehdiabasov-instagram.appspot.com",
    messagingSenderId: "655951686194",
    appId: "1:655951686194:web:98a11251028e417f192a2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

onAuthStateChanged(auth, user => {
    if (user) {
        userHandle(user)
    } else {
        userHandle(false)
    }
})

export const login = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password)
        console.log(response.user)
    } catch (err) {
        toast.error(err.code)
    }
}

export const logout = async () => {
 try{
   await signOut(auth) 
 }catch(err){
    toast.error(err.code)
 } 

} 