import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../Assets/book-logo.png';

const Navbar = () => {
    const menuItems = <Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='blogs'>Blogs</Link></li>
    </Fragment>

    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow text-black rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <img src={Logo} alt="Logo" className="mr-2 h-10 " />
                        Book Bazzar
                    </Link>
                </div>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login' className="btn">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;