import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Container } from "./styles/Container.styled";

export default function Layout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      {/* <ExtendedFooter /> */}
    </>
  );
}
