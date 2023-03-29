import styled from "styled-components";


interface NavItemProps {
    active: boolean;
  }

export const Container = styled.nav`
  display: flex;
  padding: 10px;
`;


export const NavItem = styled.div<NavItemProps>`
  border: none;
  color: ${props => (props.active ? "#333" : "#78716c")};
  color: ${props => (props.active ? "#333" : "#78716c")};
  font-weight: ${props => (props.active ? "bold" : "normal")};
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: #333;
  }

  a {
    padding: 10px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border-bottom: ${props => (props.active ? "3px solid #333" : "none")};
  }
`;
