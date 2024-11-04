import React, { useState } from 'react'
import home from '../../../public/assets/home.png'
import game_icon from '../../../public/assets/game_icon.png'
import automobiles from '../../../public/assets/automobiles.png'
import sports from '../../../public/assets/sports.png'
import entertainment from '../../../public/assets/entertainment.png'
import tech from '../../../public/assets/tech.png'
import music from '../../../public/assets/music.png'
import blog from '../../../public/assets/blogs.png'
import news from '../../../public/assets/news.png'
import jack from '../../../public/assets/jack.png'
import simon from '../../../public/assets/simon.png'
import tom from '../../../public/assets/tom.png'
import megan from '../../../public/assets/megan.png'
import cameron from '../../../public/assets/cameron.png'
import {useSelector} from 'react-redux'
const Sidebar = ({className,category ,setcategory}) => {
const visibility=useSelector((state)=>state.sidebarReducer.visibility);

 
  return (

    // Component
<div className={` ${
        visibility ? 'visible' : 'hidden'
      } ${className} overflow-y-auto  left-0 border-2 border-white flex flex-col bg-clip-border bg-blue-950 text-white min-h-screen   max-w-[15rem] w-1/3 p-4 shadow-xl shadow-yellow-gray-900/8 stickey `}>
  <nav className=" flex flex-col gap-1 min-w-[200px] p-2 font-sans text-base font-normal text-white">
    <div role="button" tabIndex="0" className="flex items-center max-w-[12rem] p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-100 focus:bg-blue-50 focus:bg-opacity-100 active:bg-gray-50 active:bg-opacity-100 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
      <div className={`grid place-items-start mr-4`} onClick={()=>setcategory(0)}>
        <img src={home} alt="Blocks Icon" className={`h-5 w-5 ${category===0? "pb-[2px] border-b-[3px] border-solid border-blue-600":""}`} />
      </div>
      Home
    </div>
    <div role="button" tabIndex="0" className="flex items-center max-w-[12rem] p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-100 focus:bg-blue-50 focus:bg-opacity-100 active:bg-blue-50 active:bg-opacity-100 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
      <div className={`grid place-items-start mr-4`} onClick={()=>setcategory(20)}>
        <img src={game_icon} alt="Books Icon" className={`h-5 w-5 ${category===20? "pb-[2px] border-b-[3px] border-solid border-blue-600":""}`} />
      </div>
      Games
    </div>
    <div role="button" tabIndex="0" className="flex items-center max-w-[12rem] p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-100 focus:bg-blue-50 focus:bg-opacity-100 active:bg-blue-50 active:bg-opacity-100 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
      <div className={`grid place-items-start mr-4`} onClick={()=>setcategory(2)}>
        <img src={automobiles} alt="Example Pages Icon" className={`h-5 w-5 ${category===2? "pb-[2px] border-b-[3px] border-solid border-blue-600":""}`} />
      </div>
      Automobiles
     
    </div>
    <div role="button" tabIndex="0" className="flex items-center max-w-[12rem] p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-100 focus:bg-blue-50 focus:bg-opacity-100 active:bg-blue-50 active:bg-opacity-100 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
      <div className={`grid place-items-start mr-4`} onClick={()=>setcategory(17)}>
        <img src={sports} alt="Profile Icon" className={`h-5 w-5 ${category===17? "pb-[2px] border-b-[3px] border-solid border-blue-600":""}`}/>
      </div>
    Sports
    </div>
    <div role="button" tabIndex="0" className="flex items-center max-w-[12rem] p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-100 focus:bg-blue-50 focus:bg-opacity-100 active:bg-blue-50 active:bg-opacity-100 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
      <div className={`grid place-items-start mr-4`} onClick={()=>setcategory(24)}>
        <img src={entertainment} alt="Settings Icon" className={`h-5 w-5 ${category===24? "pb-[2px] border-b-[3px] border-solid border-blue-600":""}`}/>
      </div>
      entertainment
    </div>
    <div role="button" tabIndex="0" className="flex items-center max-w-[12rem] p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-100 focus:bg-blue-50 focus:bg-opacity-100 active:bg-blue-50 active:bg-opacity-100 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
      <div className={`grid place-items-start mr-4`} onClick={()=>setcategory(28)}>
        <img src={tech} alt="Log Out Icon" className={`h-5 w-5 ${category===28? "pb-[2px] border-b-[3px] border-solid border-blue-600":""}`} />
      </div>
      Technology
    </div>

    <div role="button" tabIndex="0" className="flex items-center max-w-[12rem] p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-100 focus:bg-blue-50 focus:bg-opacity-100 active:bg-blue-50 active:bg-opacity-100 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
      <div className={`grid place-items-start mr-4`} onClick={()=>setcategory(10)}>
        <img src={music} alt="Log Out Icon" className={`h-5 w-5 ${category===10? "pb-[2px] border-b-[3px] border-solid border-blue-600":""}`} />
      </div>
      Music
    </div>

    <div role="button" tabIndex="0" className="flex items-center max-w-[12rem] p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-100 focus:bg-blue-50 focus:bg-opacity-100 active:bg-blue-50 active:bg-opacity-100 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
      <div className={`grid place-items-start mr-4`} onClick={()=>setcategory(22)}>
        <img src={blog} alt="Log Out Icon" className={`h-5 w-5 ${category===22? "pb-[2px] border-b-[3px] border-solid border-blue-600":""}`} />
      </div>
      V-log
    </div>

    <div role="button" tabIndex="0" className="flex items-center max-w-[12rem] p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-100 focus:bg-blue-50 focus:bg-opacity-100 active:bg-blue-50 active:bg-opacity-100 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
      <div className={`grid place-items-start mr-4`} onClick={()=>setcategory(25)}>
        <img src={news} alt="Log Out Icon" className={`h-5 w-5 ${category===25? "pb-[2px] border-b-[3px] border-solid border-blue-600":""}`} />
      </div>
      News
    </div>
    

    
    <div role="button" tabIndex="0" className="flex items-center max-w-[12rem] p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-100 focus:bg-blue-50 focus:bg-opacity-100 active:bg-blue-50 active:bg-opacity-100 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
      <div className={`grid place-items-start mr-4`} onClick={()=>setcategory(0)}>
        <img src={jack} alt="Log Out Icon" className="h-6 w-6 rounded-xl" />
      </div>
      Pewdipie
    </div>

    
    <div role="button" tabIndex="0" className="flex items-center max-w-[12rem] p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-100 focus:bg-blue-50 focus:bg-opacity-100 active:bg-blue-50 active:bg-opacity-100 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
      <div className={`grid place-items-start mr-4`} onClick={()=>setcategory(0)}>
        <img src={simon} alt="Log Out Icon" className="h-6 w-6 rounded-xl" />
      </div>
      T-series
    </div>


    <div role="button" tabIndex="0" className="flex items-center max-w-[12rem] p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-100 focus:bg-blue-50 focus:bg-opacity-100 active:bg-blue-50 active:bg-opacity-100 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
      <div className={`grid place-items-start mr-4`} onClick={()=>setcategory(0)}>
        <img src={tom} alt="Log Out Icon" className="h-6 w-6 rounded-xl" />
      </div>
      BB ki vines
    </div>
    <div role="button" tabIndex="0" className="flex items-center max-w-[12rem] p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-100 focus:bg-blue-50 focus:bg-opacity-100 active:bg-blue-50 active:bg-opacity-100 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
      <div className={`grid place-items-start mr-4`} onClick={()=>setcategory(0)}>
        <img src={megan} alt="Log Out Icon" className="h-6 w-6 rounded-xl" />
      </div>
      freecodecamp
    </div>

    <div role="button" tabIndex="0" className="flex items-center max-w-[12rem] p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-100 focus:bg-blue-50 focus:bg-opacity-100 active:bg-blue-50 active:bg-opacity-100 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
      <div className={`grid place-items-start mr-4`} onClick={()=>setcategory(0)}>
        <img src={cameron} alt="Log Out Icon" className="h-6 w-6 rounded-xl " />
      </div>
      Hollywood
    </div>

    <hr />
    
    </nav>
</div>


  )
}

export default Sidebar
