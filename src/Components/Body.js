import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
    return (
        <div className='grid grid-flow-col border border-black'>
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Body