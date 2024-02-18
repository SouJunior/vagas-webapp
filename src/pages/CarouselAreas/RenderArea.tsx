import { useParams } from "react-router-dom"
import Product from "./Product";
import Agile from "./Agile";

const RenderArea: React.FC = () => {

    let { areaId = 'default' } = useParams<{ areaId: string }>();

    const getArea = (areaId: string) => {
        switch (areaId) {
            case 'product':
                return <Product/>
            case 'agile':
                return <Agile/>
            default:
                return <div>Seção não encontrada</div>
        }
    }

    return (
        <>
            {getArea(areaId)}
        </>
    )
}

export default RenderArea