import Img1 from '../../assets/images/img1.png';
import Img2 from '../../assets/images/img2.png';
import Img3 from '../../assets/images/img3.png';

import './MostOrder.scss';

const MostOrder = () => {
    return (
        <div className="MostOrder">
            <div className="most-order-top">
                <h3>Most Ordered</h3>
                <select name="" id="">
                    <option value="">Today</option>
                    <option value="">Today</option>
                    <option value="">Today</option>
                    <option value="">Today</option>
                    <option value="">Today</option>
                </select>
            </div>

            <div className="most-order-bottom">
                <div className="order-item">
                    <img src={Img1} alt=""/>
                    <div className="title">
                        <p>Spicy seasoned seafood noodles</p>
                        <span>200 dishes ordered</span>
                    </div>
                </div>

                <div className="order-item">
                    <img src={Img2} alt=""/>
                    <div className="title">
                        <p>Spicy seasoned seafood noodles</p>
                        <span>200 dishes ordered</span>
                    </div>
                </div>

                <div className="order-item">
                    <img src={Img3} alt=""/>
                    <div className="title">
                        <p>Spicy seasoned seafood noodles</p>
                        <span>200 dishes ordered</span>
                    </div>
                </div>

                <button>View All</button>
            </div>
        </div>
    )
}

export default MostOrder;