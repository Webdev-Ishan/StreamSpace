import React, { useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feeds/feed'
import {useSelector} from 'react-redux'

const Home = () => {
  const visibility=useSelector((state)=>{state.sidebarReducer.visibility})
 const [category,setcategory]=useState(0)
 
 
  return (
    <div className='flex '>
    <Sidebar category={category} setcategory={setcategory} className={`${visibility 
    ? 'w-full sm:w-2/3 md:w-1/2 lg:w-1/3' 
    : 'w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6'}`} />
    <div className={`bg-gradient-to-r from-slate-900 to-cyan-700 pt-5 pb-5 flex-1 pl-64${
          visibility ? 'pl-[7%] ' : 'pr-[2%] '
        }`}>
      <Feed category={category}/>
    </div>
    </div>
  )
}

export default Home
