import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../Utils/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import { YOUTUBE_SEARCH_API, imgMenu, imgYT } from '../Utils/constants'
import { cacheResults } from '../Utils/searchSlice'
import { Link } from 'react-router-dom'

const Header = () => {
    //debouncing
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const dispatch = useDispatch();

    const searchCache = useSelector((store) => store.search);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery])
            }
            else {
                getSearchSuggestions()
            }
        }, 200);

        return () => {
            clearTimeout(timer);
        };
    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        // console.log("API CALL - "+ searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);

        dispatch(cacheResults({
            [searchQuery]: json[1],
        }))
    };

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    };

    return (

        <div className='grid grid-flow-col p-2 m-1 shadow-lg'>

            <div className='flex col-span-1'>

                <img
                    onClick={() => toggleMenuHandler()}
                    className='h-8 cursor-pointer'
                    alt="menu"
                    src={imgMenu}
                />
                <Link to="/">
                    <img
                        className='h-8 mx-2'
                        alt='youtube-logo'
                        src={imgYT}
                    />
                </Link>
            </div>

            <div className='col-span-10 px-10'>
                <div>
                    <input
                        className='w-3/4 border border-gray-400 p-2 rounded-l-full'
                        type='text'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                    />
                    <button className='border border-gray-400 p-2 rounded-r-full bg-gray-100'> 🔍</button>
                </div>

                {
                    (showSuggestions && suggestions.length > 0) &&
                    <div className='fixed bg-white py-2 px-2 w-[40.5rem] shadow-lg rounded-lg border border-gray-400'>
                        <ul className='py-3'>
                            {
                                suggestions?.map(
                                    (sugg) =>
                                        <li key={sugg} className='py-2 px-3 shadow-sm hover:bg-gray-100'>
                                            <spna>{sugg}</spna>
                                        </li>
                                )
                            }
                        </ul>
                    </div>

                }

            </div>

            <div className='col-span-1'>
                <img
                    className='h-8 m-1'
                    alt='user-icon'
                    src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg' />
            </div>

        </div>

    )
};

export default Header