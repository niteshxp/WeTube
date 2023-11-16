import React from 'react'

const Comment = ({ data }) => {

    const { name, text } = data;
    return (
        <div className='flex'>
            <div className='ml-2 mr-2 mt-1'>
                <img className='h-8 w-10' alt='user' src='https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png' />
            </div>
            <div className='mb-2'>
                <p className='font-semibold text-xs'>{name}</p>
                <p className='text-sm text-gray-500'>{text}</p>
            </div>
        </div>
    )
}

export default Comment;