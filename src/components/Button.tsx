import React from "react"
import { ButtonWrapper } from "./styles/Button.styled"

export const Button : React.FC<any> = ({background, border, children}) => {
  return(
    <ButtonWrapper background={background} border={border}>
      {children}
    </ButtonWrapper>
  )
}