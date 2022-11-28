import React, { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useBuyer from '../Hooks/useBuyer';
import useSeller from '../Hooks/useSeller';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isBuyer] = useBuyer(user?.email)
    const [isSeller] = useSeller(user?.email)

    return (
        <div>
            <Navbar></Navbar>
            <Fragment>
                <div className="drawer drawer-mobile">
                    <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <Outlet></Outlet>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 text-base-content">
                            <li><Link to='/dashboard'>Dashboard</Link></li>
                            {
                                isAdmin && <>
                                    <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                                    <li><Link to='/dashboard/allusers'>All Users</Link></li>
                                    <li><Link to='/dashboard/report'>Reported Items</Link></li>
                                </>
                            }
                            {
                                isBuyer && <>
                                    <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                                </>
                            }
                            {
                                isSeller && <>
                                    <li><Link to='/dashboard/mybooks'>My Books</Link></li>
                                    <li><Link to='/dashboard/addbook'>Add Book</Link></li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </Fragment>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;