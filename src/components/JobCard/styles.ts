import styled from "styled-components";

interface JobTypeProps {
  backgroundColor: string;
}

export const Wrapper = styled.article`
  position: relative;
`;
export const Header = styled.header``;
export const Title = styled.h1``;
export const JobType = styled.small<JobTypeProps>`
  background-color: none
  }};
`;
export const Description = styled.div``;
export const Footer = styled.footer``;
export const Text = styled.p`
  word-wrap: break-word;
`;
