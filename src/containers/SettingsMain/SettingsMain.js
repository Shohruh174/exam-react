import { Qalamcha, Details } from '../../assets/icons/icons';

import Img1 from '../../assets/images/img1.png';
import Img2 from '../../assets/images/img2.png';
import Img3 from '../../assets/images/img3.png';
import Img4 from '../../assets/images/img4.png';
import Img5 from '../../assets/images/img5.png';

import './SettingsMain.scss';

const SettingsMain = () => {
    return (
        <div className="SettingsMain">
            <div className="settings-main">

                <div className="settings-main-top">
                    <div className="top">
                        <h2>Products Management</h2>
                        <button>
                            <p><Details/></p>
                            Manage Categories
                        </button>
                    </div>

                    <div className="bottom">
                        <button>Hot Dishes</button>
                        <button>Cold Dishes</button>
                        <button>Soup</button>
                        <button>Grill</button>
                        <button>Appetizer</button>
                        <button>Dessert</button>
                    </div>
                </div>

                <div className="MainItems">
                    <div className="main-items">
                        <button className="item-button">
                            <span className="plus">+</span>
                            <span>Add new dish</span>
                        </button>

                        <div className="item">
                            <div className="padding">
                                <img src={Img1} alt="" />
                                <span className="item-title">Spicy seasoned seafood noodles</span>
                                <span className="item-sum">$ 2.29</span>
                            </div>

                            <button>
                                <Qalamcha />
                                <span>Edit dish</span>
                            </button>
                        </div>

                        <div className="item">
                            <div className="padding">
                                <img src={Img2} alt="" />
                                <span className="item-title">Salted Pasta with mushroom sauce</span>
                                <span className="item-sum">$ 2.69</span>
                            </div>

                            <button>
                                <Qalamcha />
                                <span>Edit dish</span>
                            </button>
                        </div>

                        <div className="item">
                            <div className="padding">
                                <img src={Img4} alt="" />
                                <span className="item-title">Salted Pasta with mushroom sauce</span>
                                <span className="item-sum">$ 2.69</span>
                            </div>

                            <button>
                                <Qalamcha />
                                <span>Edit dish</span>
                            </button>
                        </div>


                        <div className="item">
                            <div className="padding">
                                <img src={Img3} alt="" />
                                <span className="item-title">Salted Pasta with mushroom sauce</span>
                                <span className="item-sum">$ 2.69</span>
                            </div>

                            <button>
                                <Qalamcha />
                                <span>Edit dish</span>
                            </button>
                        </div>

                        <div className="item">
                            <div className="padding">
                                <img src={Img4} alt="" />
                                <span className="item-title">Salted Pasta with mushroom sauce</span>
                                <span className="item-sum">$ 2.69</span>
                            </div>

                            <button>
                                <Qalamcha />
                                <span>Edit dish</span>
                            </button>
                        </div>

                        <div className="item">
                            <div className="padding">
                                <img src={Img5} alt="" />
                                <span className="item-title">Salted Pasta with mushroom sauce</span>
                                <span className="item-sum">$ 2.69</span>
                            </div>

                            <button>
                                <Qalamcha />
                                <span>Edit dish</span>
                            </button>
                        </div>

                        <div className="item">
                            <div className="padding">
                                <img src={Img2} alt="" />
                                <span className="item-title">Salted Pasta with mushroom sauce</span>
                                <span className="item-sum">$ 2.69</span>
                            </div>

                            <button>
                                <Qalamcha />
                                <span>Edit dish</span>
                            </button>
                        </div>



                        <div className="item">
                            <div className="padding">
                                <img src={Img3} alt="" />
                                <span className="item-title">Salted Pasta with mushroom sauce</span>
                                <span className="item-sum">$ 2.69</span>
                            </div>

                            <button>
                                <Qalamcha />
                                <span>Edit dish</span>
                            </button>
                        </div>

                        <div className="item">
                            <div className="padding">
                                <img src={Img5} alt="" />
                                <span className="item-title">Salted Pasta with mushroom sauce</span>
                                <span className="item-sum">$ 2.69</span>
                            </div>

                            <button>
                                <Qalamcha />
                                <span>Edit dish</span>
                            </button>
                        </div>

                        <div className="item">
                            <div className="padding">
                                <img src={Img1} alt="" />
                                <span className="item-title">Salted Pasta with mushroom sauce</span>
                                <span className="item-sum">$ 2.69</span>
                            </div>

                            <button>
                                <Qalamcha />
                                <span>Edit dish</span>
                            </button>
                        </div>

                        <div className="item">
                            <div className="padding">
                                <img src={Img3} alt="" />
                                <span className="item-title">Salted Pasta with mushroom sauce</span>
                                <span className="item-sum">$ 2.69</span>
                            </div>

                            <button>
                                <Qalamcha />
                                <span>Edit dish</span>
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default SettingsMain;