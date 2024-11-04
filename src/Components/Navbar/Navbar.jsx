import React, { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import menu_icon from '../../assets/menu.png';
import logo from '../../assets/download.png';
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import notification_icon from '../../assets/notification.png';
import more_icon from '../../assets/more.png';
import profile_icon from '../../assets/jack.png';
import {togglesidebar} from '../../Features/SidebarFeature/sidebarslice'
import {useDispatch} from 'react-redux'
import {addkeyword} from '../../Features/Searchkeyword/searchslice'
import {Link} from 'react-router-dom'
import {onAuthStateChanged,getAuth} from 'firebase/auth'
import { app } from '../../Firebase/webservices'; 
const auth = getAuth(app);
const Navbar = () => {
const Navigate=useDispatch();
const [load,setload]=useState('')
const [keyword,setkeyword]=useState('');
  const dispatch=useDispatch();

  const handletoggle=()=>{
    dispatch(togglesidebar());
    
  }

  const handlekeyword=()=>{
    if(keyword!==''){
    dispatch(addkeyword({ searchTerm: keyword }))
    setkeyword('')
    }
  }

useEffect(()=>{
onAuthStateChanged(auth,(load)=>{
if(load){

setload('')

}

else {
  setload('Authentication')
}
})


},[])


const messsage=()=>{
  if(load==''){
    alert('you are already loggedin as a user.')
  setload('Aboutus')
  }
}

  return (
    <div className='flex flex-col md:flex-row items-center p-3 justify-between  top-0 z-10 shadow-sm shadow-white drop-shadow-2xl'>
    {/* Logo and Menu Icon */}
      <div className='flex items-center justify-between w-full md:w-auto'>
        <img onClick={handletoggle} className='w-6 mr-3 bg:hidden' src={menu_icon} alt="Menu"/>
      <Link to={'/'} >   <p className='ml-7 w-56 text-4xl text-blue-500'> Stream<span className='text-yellow-400'>Space</span> </p>
        </Link>  
      </div>

      {/* Search Bar */}
      <div className='flex items-center w-full md:w-[380px] mt-2 md:mt-0'>
        <div className='flex items-center border-white hover:border-yellow-300 border-2 rounded-3xl p-2 pr-4 w-full'>
          <input  onChange={(e)=>setkeyword(e.target.value)} value={keyword} className='w-full text-white border-0 outline-0 bg-transparent ml-2' type="text" placeholder='search' />
          <img onClick={handlekeyword} src={search_icon} alt="Search" className='w-4' />
        </div>
      </div>

      {/* Icons Container */}
      <div className='flex items-center mt-2 md:mt-0 gap-3'>
        <img className='w-7 mr-4 hover:w-9 ease-in-out duration-300' src={upload_icon} alt="Upload" />
        <img className='w-7 mr-4 hover:w-9 ease-in-out duration-300' src={notification_icon} alt="Notification" />
        <img className='w-7 mr-4 hover:w-9 ease-in-out duration-300' src={more_icon} alt="More" />
      <Link to={`/${load}`} onClick={messsage} > <img className='w-8 rounded-2xl border-2 border-white hover:border-yellow-400 hover:w-9 ease-in-out duration-300' src={profile_icon} alt="Profile" /> </Link> 
      </div>
    </div>
  );
};

export default Navbar;