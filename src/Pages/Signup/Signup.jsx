import React from "react";
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { db,app } from '../../Firebase/webservices'; // Adjust the import path
import { ref, set } from 'firebase/database';
import { getAuth, createUserWithEmailAndPassword ,GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider= new GoogleAuthProvider();
const auth = getAuth(app);

const Signup = () => {

  const navigate=useNavigate();
const [email,setemail]=React.useState('')
const [password,setpassword]=React.useState()   

    const adduser = (e) => {
        e.preventDefault()
        set(ref(db, 'users/id'), {
          email:{email},
          password:{password}
        })
        .then(() => {
          console.log("User  added successfully");
        })
        .catch((error) => {
          console.error("Error adding user:", error);
        });


    createUserWithEmailAndPassword(auth, email, password)
  .then(
    navigate('/'),
    alert("Your Account has been Created"),

)
  .catch(() => {
 console.log("Error has occurred");
  });
       
      }



      // 2nd function
      const signingoogle=()=>{

        signInWithPopup(auth,provider)
        navigate('/')
        alert('your account has been created')
      }
    
  return (
    <div >
      <section className="bg-gray-50 dark:bg-gray-900 p-2">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2 rounded-md border-black border-1"    src="data:image/png;base64,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" alt="logo"/>
          <span className="text-blue-500">Stream</span> <span className="text-yellow-400">Space</span>
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input value={email} onChange={(e)=>setemail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input value={password} onChange={(e)=>setpassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                      <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      <div className="ml-3 text-sm">
                        <label for="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>

                  
                  <button className="w-full max-w-xs p-2 text-blue-500 bg-white rounded-lg  hover:opacity-80 flex justify-center" onClick={signingoogle}>
                    <img className="w-8 h-8 border-2 mr-2  rounded-3xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzgWME4JpAEuAS1jINodwrHzgO4t42uypLGQ&s" alt="" />
                    
                    Sign in with Google</button>
                  
                  <button onClick={adduser}  type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <Link href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500" to={'/Authentication'}>Login here</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default Signup

