import { Outlet } from 'react-router-dom';
import { Container } from './styles/Container.styled';
import Index from './Portal/Footer';

export default function Layout() {
    return (
        <>
            <Container>
                <Outlet />
            </Container>
            <Index />
        </>
    );
}
