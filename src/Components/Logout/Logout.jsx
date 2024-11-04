import React from 'react';
import { useNavigate } from 'react-router-dom';
import {app} from '../../Firebase/webservices'
import { getAuth ,signOut} from 'firebase/auth';
const auth=getAuth(app)

function Logout() {
    const navigate=useNavigate('');
  const handleLogout = () => {
    // Logic for logging out (e.g., clearing tokens, redirecting, etc.)
    signOut(auth).then(()=>{

navigate('/')
    })
    .catch((error)=>{
console.log(error)
    })
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Wanna Logout?</h1>
        <p className="text-gray-600 mb-6">You are already an active signedin user.</p>
        <button 
          onClick={handleLogout} 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Logout;
