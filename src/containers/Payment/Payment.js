import {
    CreditIcon,
    PaypalIcon,
    CashIcon
} from '../../assets/icons/icons';

import './Payment.scss';

const Payment = ({active}) => {
    return (
        <div className={`payment ${active ? 'active' : ''}`}>
            <div className="payment-top">
                <h2>Payment</h2>
                <p>3 payment method available</p>
            </div>

            <div className="payment-methods">
                <h4>Payment Method</h4>
                <form>
                    <div className="cards">
                        <button className="card-btn">
                            <input type="radio" name="card-check" id="card-btn1"/>
                            <span><CreditIcon /></span>
                            <label htmlFor="card-btn1">Credit Card</label>
                        </button>

                        <button className="card-btn">
                            <input type="radio" name="card-check" id="card-btn2"/>
                            <span><PaypalIcon /></span>
                            <label htmlFor="card-btn2">Paypal</label>
                        </button>

                        <button className="card-btn">
                            <input type="radio" name="card-check" id="card-btn3"/>
                            <span><CashIcon /></span>
                            <label htmlFor="card-btn3">Cash</label>
                        </button>
                    </div>

                    <div className="payment-forms">
                        <label htmlFor="cardName">Cardholder Name</label>
                        <input type="text" placeholder="Levi Ackerman" id="cardName" />

                        <label htmlFor="cardNumb">Card Number</label>
                        <input type="number" placeholder="2564 1421 0897 1244" id="cardNumb" />

                        <div className="cvv-div">
                            <div>
                                <label htmlFor="cardDate">Expiration Date</label>
                                <input type="number" placeholder="02/2022" id="cardDate" />
                            </div>

                            <div>
                                <label htmlFor="cardDate">CVV</label>
                                <input type="password" placeholder="•••" id="cardDate" />
                            </div>
                        </div>

                    </div>

                    <div className="order-type">
                        <div className="protsent">
                            <label htmlFor="orderType">Order Type</label>
                            <select name="" id="orderType">
                                <option value="">Dine In</option>
                                <option value="">Dine In</option>
                                <option value="">Dine In</option>
                                <option value="">Dine In</option>
                            </select>
                        </div>

                        <div className="protsent">
                            <label htmlFor="table-numb">Table no.</label>
                            <input type="number" placeholder="140" id="table-numb" />
                        </div>
                    </div>

                    <div className="buttons">
                        <button type="submit" className="left-btn">Cancel</button>
                        <button type="submit" className="left-btn">Confirm Payment</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Payment;