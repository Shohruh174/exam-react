import Coin from '../../assets/images/icons/coin.svg';
import Order from '../../assets/images/icons/order.svg';
import Customer from '../../assets/images/icons/customer.svg';
import Arrow from '../../assets/images/icons/arrow.svg';
import Arrow2 from '../../assets/images/icons/arrow2.svg';

import './DashboardTop.scss';

const DashboardTop = () => {
    return (
        <div className="DashboardTop">
            <div className="dashboard-top">
                <h1 className="dashboard-title">Dashboard</h1>
                <span className="dashboard-span">Tuesday, 2 Feb 2021</span>
            </div>

            <div className="dashboard-statistic">
                <div className="statistic">
                    <div className="top">
                        <img src={Coin} alt="" className="logo-img"/>
                        <span>+32.40%</span>
                        <img src={Arrow} alt="" className="arrow"/>
                    </div>

                    <h3 className="dashboard-title">$10,243.00</h3>
                    <span className="dashboard-total">Total Revenue</span>
                </div>

                <div className="statistic">
                    <div className="top">
                        <img src={Order} alt="" className="logo-img"/>
                        <span className="cent">-12.40%</span>
                        <img src={Arrow2} alt="" className="arrow cent-arrow"/>
                    </div>

                    <h3 className="dashboard-title">23,456</h3>
                    <span className="dashboard-total">Total Dish Ordered</span>
                </div>

                <div className="statistic">
                    <div className="top">
                        <img src={Customer} alt="" className="logo-img"/>
                        <span>+2.40%</span>
                        <img src={Arrow} alt="" className="arrow"/>
                    </div>

                    <h3 className="dashboard-title">1,234</h3>
                    <span className="dashboard-total">Total Customer</span>
                </div>
            </div>
        </div>
    )
}

export default DashboardTop;