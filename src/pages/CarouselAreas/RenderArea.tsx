import { useParams } from 'react-router-dom';
import Product from './Product';
import Agile from './Agile';
import UxUi from './UxUi';

const RenderArea: React.FC = () => {
    let { areaId = 'default' } = useParams<{ areaId: string }>();

    const getArea = (areaId: string) => {
        switch (areaId) {
            case 'product':
                return <Product />;
            case 'agile':
                return <Agile />;
            case 'uxuidesign':
                return <UxUi />;
            default:
                return <div>Seção não encontrada</div>;
        }
    };

    return <>{getArea(areaId)}</>;
};

export default RenderArea;
