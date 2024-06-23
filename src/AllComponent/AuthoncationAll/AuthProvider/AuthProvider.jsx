


import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firevase/Firebase.config';
import { v4 as uuid } from 'uuid';
export let AuthContext = createContext()

let AuthProvider = ({ children }) => {

    
    let [user, setUser] = useState(null)
    let [loading, setLoading] = useState(true)
    let auth = getAuth(app)


    // console.log(user)

    // singUP function 
    let createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // observed user
    useEffect(() => {
        let unSubscribe = onAuthStateChanged(auth, (observedUser => {
            setUser(observedUser)
            setLoading(false)
            // console.log(observedUser)

        }))
        return () => {
            unSubscribe()
        }
    }, [])

    // login user 
    let loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //logOut user
    let logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    // github aut 
    let githubLogin = (githubProvider) => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // github aut 
    let googleLogin = (githubProvider) => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    //Current Date
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = (day + "/" + month +  "/" + year);

//Order Id Number
const unique_id = uuid();
const orderId = unique_id.slice(0,8)
//console.log(orderId);

    let [first, setFirstName] =useState("")
    let [last, setLastNAme] =useState("")
    let [email, setEmail] =useState("")
    let [number, setNumber] =useState("")
    let [country, setCountry] =useState("")
    let [address, setAddress] =useState("")
    let [city, setCity] =useState("")
    let [postcode, setPostcode] =useState("")
    let [payment, setPayment] =useState("")
    let [testemail, setTestemail] = useState("")
    let [toggleMultiData, setToggleMultiData] = useState(true)
    let [secondOrderInfo, setSecondOrderInfo] = useState({})

    let [projectType, setProjectType] =useState("")
    let [about, setAbout] =useState("")
    let [questionOne, setQuestionOne] =useState("")
    let [questionTwo, setQuestionTwo] =useState("")
    let [questionThree, setQuestionThree] =useState("")
    let [questionFour, setQuestionFour] =useState("")
    let [driveLink, setDriveLink] =useState("")
    let [currDate, setCurrDate] =useState("")

   
   
    let AllData = {
        userName: user?.displayName,
        userEmail: user?.email,
        userImage: user?.photoURL,
        first,
        last,
        email,
        number,
        country,
        address,
        city,
        postcode,
        payment,
        projectType,
        about,
        questionOne,
        questionTwo,
        questionThree,
        questionFour,
        driveLink,
        orderId,
        currentDate,
        
    }

   // console.log(AllData)




    let [ast, setAst] = useState(true)

    //auth Info Provider
    let authInfo = {
        secondOrderInfo,
        toggleMultiData,
        testemail,
        user,
        createUser,
        loginUser,
        logOutUser,
        githubLogin,
        googleLogin,
        loading,

        setFirstName,
        setLastNAme,
        setEmail,
        setNumber,
        setCountry,
        setAddress,
        setCity,
        setPostcode,
        setPayment,
        setTestemail,
        setToggleMultiData,
        setSecondOrderInfo,
        setProjectType,
        setAbout,
        setQuestionOne,
        setQuestionTwo,
        setQuestionThree,
        setQuestionFour,
        setDriveLink,
        AllData,

        setAst,
        ast
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;