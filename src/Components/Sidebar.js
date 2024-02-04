import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    //Early return
    if (!isMenuOpen) return null;

    return (
        <div className='fixed mt-16 h-screen z-20 p-5 md:p-10 shadow-lg lg:w-48 lg:mt-16'>
            <ul>
                <li> <Link to='/'>Home</Link></li>
                <li className='hover:text-gray-600 cursor-pointer' onClick={() => navigate('/results?search_query=' + encodeURI('shorts'))}>Shorts</li>
                <li className='hover:text-gray-600 cursor-pointer' onClick={() => navigate('/results?search_query=' + encodeURI('videos'))}>Videos</li>
                <li className='hover:text-gray-600 cursor-pointer' onClick={() => navigate('/results?search_query=' + encodeURI('live'))}>Live</li>
            </ul>

            <h1 className='font-bold pt-5'>Subscriptions</h1>
            <ul>
                <li className='hover:text-gray-600 cursor-pointer' onClick={() => navigate('/results?search_query=' + encodeURI('trendingmusic'))}>Music</li>
                <li className='hover:text-gray-600 cursor-pointer' onClick={() => navigate('/results?search_query=' + encodeURI('trendingsports'))}>Sports</li>
                <li className='hover:text-gray-600 cursor-pointer' onClick={() => navigate('/results?search_query=' + encodeURI('trendinggaming'))}>Gaming</li>
                <li className='hover:text-gray-600 cursor-pointer' onClick={() => navigate('/results?search_query=' + encodeURI('trendingmovies'))}>Movies</li>
            </ul>
        </div>
    )
}

export default Sidebar