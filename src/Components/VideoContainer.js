import React, { useEffect, useState } from 'react'
import { YOUTUBE_API_VIDEOS } from '../Utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import { useSelector } from 'react-redux';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_API_VIDEOS);
      const json = await data.json();
      setVideos(json.items);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getVideos();
  }, [])

  if (!videos.length) return <Shimmer />;

  return (
    <div className={`w-screen md:flex lg:flex md:flex-wrap md:justify-evenly ${!isMenuOpen ? "" : "md:w-4/5 md:mx-[240px]"}`}>
      {videos.map(video =>
        <Link to={"/watch?v=" + video.id} >
          <VideoCard key={video.id} info={video} />
        </Link>)}

    </div >
  )
}

export default VideoContainer;