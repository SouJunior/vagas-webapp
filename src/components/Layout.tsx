import { Outlet } from 'react-router-dom';
import { Container } from './styles/Container.styled';
import { Footer } from './Footer';

export default function Layout() {
    return (
        <>
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </>
    );
}
