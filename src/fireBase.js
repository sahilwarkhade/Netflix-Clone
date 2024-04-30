// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from "firebase/auth";
import { getFirestore,addDoc,collection } from "firebase/firestore";
import { toast } from "react-toastify";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQKhG6pq8lJkq4AdM28c_qOSCfc-uLEj0",
  authDomain: "netflix-clone-831c7.firebaseapp.com",
  projectId: "netflix-clone-831c7",
  storageBucket: "netflix-clone-831c7.appspot.com",
  messagingSenderId: "409058231766",
  appId: "1:409058231766:web:624f0193d1b67409685077"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app);

const db=getFirestore(app);

const signup=async(name , email, password)=>{
    try {
        const response=await createUserWithEmailAndPassword(auth,email,password);
        const user=response.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name:name,
            authProvider:"local",
            email:email,
        })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}


const login=async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const logout=async()=>{
    signOut(auth);
}


export {auth,db,login,signup,logout};