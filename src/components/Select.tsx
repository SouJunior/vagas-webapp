import { FunctionComponent } from "react";
import styled from "styled-components";

interface SelectWrapperProps {
  children: React.ReactNode;
}

export const SelectWrapper = styled.select`
  height: 50px;
  width: 535px;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
`;

export const Select: FunctionComponent<SelectWrapperProps> = ({ children }) => {
  return <SelectWrapper>{children}</SelectWrapper>;
};
