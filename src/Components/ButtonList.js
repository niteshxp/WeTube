import React from 'react'
import Button from './Button'
const ButtonList = () => {
    const trendingItems = [
        'All', 'Gaming', 'Songs', 'Football', 'Cricket', 'Reactjs', 'Movie', 'JavaScript', 'Lovesong', 'Holi'
    ]
    return (
        <div className='flex mt-16'>
            {trendingItems.map((item, index) => (
                <Button key={index} name={item} />
            ))}
        </div>
    )
}

export default ButtonList