import { RiArrowLeftLine as ArrowLeftIcon } from "react-icons/ri";
import styled from "styled-components";
import logoIconName from "../assets/imgs/logo-icon-name-h.svg";

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  border-bottom: 1px solid ${({ theme }) => theme.colors.muted};

  svg {
    fill: ${({ theme }) => theme.colors.primary};
  }

  h1 {
    color: ${({ theme }) => theme.colors.primary};
  }

  h2 {
    color: ${({ theme }) => theme.colors.mutedDarker};
  }
`;

export const Divider = styled.div`
  height: 5px;
  width: 5px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: ${({ theme }) => theme.colors.mutedDark};
  border-radius: 100%;
`;

export default function Header() {
  return (
    <HeaderWrapper className="relative flex items-center justify-center p-5 mb-4 h-16">
      <ArrowLeftIcon className="absolute left-8 text-3xl" />
      <img
        width={130}
        src={logoIconName}
        alt="Logotipo estendida mais ícone à esquerda da SouJunior"
      />
      <Divider />
      <h2 className="text-base font-semibold">Central de denúncias</h2>
    </HeaderWrapper>
  );
}
