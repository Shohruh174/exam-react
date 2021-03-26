import { useState } from 'react';
import AsideTitle from '../../components/AsideTitle/AsideTitle';
import Payment from '../Payment/Payment';
import './Aside.scss';

const Aside = () => {

    const [addClass, setAddClass] = useState(false);

    return (
        <div className="aside">

            <div className="aside-top">
                <h1>Orders #34562</h1>
                <>
                    <button>Dine In</button>
                    <button>To Go</button>
                    <button>Delivery</button>
                </>
                <div className="aside-top-title">
                    <h5>Item</h5>
                    <div className="aside-title-left">
                        <h5>Qty</h5>
                        <h5>Price</h5>
                    </div>
                </div>
            </div>


            <div className="aside-center">
                <div className="aside-center-title">
                    <AsideTitle />
                    <AsideTitle />
                    <AsideTitle />
                    <AsideTitle />
                </div>
            </div>

            <div className="aside-bottom-b">
                <div className="aside-bottom-b-top">

                    <div className="top">
                        <h5>Discount</h5>
                        <span>$0</span>
                    </div>

                    <div className="top">
                        <h5>Sub total</h5>
                        <span>$ 21,03</span>
                    </div>

                </div>

                <button type="submit"
                onClick={() => setAddClass('active')}
                className={`aside-bottom-btn ${addClass ? 'active' : ''}`}>Continue to Payment</button>
            </div>

            <div onClick={() => setAddClass('active')}
                className={`Payment ${addClass ? 'active' : ''}`}>
                <Payment />
            </div>

            {/* <div className="Payment">
                <Payment />
            </div> */}
        </div>
    )
}

export default Aside;