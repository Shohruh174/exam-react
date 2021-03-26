import Circle from '../../assets/images/Circle.png'
import Pink from '../../assets/images/icons/pink.svg';
import Yellow from '../../assets/images/icons/yellow.svg';
import Blue from '../../assets/images/icons/blue.svg';

import './MostType.scss';

const MostType = () => {
    return (
        <div className="MostType">

            <div className="most-type-top">
                <h3>Most Type of Order</h3>
                <select name="" id="">
                    <option value="">Today</option>
                    <option value="">Today</option>
                    <option value="">Today</option>
                    <option value="">Today</option>
                    <option value="">Today</option>
                </select>
            </div>

            <div className="most-type-bottom">
                <img src={Circle} alt="" className="circle" />

                <div className="to-go-items">

                    <div className="dine-in marb">
                        <img src={Pink} alt="" />
                        <div>
                            <span className="title">Dine In</span>
                            <span className="total">200 customers</span>
                        </div>
                    </div>

                    <div className="to-go marb">
                        <img src={Yellow} alt="" />
                        <div>
                            <span className="title">To Go</span>
                            <span className="total">122 customers</span>
                        </div>
                    </div>

                    <div className="delivery marb">
                        <img src={Blue} alt="" />
                        <div>
                            <span className="title">Delivery</span>
                            <span className="total">264 customers</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MostType;