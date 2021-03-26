import SettingsAside from '../../containers/SettingsAside';
import SettingsMain from '../../containers/SettingsMain';
import './SettingsPage.scss';

const SettingsPage = () => {
    return (
        <div className="SettingsPage">
            <SettingsAside/>
            <SettingsMain/>
        </div>
    )
}

export default SettingsPage;