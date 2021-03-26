import './AsideTitle.scss';
import Img1 from '../../assets/images/img1.png';
import Img2 from '../../assets/images/img2.png';
import Img3 from '../../assets/images/img3.png';
import Img4 from '../../assets/images/img4.png';
import Img5 from '../../assets/images/img5.png';
import Delete from '../../assets/images/icons/delete.svg';

const AsideTitle = () => {
    return (
        <div className="AsideTitle">

            <div className="aside-title">
                <div className="aside-title-top">
                    <div className="top-img">
                        <img src={Img1} alt="" />
                        <div>
                            <p>Spicy seasoned sea...</p>
                            <span className="aside-title-sum">$ 2.29</span>
                        </div>
                    </div>
                    <span className="aside-title-value">2</span>
                    <span className="aside-title-total">$ 4,58</span>
                </div>

                <div className="aside-bottom">
                    <input type="text" placeholder="Please, just a little bit spicy only."/>
                    <button><img src={Delete} alt=""/></button>
                </div>
            </div>

            <div className="aside-title">
                <div className="aside-title-top">
                    <div className="top-img">
                        <img src={Img2} alt="" />
                        <div>
                            <p>Salted pasta with mu...</p>
                            <span className="aside-title-sum">$ 2.69</span>
                        </div>
                    </div>
                    <span className="aside-title-value">1</span>
                    <span className="aside-title-total">$ 2.69</span>
                </div>

                <div className="aside-bottom">
                    <input type="text" placeholder="Order Note..."/>
                    <button><img src={Delete} alt=""/></button>
                </div>
            </div>

            <div className="aside-title">
                <div className="aside-title-top">
                    <div className="top-img">
                        <img src={Img3} alt="" />
                        <div>
                            <p>Spicy instant noodle...</p>
                            <span className="aside-title-sum">$ 3.49</span>
                        </div>
                    </div>
                    <span className="aside-title-value">1</span>
                    <span className="aside-title-total">$ 2.69</span>
                </div>

                <div className="aside-bottom">
                    <input type="text" placeholder="Order Note..."/>
                    <button><img src={Delete} alt=""/></button>
                </div>
            </div>

            <div className="aside-title">
                <div className="aside-title-top">
                    <div className="top-img">
                        <img src={Img4} alt="" />
                        <div>
                            <p>Spicy instant noodle...</p>
                            <span className="aside-title-sum">$ 3.49</span>
                        </div>
                    </div>
                    <span className="aside-title-value">3</span>
                    <span className="aside-title-total">$ 10,47</span>
                </div>

                <div className="aside-bottom">
                    <input type="text" placeholder="Order Note..."/>
                    <button><img src={Delete} alt=""/></button>
                </div>
            </div>

        </div>
    )
}

export default AsideTitle;