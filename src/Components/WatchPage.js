import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../Utils/appSlice";
import { YOUTUBE_API_VIDEOS, YOUTUBE_VIDEO_WATCH_API } from "../Utils/constants";
import CommentContainer from "./CommentContainer";

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    // console.log(searchParams.get('v'));
    let videoId = searchParams.get('v')
    const [video, setVideo] = useState({});
    const [relatedVideos, setRelatedVideos] = useState([]);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
        getVideoDetails();
    }, [videoId]);

    const getVideoDetails = async () => {
        const data = await Promise.all([fetch(YOUTUBE_VIDEO_WATCH_API + videoId), fetch(YOUTUBE_API_VIDEOS)]);
        const watchVideoJson = await data[0].json();
        const recVideoJson = await data[1].json();
        setVideo(watchVideoJson?.items[0]);
        setRelatedVideos(recVideoJson?.items);
        console.log(relatedVideos);
    }


    return (
        <div>

            <div className="px-5">
                <iframe width="800"
                    height="400"
                    src={"https://www.youtube.com/embed/" + videoId}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                </iframe>
            </div>

            <div>
                <div className="w-[800px]">

                    <div className="font-semibold p-2 ml-4 text-xl">
                        {video?.snippet?.title}
                    </div>

                    <div>

                        <div className="ml-4 flex">
                            <img
                                className='rounded-full w-10 h-10' alt='thumbnail'
                                src={video?.snippet?.thumbnails?.default?.url}
                            />

                            <div>
                                <div className="ml-2 font-semibold">
                                    {video?.snippet?.channelTitle}
                                </div>
                                <div className="text-sm ml-2 font-medium">
                                    {(video?.statistics?.viewCount)}
                                    <span className="ml-1">
                                        Subscriber
                                    </span>
                                </div>
                            </div>
                            <button className="h-10 ml-5  border rounded-full p-2 bg-black text-white hover:bg-gray-700" > <span>Subscribe</span></button>

                            <div className="ml-28 w-96 flex justify-between" >
                                <button className=" flex">
                                    <img alt='likeBtn'
                                        className="h-7 mr-2"
                                        src="https://w7.pngwing.com/pngs/415/5/png-transparent-social-media-thumb-signal-like-button-computer-icons-symbol-thumbs-up-text-hand-rectangle-thumbnail.png" />
                                    65K
                                </button>

                                <button className=" flex">
                                    <img alt='shareBtn'
                                        className="h-7 mr-2"
                                        src="https://w7.pngwing.com/pngs/830/741/png-transparent-computer-icons-arrow-share-icon-hand-drawn-arrow-angle-triangle-black-thumbnail.png"
                                    />
                                    Share
                                </button>

                                <button className="ack flex">
                                    <img
                                        className="h-7 mr-2"
                                        alt='downloadBtn'
                                        src="https://img.icons8.com/windows/32/download--v1.png"
                                    />
                                    Download
                                </button>

                                <button className=" flex">
                                    <img
                                        alt='moreBtn'
                                        className="h-5"
                                        src="https://cdn-icons-png.flaticon.com/512/0/859.png"
                                    />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <CommentContainer />
        </div>
    )
}

export default WatchPage;