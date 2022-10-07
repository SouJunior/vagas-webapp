import { Outlet } from "react-router-dom";

import { Container } from "../styles/Container";
import { ExtendedFooter } from "../ExtendedFooter";

export default function Layout() {
  return (
    <>
      <Container>
        <Outlet />
      </Container>
      <ExtendedFooter />
    </>
  );
}
