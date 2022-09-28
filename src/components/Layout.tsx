import { Outlet } from "react-router-dom";
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
