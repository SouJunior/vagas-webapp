import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FDFDFD;
    text-align: center;
`

export const Header = styled.header`
    height: 95px;
    background: ${({ theme }) => theme.colors.primaryLight};
`

export const Logo = styled.div`
    height: 95px;
    display: flex;
    justify-content: center;
`

export const MainText = styled.h1`
    color: ${({ theme }) => theme.colors.primaryLight};
    font-size: 40px;
    font-weight: 700;
    align-self: center;
    margin-top: 70px;
    margin-right: 7px;
    margin-left: 7px;
`
export const Icon = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
`

export const Text = styled.p`
    color: ${({ theme }) => theme.colors.primaryLight};
    font-size: 32px;
    font-weight: 500;
    align-self: center;
    margin-top: 50px;
    margin-right: 7px;
    margin-left: 7px;
`
export const Button = styled.button`
    background: ${({ theme }) => theme.colors.primaryLight};
    color: #FDFDFD;
    width: 180px;
    height: 48px;
    border-radius: 6px;
    align-self: center;
    margin-top: 50px;
    margin-bottom: 50px;

`
