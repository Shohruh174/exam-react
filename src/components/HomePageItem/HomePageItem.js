import './HomePageItem.scss';
import Img1 from '../../assets/images/img1.png';
import Img2 from '../../assets/images/img2.png';
import Img3 from '../../assets/images/img3.png';
import Img4 from '../../assets/images/img4.png';
import Img5 from '../../assets/images/img5.png';
import Payment from '../../containers/Payment/Payment';

const HomePageItem = () => {
    return (
        <div className="HomePageItem">
            <div className="home-page-item">
                <img src={Img1} alt=""/>
                <p>Spicy seasoned seafood noodles</p>
                <span>$ 2.29</span>
                <span className="food-title">20 Bowls available</span>
            </div>

            <div className="home-page-item">
                <img src={Img2} alt="" />
                <p>Salted Pasta with mushroom sauce</p>
                <span>$ 2.69</span>
                <span className="food-title">11 Bowls available</span>
            </div>

            <div className="home-page-item">
                <img src={Img3} alt="" />
                <p>Beef dumpling in hot and sour soup</p>
                <span>$ 2.99</span>
                <span className="food-title">16 Bowls available</span>
            </div>

            <div className="home-page-item">
                <img src={Img4} alt="" />
                <p>Healthy noodle with spinach leaf</p>
                <span>$ 3.29</span>
                <span className="food-title">22 Bowls available</span>
            </div>

            <div className="home-page-item">
                <img src={Img5} alt="" />
                <p>Hot spicy fried rice with omelet</p>
                <span>$ 3.49</span>
                <span className="food-title">13 Bowls available</span>
            </div>

            <div className="home-page-item">
                <img src={Img5} alt="" />
                <p>Spicy instant noodle with special omelette</p>
                <span>$ 2.29</span>
                <span className="food-title">20 Bowls available</span>
            </div>

            <div className="home-page-item">
                <img src={Img5} alt="" />
                <p>Spicy seasoned seafood noodles</p>
                <span>$ 3.59</span>
                <span className="food-title">17 Bowls available</span>
            </div>

            <div className="home-page-item">
                <img src={Img5} alt="" />
                <p>Spicy seasoned seafood noodles</p>
                <span>$ 2.29</span>
                <span className="food-title">20 Bowls available</span>
            </div>

            <div className="home-page-item">
                <img src={Img5} alt="" />
                <p>Spicy seasoned seafood noodles</p>
                <span>$ 2.29</span>
                <span className="food-title">20 Bowls available</span>
            </div>

            <div className="home-page-item last-item">
                <img src={Img5} alt="" />
                <p>Spicy seasoned seafood noodles</p>
                <span>$ 2.29</span>
                <span className="food-title">20 Bowls available</span>
            </div>

            <div className="home-page-item last-item">
                <img src={Img5} alt="" />
                <p>Spicy seasoned seafood noodles</p>
                <span>$ 2.29</span>
                <span className="food-title">20 Bowls available</span>
            </div>

            <div className="home-page-item last-item">
                <img src={Img5} alt="" />
                <p>Spicy seasoned seafood noodles</p>
                <span>$ 2.29</span>
                <span className="food-title">20 Bowls available</span>
            </div>

        </div>
    )
}

export default HomePageItem;