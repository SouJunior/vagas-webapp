import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Container } from "./styles/Container.styled";

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
