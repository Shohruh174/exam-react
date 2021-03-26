import { Link } from 'react-router-dom';
import SidebarBtn from '../../components/SidebarBtn';
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

import './Sidebar.scss';

const Sidebar = () => {

    const [ activePage, setActivePage ] = useState('');

    return (
        <div className="sidebar">
                <SidebarBtn activePage={activePage} setActivePage={setActivePage}/>
        </div>
    )
}

export default Sidebar;