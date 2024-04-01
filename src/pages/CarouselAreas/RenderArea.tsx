import { useParams } from 'react-router-dom';
import Product from './Product';
import Agile from './Agile';
import UxUi from './UxUi';
import DevOps from './DevOps';
import Bussiness from './Bussiness';
import TechRecruiter from './TechRecruiter';
import SocialMedia from './SocialMedia';
import FrontEnd from './FrontEndPage';
import BackEnd from './BackEndPage';
import DataPage from './DataPage';
import Mobile from './MobilePage';
import Qa from './Qa';

const RenderArea: React.FC = () => {
    let { areaId = 'default' } = useParams<{ areaId: string }>();

    const getArea = (areaId: string) => {
        switch (areaId) {
            case 'bussiness':
                return <Bussiness />;
            case 'techrecruiter':
                return <TechRecruiter />;
            case 'product':
                return <Product />;
            case 'agile':
                return <Agile />;
            case 'socialmedia':
                return <SocialMedia />;
            case 'uxuidesign':
                return <UxUi />;
            case 'frontend':
                return <FrontEnd />;
            case 'backend':
                return <BackEnd />;
            case 'data':
                return <DataPage />;
            case 'mobile':
                return <Mobile />;
            case 'qa':
                return <Qa />;
            case 'devops':
                return <DevOps />;
            default:
                return <div>Seção não encontrada</div>;
        }
    };

    return <>{getArea(areaId)}</>;
};

export default RenderArea;
