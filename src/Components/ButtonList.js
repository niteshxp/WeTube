import React from 'react'
import Button from './Button'
const ButtonList = () => {
    return (
        <div className='flex'>
            <Button name="All" />
            <Button name="Gaming" />
            <Button name="Songs"/>
            <Button name="Football" />
            <Button name="Cricket" />
            <Button name="React" />
            <Button name="Movie" />
        </div>
    )
}

export default ButtonList