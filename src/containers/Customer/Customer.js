import CustomerItem from '../../components/CustomerItem/CustomerItem';

import Avatar from '../../assets/images/Avatar.png'

import './Customer.scss';
import { Details } from '../../assets/icons/icons';

const Customer = () => {
    return (
        <div className="customer">
            <div className="customer-top">
                <div className="customer-title">
                    <h3>Order Report</h3>
                    <button className="filter">
                        <p><Details/></p>
                        Filter Order
                    </button>
                </div>
                <div className="links">
                    <span>Customer</span>
                    <span>Menu</span>
                    <span>Total Payment</span>
                    <span>Status</span>
                </div>
            </div>

            <div className="main">
                <div className="custemer-item">
                    <img src={Avatar} alt=""/>
                    <h3>Eren Jaegar</h3>
                    <p>Spicy seasoned seafood noodles </p>
                    <span className="sum">$125</span>
                    <span className="status">Completed</span>
                </div>

                <div className="custemer-item">
                    <img src={Avatar} alt=""/>
                    <h3>Reiner Braunn</h3>
                    <p>Salted Pasta with mushroom sauce</p>
                    <span className="sum">$145</span>
                    <span className="status">Preparing</span>
                </div>

                <div className="custemer-item">
                    <img src={Avatar} alt=""/>
                    <h3>Levi Ackerman</h3>
                    <p>Beef dumpling in hot and sour soup</p>
                    <span className="sum">$105</span>
                    <span className="status">Pending</span>
                </div>

                <div className="custemer-item">
                    <img src={Avatar} alt=""/>
                    <h3>Historia Reiss</h3>
                    <p>Hot spicy fried rice with omelet</p>
                    <span className="sum">$45</span>
                    <span className="status">Completed</span>
                </div>

                <div className="custemer-item">
                    <img src={Avatar} alt=""/>
                    <h3>Hanji Zoe</h3>
                    <p>Hot spicy fried rice with omelet</p>
                    <span className="sum">$245</span>
                    <span className="status">Pending</span>
                </div>

                <div className="custemer-item">
                    <img src={Avatar} alt=""/>
                    <h3>Armin Arlert</h3>
                    <p>Hot spicy fried rice with omelet</p>
                    <span className="sum">$435</span>
                    <span className="status">Completed</span>
                </div>

                <div className="custemer-item">
                    <img src={Avatar} alt=""/>
                    <h3>Armin Arlert</h3>
                    <p>Hot spicy fried rice with omelet</p>
                    <span className="sum">$435</span>
                    <span className="status">Completed</span>
                </div>

                <div className="custemer-item">
                    <img src={Avatar} alt=""/>
                    <h3>Armin Arlert</h3>
                    <p>Hot spicy fried rice with omelet</p>
                    <span className="sum">$435</span>
                    <span className="status">Completed</span>
                </div>
            </div>

        </div>
    )
}

export default Customer;