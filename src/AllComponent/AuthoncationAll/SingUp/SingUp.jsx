import React, { useContext, useState } from 'react';
import "./Singup.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2'
import { AuthContext } from '../AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, updateProfile } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';


const SingUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    // console.log(watch("example"));

    let { createUser, githubLogin, googleLogin, logOutUser } = useContext(AuthContext)
    let [success, setSuccess] = useState("")
    let [error, setError] = useState("")
    let navigate = useNavigate()

    let gitProvider = new GithubAuthProvider();
    let googleProvider = new GoogleAuthProvider();

    let onSubmit = (data) => {

        setError("")
        setSuccess("")
        let nameValue = data.name
        let emailValue = data.email
        let photoValue = data.photo
        let passwordValue = data.password
        let confirmPass = data.confirm

        if (passwordValue !== confirmPass) {
            setError("Please Meatch Your Password")
            return
        }

        createUser(emailValue, passwordValue)
            .then(result => {
                let createUser = result.user
                setSuccess(" Your SingUp Successfully ")
                //console.log(createUser)
                // user Update 
                updateProfile(createUser, { displayName: nameValue, photoURL: photoValue })
                    .then(() => {
                        let saveUser = { name: nameValue, photo: photoValue, email: createUser.email ,title:"Please Enter Your Jobs Title",bio:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas tempora sequi voluptates, saepe illo hic esse maxime consectetur quidem nesciunt?",role : "admin"}

                        // save user DB 
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
                                        title: 'Congratulation New user',
                                        showConfirmButton: false,
                                        timer: 1500
                                      })
                                }
                                logOutUser()
                                    .then(result => { navigate("/login") })
                                    .then(error => { })
                            })


                    })
                    .catch(error => {
                    })

            })
            .catch(error => {
                //console.log(error)
                setError(error.message)
            })
    }


    // ===========================================


    // github login
    let handleGithubLogin = () => {

        githubLogin(gitProvider)
            .then(result => {
                let gitUser = result.user
                //console.log(gitUser)
                setSuccess(" Your SingUp Github Successfully ")
                let saveUser = { name: gitUser.displayName, photo: "https://atg-prod-scalar.s3.amazonaws.com/studentpower/media/user%20avatar.png", email: gitUser.email,title:"Please Enter Your Jobs Title",bio:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas tempora sequi voluptates, saepe illo hic esse maxime consectetur quidem nesciunt?",role : "user" }
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
                //(error.message)
            })
    }



    // google login
    let handleGoogleLogin = () => {

        googleLogin(googleProvider)
            .then(result => {
                let googleUser = result.user
               // console.log(googleUser)
                let saveUser = { name: googleUser.displayName, photo: googleUser.photoURL, email: googleUser.email ,title:"Please Enter Your Jobs Title",bio:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas tempora sequi voluptates, saepe illo hic esse maxime consectetur quidem nesciunt?",role : "user"}
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
                                title: 'Your Google Login Previous user',
                                showConfirmButton: false,
                                timer: 1500
                              })
                            navigate("/")
                        }
                    })

                setSuccess(" Your SingUp Google Successfully ")
                setError("error.message")
            })
            .catch(error => {
                setError(error.message)
                setSuccess("")
            })
    }




    return (
        <div className='Login mb-14'>

             <div className="hero min-h-screen">

                <div className="hero-content logoBackground w-full my-20">


                    <div className="card-colors-sign card flex-shrink-0 w-full max-w-sm shadow-2xl">

                        <div className="card-body">
                            <h1 className="text-3xl text-center text-white font-bold">Registration!</h1>


                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text NameSet">Name</span>
                                    </label>

                                    <input type="name" {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered input-accent w-full max-w-xs" />
                                    {errors.name && <span className='text-red-600 font-semibold'>Name field is required</span>}

                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered input-accent w-full max-w-xs" />
                                    {errors.email && <span className='text-red-600 font-semibold'>Email field is required</span>}
                                </div>
                                {/* <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" {...register("photo", { required: true })} name='photo' placeholder="Photo Url" className="input input-bordered input-accent w-full max-w-xs" />
                                    {errors.photo && <span className='text-red-600 font-semibold'>Photo Url field is required</span>}
                                </div> */}
                            

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password"
                                        {...register("password",
                                            {
                                                required: true,
                                                minLength: 7,
                                                maxLength: 20,
                                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                            })}

                                        name='password' placeholder="password" className="input input-bordered input-accent w-full max-w-xs" />

                                    {errors.password?.type === "required" && <span className='text-red-600 font-semibold'>Password field is required</span>}
                                    {errors.password?.type === "minLength" && <span className='text-red-600 font-semibold'>Password Must be 7 characters</span>}
                                    {errors.password?.type === "maxLength" && <span className='text-red-600 font-semibold'>Password must be less 20 characters</span>}
                                    {errors.password?.type === "pattern" && <span className='text-red-600 font-semibold'>Must Have 1 uppercase & 1 Special characters</span>}

                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" {...register("confirm", { required: true })} name='confirm' placeholder="Confirm Password" className="input input-bordered input-accent w-full max-w-xs" />
                                    {errors.confirm && <span className='text-red-600 font-semibold'>Confirm required</span>}
                                </div>


                                <h2 className='text-red-500'>{error}</h2>
                                <h2 className='text-green-500'>{success}</h2>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Sign Up" />
                                </div>

                            </form>



                            {/* social login part  */}


                            <div className="others mt-4">

                                <h2>Or Sing In with</h2>
                                <div className="icon py-4">

                                    <i class="fa fa-facebook" aria-hidden="true"></i>
                                    <button className='signUpBtn' onClick={handleGithubLogin}>
                                        <i class="fa mx-4 fa-github" aria-hidden="true"></i>
                                    </button>
                                    <button className='signUpBtn' onClick={handleGoogleLogin}>
                                        <i class="fa fa-google" aria-hidden="true"></i>
                                    </button>
                                </div>
                                <h3>You are already signUp? <span><Link to="/login">Login</Link></span></h3>

                            </div>
                        </div>



                    </div>



                </div>
            </div>

        </div>
    );
};

export default SingUp;




