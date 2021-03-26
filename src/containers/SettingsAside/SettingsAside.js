import SettingsIcon1 from '../../assets/images/icons/settings-icon1.svg'
import SettingsIcon2 from '../../assets/images/icons/settings-icon2.svg'
import SettingsIcon3 from '../../assets/images/icons/settings-icon3.svg'
import SettingsIcon4 from '../../assets/images/icons/settings-icon4.svg'
import SettingsIcon5 from '../../assets/images/icons/settings-icon5.svg'
import SettingsIcon6 from '../../assets/images/icons/settings-icon6.svg'

import './SettingsAside.scss';

const SettingsAside = () => {
    return (
        <div className="SettingsAside">
            <h1 className="top-title">Settings</h1>

            <div className="settings-aside">

                <button className="aside-item">
                    <img src={SettingsIcon1} alt="" className="item-img"/>

                    <div>
                        <h5>Appereance</h5>
                        <span>Dark and Light mode, Font size</span>
                    </div>
                </button>

                <button className="aside-item">
                    <img src={SettingsIcon2} alt="" className="item-img"/>

                    <div>
                        <h5>Your Restaurant</h5>
                        <span>Dark and Light mode, Font size</span>
                    </div>
                </button>


                <button className="aside-item">
                    <img src={SettingsIcon3} alt="" className="item-img"/>

                    <div>
                        <h5>Products Management</h5>
                        <span>Manage your product, pricing, etc</span>
                    </div>
                </button>


                <button className="aside-item">
                    <img src={SettingsIcon4} alt="" className="item-img"/>

                    <div>
                        <h5>Notifications</h5>
                        <span>Customize your notifications</span>
                    </div>
                </button>


                <button className="aside-item">
                    <img src={SettingsIcon5} alt="" className="item-img"/>

                    <div>
                        <h5>Security</h5>
                        <span>Configure Password, PIN, etc</span>
                    </div>
                </button>

                <button className="aside-item">
                    <img src={SettingsIcon5} alt="" className="item-img"/>

                    <div>
                        <h5>Security</h5>
                        <span>Configure Password, PIN, etc</span>
                    </div>
                </button>


                <button className="aside-item">
                    <img src={SettingsIcon6} alt="" className="item-img"/>

                    <div>
                        <h5>About Us</h5>
                        <span>Find out more about Posly</span>
                    </div>
                </button>

            </div>
        </div>
    )
}

export default SettingsAside;