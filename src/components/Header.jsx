import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between items-center w-full max-w-7xl mx-auto my-7 font-bold'>
            <div className='flex justify-between items-center'>
                <img className='w-16' src="https://scontent.fjsr16-2.fna.fbcdn.net/v/t39.30808-6/273568613_2057027414459559_6906705790760585750_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHlk6WQzhSIYeP3Yvu2tIk6MjJJixCkVQwyMkmLEKRVDPesx0TVCzdcklaL86Xm_HAQcHt5M4U39vjCeN-euuUz&_nc_ohc=hvsP64QqUtIAX_maSxc&_nc_zt=23&_nc_ht=scontent.fjsr16-2.fna&oh=00_AfBXz0Ft4HjhPaSp8Vom-StKbBS1Pb8Axw3pjyENxMbGSg&oe=6435E870" alt="" />
                <p>ADUST</p>
            </div>
            <div className='inline-flex gap-7'>
                <NavLink to="/" className={({ isActive }) => isActive ? "bg-orange-300 px-3 py-1 rounded" : ""}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "bg-orange-300 px-3 py-1 rounded" : ""}>About</NavLink>
                <NavLink to="/courses" className={({ isActive }) => isActive ? "bg-orange-300 px-3 py-1 rounded" : ""}>Courses</NavLink>
                <NavLink to="/registration" className={({ isActive }) => isActive ? "bg-orange-300 px-3 py-1 rounded" : ""}>Registration</NavLink>
            </div>
        </div>
    );
};

export default Header;