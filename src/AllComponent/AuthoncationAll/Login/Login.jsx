
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css"
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";

const Login = () => {

    let { loginUser, githubLogin, googleLogin } = useContext(AuthContext)

    let [success, setSuccess] = useState("")
    let [error, setError] = useState("")
    let navigate = useNavigate()
    let location = useLocation()
    let stateInfo = location.state?.from.pathname || "/"

    let gitProvider = new GithubAuthProvider();
    let googleProvider = new GoogleAuthProvider();

    let handleInputData = (event) => {
        setSuccess("")
        setError("")
        event.preventDefault()
        let emailValue = event.target.email.value
        let passwordValue = event.target.password.value
        //console.log(passwordValue, emailValue)

        loginUser(emailValue, passwordValue)
            .then(result => {
                let user = result.user
                setSuccess("Your Login Successfully")
                navigate(stateInfo)
                event.target.reset()
            })
            .then(error => {
                setError(error.message)
            })
    }

    // // github login
    let handleGithubLogin = () => {

        githubLogin(gitProvider)
            .then(result => {
                let gitUser = result.user
                setSuccess(" Your SingUp Github Successfully ")
                let saveUser = { name: gitUser.displayName, photo: gitUser.photoURL, email: gitUser.email,title:"Please Enter Your Jobs Title",bio:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas tempora sequi voluptates, saepe illo hic esse maxime consectetur quidem nesciunt?",role : "user" }
                fetch("https://pdf-c772ot0zs-projectkamrul-gmailcom.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        //console.log(data)
                        if (data.insertedId) {
                            alert("Your Github ,,,,,,,,,,,,,,,,,, Complete")
                            navigate("/")
                        }
                        else {
                            alert("Already existing user")
                            navigate("/")
                        }
                    })
            })
            .catch(error => {
                setError(error.message)
            })
    }

    // // google login
    let handleGoogleLogin = () => {

        googleLogin(googleProvider)
            .then(result => {
                setSuccess(" Your SingUp Google Successfully ")
                let googleUser = result.user
                let saveUser = { name: googleUser.displayName, photo: googleUser.photoURL, email: googleUser.email ,title:"Please Enter Your Jobs Title",bio:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas tempora sequi voluptates, saepe illo hic esse maxime consectetur quidem nesciunt?", role : "user"}
                fetch("https://pdf-c772ot0zs-projectkamrul-gmailcom.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Your Google Login Complete',
                                showConfirmButton: false,
                                timer: 1500
                              })
                            navigate("/")
                        }
                        else {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Your are Previous user ',
                                showConfirmButton: false,
                                timer: 1500
                              })
                            navigate("/")
                        }
                    })
               
            })
            .catch(error => {
                setError(error.message)
            })
    }


    return (


        <div className='Login  bg-slate-400'>

            



            <div className="hero min-h-screen ">

                <div className="hero-content logoBackground w-full my-20">

                    <div className="card-colors card flex-shrink-0 w-full max-w-sm shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-3xl text-center text-white font-bold">Login Now</h1>
                            <form onSubmit={handleInputData}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered input-accent w-full max-w-xs" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered input-accent w-full max-w-xs" />
                                    <label className="label">
                                        <a href="#" className="text-white label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <h2 className='text-red-500'>{error}</h2>
                                <h2 className='text-green-500'>{success}</h2>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </div>
                            </form>


                            <div className="others mt-4">

                                <h2 className="text-white">log in with</h2>
                                <div className="icon py-4">
                                    <i class="fa fa-facebook" aria-hidden="true"></i>
                                    <button className="loginBtn" onClick={handleGithubLogin}>
                                        <i class="fa mx-4 fa-github" aria-hidden="true"></i>
                                    </button>
                                    <button className="loginBtn" onClick={handleGoogleLogin}>
                                        <i class="fa fa-google" aria-hidden="true"></i>
                                    </button>
                                </div>
                                <h3 className="text-white">You are not signing yet? <span><Link to="/singUp">Sign Up</Link></span></h3>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Login;