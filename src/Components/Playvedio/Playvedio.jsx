import React, { useEffect, useState } from 'react'
import like from '../../../public/assets/like.png'
import dislike from '../../../public/assets/dislike.png'
import share from '../../../public/assets/share.png'
import save from '../../../public/assets/save.png'
import jack from '../../../public/assets/jack.png'
import user_profile from '../../../public/assets/user_profile.jpg'
import {useDispatch} from 'react-redux'
import { togglesubscribe } from '../../Features/Subscribe/subscribeslice'
import { useSelector } from 'react-redux'
import {API_KEY} from '../../Data'
import moment from 'moment';
import {useParams} from 'react-router-dom'
const Playvedio = () => {
  const {vedioId}=useParams();
  const [likes,setlikes]=useState(159)
const [dislikes,setdislikes]=useState(9)

  const [status,setstatus]=useState("Subscribe")

  const subscribe=useSelector(state=>state.subscribeReducer.subscribed);

const dispatch=useDispatch()

const handlesubscribed=(id)=>{
console.log({id})
  dispatch(togglesubscribe());

  if (subscribe) {
    
    setstatus("Subscribe");
  } else {
    setstatus("Subscribed");
  }
 
}
// fetch vedio details 
const [details,setdetails]=useState(null);
const [channel,setchannel]=useState(null);
const [comment,setcomment]=useState([]);


const fetchVideoDetails = async (vedioId) => {
  const videoDetailsUrl = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${vedioId}&key=${API_KEY}`;
  await fetch(videoDetailsUrl)
    .then((response) => response.json()) // we will set ht e result array at the same info array because 
    .then((info) => setdetails(info.items[0])); // we want to load the vedios in the same page
};



// fetch channel details
const fetchChannelDetails = async () => {
  const videoDetailsUrl = ` https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${details.snippet.channelId}&key=${API_KEY} `;
  await fetch(videoDetailsUrl)
    .then((response) => response.json()) // we will set ht e result array at the same info array because 
    .then((info) => setchannel(info.items[0])); // we want to load the vedios in the same page
};

// fetch comment details
const fetchcommentDetails = async () => {
  const videoDetailsUrl = ` https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&videoId=${vedioId}&key=${API_KEY} `;
  await fetch(videoDetailsUrl)
    .then((response) => response.json()) // we will set ht e result array at the same info array because 
    .then((info) => setcomment(info.items)); // we want to load the comments in the same page
};



useEffect(()=>{
  fetchVideoDetails(vedioId);
//console.log('clicked')
},[vedioId])

useEffect(()=>{
  fetchChannelDetails();
console.log('clicked')
},[details])

useEffect(()=>{
fetchcommentDetails(vedioId)

},[vedioId])


const formatViewCount = (count) => {
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + 'M'; // Format to millions
  } else if (count >= 1000) {
    return (count / 1000).toFixed(1) + 'K'; // Format to thousands
  } else {
    return count; // Return the count as is if less than 1000
  }
}

  return (
    <div className='text-white 
    basis-[71%]
    '>
 <iframe src={`https://www.youtube.com/embed/${vedioId}`} className='w-full h-[450px] border-2 border-white'></iframe>
 <h3 className='mt-3 font-bold text-xl'>{details ? details.snippet.title : 'Loading...'}</h3>
<div className='
flex items-center
justify-between
flex-wrap
mt-3
text-lg
text-blue-500

'>

<p> {details && details.statistics?formatViewCount(details.statistics.viewCount):'loading..'} Views    <span className='text-slate-300'> {details && details.snippet ? moment(details.snippet.publishedAt).fromNow() : 'Loading...'}</span></p>
<div className='flex justify-start items-center gap-4'>
    <span className='inline-flex items-center ml-4'><img className='w-5 mr-2' src={like} alt="" onClick={()=>setlikes(likes+1)} />{likes}</span>
    <span className='inline-flex items-center ml-4'><img className='w-5 mr-2' src={dislike} alt="" onClick={()=>setdislikes(dislikes+1)} />{dislikes}</span>
    <span className='inline-flex items-center ml-4'><img className='w-5 mr-2' src={share} alt="" />Share</span>
    <span className='inline-flex items-center ml-4'><img className='w-5 mr-2' src={save} alt="" />Save</span>
</div>

</div>
<hr className='border-0 h-[1px] bg-white mt-3 mb-3' />

<div className='text-white flex items-center mt-5'>
  <img className='w-10 rounded-[50%] mr-4 border-2 border-white hover:border-yellow-400' src={channel && channel.snippet?channel.snippet.thumbnails.default.url:jack} alt="" />
<div className='flex-1 leading-4'>
<p className='text-pink-600 font-bold text-[18px]' >{details ? details.snippet.channelTitle:"Chai Aur code"}</p>
<span className='text-sm text-emerald-300'>{channel && channel.statistics? formatViewCount(channel.statistics.subscriberCount):"2.4"} subscirber </span>
</div>

<button className={`bg-red-600 text-white 
pt-2 pb-2
pl-7 pr-7
border-0
outline-0
rounded-md
cursor-pointer
mr-1 duration-300 ${subscribe?'bg-pink-500 text-black ': 'bg-blue-500 text-white'}
`} onClick={handlesubscribed}>{status}</button>

</div>

<div className='pl-14 mt-4 mb-4'>
  <p className='text-sm mb-1 text-slate-300'>{details  ? details.snippet.description.slice(0,250):"loading.."}</p>

  <hr />
  <h4 className='text-sm mt-4 text-blue-500 mb-2'>{details && details.statistics ? formatViewCount(details.statistics.commentCount):"2k "} comments</h4>
  
  {comment.map((items,index)=>{
    return(
  <div  key={index}>
  <img className='w-9 rounded-[50%] mr-4 border-2 border-white hover:border-yellow-400' src={ items.snippet? items.snippet.topLevelComment.snippet.authorProfileImageUrl: {user_profile}} alt=''  onError={(e) => { e.target.onerror = null; e.target.src = user_profile; }} />
  <div className='flex flex-col items-start mt-5 mb-5'>
    <h3 className='text-sm text-blue-600 mb-1 font-semibold'>{items.snippet.topLevelComment.snippet.authorDisplayName}  <span className='text-slate-300'>1 day ago</span></h3>
    <p className='text-yellow-400'>{ items.snippet? items.snippet.topLevelComment.snippet.textDisplay: "This video was recommended as soon as I opened Youtube. What an exciting tutorial it is."}</p>
    <div className='flex gap-2 items-center mt-2 mb-2 text-sm '>
      <img  className='w-5 mr-2' src={like} alt=""  />
      <span>{formatViewCount(items.snippet.topLevelComment.snippet.likeCount)}</span> 

      <img className='w-5 mr-2' src={dislike} alt=""  />
      <span>{dislikes}</span>
    </div>
  </div>
</div>
    )
  })}


  

</div>

    </div>
  )
}

export default Playvedio
