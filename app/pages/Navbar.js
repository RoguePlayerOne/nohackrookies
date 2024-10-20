import Link from 'next/link'
import React from 'react'
import '../styles/navbar.css'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='option'><Link href='../'>Home</Link></div>
            <div className='option'><Link href='./activities'>Activities</Link></div>
            <div className='option'><Link href='./dashboard'>Dashboard</Link></div>
            <div className='option'><Link href='./achievement'>Achievements and Badges</Link></div>
            <div className='option'><Link href='./leaderboard'>Leaderboard</Link></div>
            <div className='option'><Link href='./calendar'>Calendar</Link></div>
        </div>
    )
}

export default Navbar
