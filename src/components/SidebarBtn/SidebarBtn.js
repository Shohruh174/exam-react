import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import {
    MainIcon,
    HomeIcon,
    Icon1,
    Icon2,
    Icon3,
    Icon4,
    Icon5,
    Icon6
} from '../../assets/icons/icons';

import './SidebarBtn.scss';

const SidebarBtn = ({onClick, activePage, setActivePage}) => {


    return (
       <div className="">
        <button className="sidebar-btn main-icon"><MainIcon/></button>

        
        
        <Link to="/home">
            <button onClick={() => setActivePage('home')}
                    className={`sidebar-btn ${activePage ? 'active' : ''}`}>
                <HomeIcon />
            </button>
        </Link>
            
        <Link to="/discount">
            <button onClick={() => setActivePage('discount')}
                    className={`sidebar-btn ${activePage ? 'active' : ''}`}>
                <Icon1/>
            </button>
        </Link>
        
        <Link to="/dashboard">
            <button onClick={() => setActivePage('dashboard')}
                    className={`sidebar-btn ${activePage ? 'active' : ''}`}>
                <Icon2/>
            </button>
        </Link>

        <Link to="/message">
            <button onClick={() => setActivePage('message')}
                    className={`sidebar-btn ${activePage ? 'active' : ''}`}>
                <Icon3/>
            </button>
        </Link>

        <button className="sidebar-btn"><Icon4/></button>

        <NavLink to="/settings" activeClassName="active">
            <button onClick={() => setActivePage('settings')}
                    className={`sidebar-btn ${activePage ? 'active' : ''}`}>
                <Icon5/>
            </button>
        </NavLink>

        <button className="sidebar-btn"><Icon6/></button>

       </div>
    )
}

export default SidebarBtn;