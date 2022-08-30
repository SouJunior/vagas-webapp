import styled from "styled-components";

const FooterWrapper = styled.footer`
  &::before {
    content: "";
    display: block;
    position: relative;
    height: 1px;
    width: 70%;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.muted};
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <p className="text-center p-5">Copyright &copy; 2022 SouJunior.com Lorem ipsum dolor sum</p>
    </FooterWrapper>
  );
}
