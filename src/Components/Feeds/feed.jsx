import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import like from '../../assets/like.png'
import {API_KEY} from '../../Data'
import moment from 'moment';
import { useSelector } from 'react-redux';
const Feed = ({category}) => {

  const [likes,setlikes]=useState(2);
 const [likes2,setlikes2]=useState(1);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setlikes(prevLikes => prevLikes + 1);
    }, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); 


  useEffect(()=>{
const interval=setInterval(()=>{
setlikes2((prevlikes2)=>prevlikes2+1)
},3000);

return ()=>clearInterval(interval)

  },[]);



const searchTerm=useSelector((state)=>state.searchReducer.searchTerm);

const [info,setinfo]=useState([]);

// empty array for storing the dta which will come in an array format from youtube
  const fetchdata=async ()=>{
const vediolist_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
await fetch(vediolist_url).then(response=>response.json()).then(info=>setinfo(info.items));

  }
// the vedios output will be sent to this function 
  const fetchVideoDetails = async (videoIds) => {
    const videoDetailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoIds.join(',')}&key=${API_KEY}`;
    await fetch(videoDetailsUrl)
      .then((response) => response.json()) // we will set ht e result array at the same info array because 
      .then((info) => setinfo(info.items)); // we want to load the vedios in the same page
  };

  const fetchSearchResults = async () => {
    const searchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchTerm}&regionCode=US&type=video&key=${API_KEY}`;
    await fetch(searchUrl)
      .then((response) => response.json())
      .then((searchData) => {
        const videoIds = searchData.items.map((item) => item.id.videoId);
        // Fetch detailed info using videoIds
        if (videoIds.length > 0) {
          // if the result of the api call holds any kind of vedios then we have to fetch their details as well
          fetchVideoDetails(videoIds);
          // so we will send this output to the fethdetails function to fetch their other infos
        }
      });
  };

  useEffect(()=>{
console.log('fetched - ', {searchTerm})
fetchdata();

  },[category])


  useEffect(()=>{
    if(searchTerm!==""){
    console.log('fetched - ', {searchTerm})
    fetchSearchResults();
    }
 },[searchTerm])
    



  return (
    <div className='
    grid
    mt-4
    grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8
    p-3
    '

    >
{info.map((items,index)=>{

  return(

<Link to={`vedio/${items.snippet.categoryId}/${items.id}`} key={index}>

      <img className='w-[100%] rounded-md border-2 border-white hover:border-red-500 duration-300 hover:opacity-55' src={items.snippet.thumbnails.medium.url} alt="" />
      <h2 className='text-lg text-white mt-1 mb-1 mr-0 ml-0' >{items.snippet.title}</h2>
      <h3 className='text-xl text-yellow-300 mt-1 mb-1 mr-0 ml-0 '>{items.snippet.channelTitle}</h3>
      <p className='text-white'>15k views: {moment(items.snippet.publishedAt).fromNow()} </p>
      <p className='text-white'><img className='w-4 h-4' src={like} alt="" /> Likes: <span className='text-blue-600'>{likes}</span></p>
    </Link>


  )
})}
    

   

    </div>
  )
}

export default Feed
