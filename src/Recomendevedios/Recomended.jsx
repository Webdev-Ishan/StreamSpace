import React, { useEffect } from 'react'
import { useState } from 'react'
import { API_KEY } from '../Data'
import {Link} from 'react-router-dom'
const Recomended = ({categoryID}) => {
const [apidata,setapidata]=useState([])

const formatViewCount = (count) => {
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + 'M'; // Format to millions
  } else if (count >= 1000) {
    return (count / 1000).toFixed(1) + 'K'; // Format to thousands
  } else {
    return count; // Return the count as is if less than 1000
  }
}

const fetchcommentDetails = async () => {
  try {
    const vediolist_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryID}&key=${API_KEY}`;
    const response = await fetch(vediolist_url);
    
    // Check if the response is ok (status in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const info = await response.json();
    setapidata(info.items);
  } catch (error) {
    console.error("Failed to fetch video details:", error);
    // You can also set an error state here if needed
  }
};

useEffect(()=>{

  fetchcommentDetails()
},[categoryID])

  return (
    <div className=' text-white pl-2 min-h-screen w-1/4 pt-1 pb-10 pr-[2px]'>

      {apidata.map((items,index)=>{

return(
  <Link to={`/vedio/${items.snippet.categoryId}/${items.id}`} key={index}>
        <img className='border-2 border-white hover:opacity-75 duration-300 mb-2 hover:border-yellow-400' src={items? items.snippet.thumbnails.medium.url: thumbnail1} alt="" />
        <div>
<h4 className='text-blue-500'>{items.snippet.title}</h4>
<p className='text-green-400'>{items.snippet.channelTitle}</p>
<p className='mb-2 text-slate-300'>{formatViewCount(items.statistics.viewCount)} Views</p>
        </div>
      </Link>

)

      })}
     

    </div>
  )
}

export default Recomended
// AIzaSyATy1m3auI9viuGjHwiF9QvNyc3XDtGDjE