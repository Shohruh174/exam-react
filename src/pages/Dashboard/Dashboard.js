import Customer from '../../containers/Customer/Customer';
import DashboardTop from '../../containers/DashboardTop';
import MostOrder from '../../containers/MostOrder/MostOrder';
import MostType from '../../containers/MostType/MostType';

import './Dashboard.scss';

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <div className="dashboard-inner">
                <DashboardTop/>
                <Customer/>
            </div>
            <div>
            <MostOrder/>
            <MostType/>
            </div>
            
        </div>
    )
}

export default Dashboard;