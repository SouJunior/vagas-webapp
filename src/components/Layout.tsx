import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Container } from "./styles/Container.styled";

export default function Layout() {
  return (
    <>
      <Container>
        <Outlet />
      </Container>
      {/* <ExtendedFooter /> */}
    </>
  );
}
