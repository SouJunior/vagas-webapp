import { Outlet } from "react-router-dom";
import { Container } from "./styles/Container.styled";

export default function Layout() {
  return (
    <>
      <Container>
        <Outlet />
      </Container>
      {/* Aqui irá o Footer (rodapé) da página.
      *** Sinta-se livre para nomeá-lo como quiser. Abaixo há uma recomendação,
      *** baseado na issue criada para essa adição. (remova esse comentário)
      */}
      {/* <ExtendedFooter /> */}
    </>
  );
}
