import { Main } from './styles';

interface MainContainerProps {
    children: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
    return <Main>{children}</Main>;
};

export default MainContainer;
