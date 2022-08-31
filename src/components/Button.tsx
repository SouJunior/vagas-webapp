import React from "react"
import { ButtonWrapper } from "./styles/Button.styled"

export const Button : React.FC<any> = ({background, children}) => {
  return(
    <ButtonWrapper background={background}>
      {children}
    </ButtonWrapper>
  )
}