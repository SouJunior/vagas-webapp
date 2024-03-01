import { SectionContainerItens } from './style';

interface ContainerItensProps {
    children: React.ReactNode;
}

const ContainerItens: React.FC<ContainerItensProps> = ({ children }) => {
    return <SectionContainerItens>{children}</SectionContainerItens>;
};

export default ContainerItens;
