import styled from "styled-components";

interface JobTypeSC {
  backgroundColor: string;
}

export const Wrapper = styled.article`
  position: relative;
`;
export const Header = styled.header``;
export const Title = styled.h1``;
export const JobType = styled.span<JobTypeSC>`
  background-color: ${(p) => {
    switch (p.backgroundColor) {
      case "Júnior":
        return `rgb(99 102 241);`;
      case "Trainee":
        return `rgb(34 197 94);`;
      case "Estágio":
        return `rgb(100 116 139);`;
      default:
        return `rgb(99 102 241);`;
    }
  }};
`;
export const Description = styled.div``;
export const Footer = styled.footer``;
export const Text = styled.p``;
