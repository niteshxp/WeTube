import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({ name }) => {
    const navigate = useNavigate();
    return (
        <div
            className='px-5 py-2 m-2 bg-gray-200 rounded-lg hover:bg-gray-300 cursor-pointer'
            onClick={() => navigate('/results?search_query=' + encodeURI(name))}
        >
            <button>
                {name}
            </button>
        </div>
    )
}

export default Button;