import React from 'react'
import streamspace from '../../assets/streamspace.png'


function Aboutus() {
    
  return (
    <div className="flex flex-col items-center text-white justify-center min-h-screen bg-gradient-to-r from-indigo-700 to-amber-400 p-6">
      <h1 className="text-4xl font-bold text-blue-600  mb-4">About StreamSpace</h1>
      <p className="text-lg max-w-2xl text-center mb-6">
        Welcome to StreamSpace, your ultimate destination for seamless video streaming. 
        We provide a vast library of content ranging from movies and series to documentaries 
        and live events, all available at your fingertips. Our mission is to deliver 
        high-quality streaming experiences tailored to your preferences.
      </p>
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">Our Mission</h2>
      <p className="text-lg  max-w-2xl text-center mb-6">
        At StreamSpace, we believe in the power of storytelling through video. 
        Our mission is to connect people with the content they love while offering 
        an easy-to-use platform that enhances their viewing experience.
      </p>
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">Join Us</h2>
      <p className="text-lg  max-w-2xl text-center mb-6">
        Join us on this exciting journey and explore a world of entertainment 
        like never before. Sign up now and start streaming your favorite shows and movies!
        <br />




Our platform was designed with a vision to make high-quality streaming accessible to everyone. Whether you’re here to watch the latest movies, discover up-and-coming creators, or join a live stream event, StreamSpace makes it easy to find content you love, all in one place. We offer powerful features like personalized recommendations, real-time streaming, offline downloads, and interactive social tools that keep you connected.

At StreamSpace, we believe in supporting creators. That’s why we offer multiple avenues for monetization, including ad revenue, subscriptions, and donations, empowering creators to turn their passions into careers. Our robust analytics tools also help creators understand their audience, refine their content, and grow their reach.

As we continue to expand our library and community, our goal is to keep innovating and improving, delivering the best streaming experience to our users. Thank you for being part of StreamSpace, where connection and creativity come together.
      </p>
<br />
<h1 className='text-4xl text-blue-700'>Some UI Info</h1>
<br />
<img src={streamspace} alt="" className='hover:opacity-70 border-2 border-white' />
    </div>
  );
}

export default Aboutus;
    


     
  


