import  styled, { css }  from 'styled-components'

interface Props {
    active: boolean;
  }

export const NavBar = styled.nav<Props>`
    display: flex;
    border: 1px solid rgba(0, 0, 0, 0.05);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
    gap: 12px;
    align-items: center;
    top: 0;
    background-color: #fff;
    justify-content: space-between;
    width: 100vw;
    padding: 20px;   
    height: 132px;
    position: fixed;
    transition: height 0.3s ease-in-out

    ${({ active }) => active && css`
    height: 38px;
    background-color: #fff;
    height: 100px;
    padding: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
    transition: height 0.3s ease-in-out
    `}
`

export const NavTitle = styled.div`
    color: white;
    display: flex;
    font-size: 44px;
    gap: 20px;
    font-weight: bold;
    place-self: center;
    transition: all 200ms ease-out;

    img {
        margin-left: 38px;
    }
`

export const RegisterButton = styled.button<Props>`
    background-color: ${({ theme }) => theme.colors.primary};
    font-size: 18px;
    font-weight: 600;
    width: 262px;
    height: 52px;
    color: #fff;
    border-radius: 4px;

    :hover {
        opacity: 0.8;
    }

    ${({ active }) =>
    active
      ? css`
          width: 220px;
          height: 42px;
          transition: all 300ms ease-in-out;
          font-size: 16px;	
        `
      : css`
          width: 262px;
          height: 52px;
          transition: all 300ms ease-in-out;
        `}
`

export const LoginButton = styled(RegisterButton)<Props>`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 18px;
    font-weight: 600;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.primary};

    :hover {
        opacity: 0.8;
    }
`

export const Main = styled.main`
    display: flex;
    margin-top: 182px;
    margin-bottom: 42px;
    gap: 48px;
    justify-content: center;
    align-items: center;
`;

export const MainSearchFilter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const Title = styled.h2`
    font-weight: 600;
    font-size: 26px;
    color: #515050;
    line-height: 31px;
    margin-bottom: 16px;
`;

export const FormWrapper = styled.div<Props>`
    position: relative;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    width: 100%;
    display: flex;
    justify-content: center;

    ${({ active }) => active && css`
    height: 40px;
    position: fixed;
    background-color: #fff;
    height: 70px;
    padding: 12px;
    top: 100px;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 999;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
    `}
`;

export const Form = styled.form`
    display: flex;
    gap: 28px;
`;

export const Input = styled.input<Props>`
     width: 720px;
     height: 52px;
     border: 1.5px solid #515151;
     border-radius: 52px;
     padding: 0 20px;
     text-align: center;
     color: #515151;
     transition: all 300ms ease-in-out;

     :focus {
        outline-color: ${({ theme }) => theme.colors.primary};
     }

    ${({ active }) => active && css`
        width: 520px;
        height: 42px;
    `}
`

export const SearchButton = styled(RegisterButton)<Props>`
    text-align: center;
`;

export const JobsInfo = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #515050;
    max-width: 720px;
    text-align: center;
`;

export const Image = styled.img`
    width: 220px;
`;

export const Divider = styled.div`
    width: 100%;
    height: 160px;
    border: 2px solid rgba(0, 0, 0, 0.9);
    opacity: 0.6;
`;

export const OurSitesSection  = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 80px;
    margin-bottom: 96px;
`;

export const CardWrapper = styled.div`
    display: flex;
    margin-top: 52px;
    gap: 156px;
`;