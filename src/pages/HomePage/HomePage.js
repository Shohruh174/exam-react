import { useState } from 'react';

import Search from "../../assets/images/icons/search.svg";
import HomePageItem from "../../components/HomePageItem/HomePageItem";
import Aside from "../../containers/Aside";
import Sidebar from "../../containers/Sidebar"


import './HomePage.scss';

const HomePage = () => {

    const [ ] = useState(0);

    return (
        <div className="home-page">
            <div className="home-page-inner">
                <div className="home-page-top">
                    <div className="top-left">
                        <h1 className="home-page-title">Jaegar Resto</h1>
                        <span className="home-page-span">Tuesday, 2 Feb 2021</span>
                    </div>
                    <div className="top-right">
                        <img src={Search} alt="" />
                        <input
                            type="search"
                            name="search"
                            id="" placeholder="Search for food, coffe, etc.."
                        />
                    </div>
                </div>
                <div className="top-bottom">
                    <button>Hot Dishes</button>
                    <button>Cold Dishes</button>
                    <button>Soup</button>
                    <button>Grill</button>
                    <button>Appetizer</button>
                    <button>Dessert</button>
                </div>
                <div className="home-page-bottom">
                    <div className="bottom-top">
                        <h2>Choose Dishes</h2>
                        <form action="">
                            <select name="" id="">
                                <option value="">Dine In</option>
                                <option value="">Dine In</option>
                                <option value="">Dine In</option>
                                <option value="">Dine In</option>
                                <option value="">Dine In</option>
                            </select>
                        </form>
                    </div>

                    <div className="food">
                        <div className="food-item">
                            <HomePageItem />
                        </div>
                    </div>
                </div>
            </div>
            <Aside />
        </div>
    )
}

export default HomePage;