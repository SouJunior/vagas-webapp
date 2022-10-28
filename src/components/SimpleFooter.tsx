import styled from 'styled-components';

const SimpleFooterWrapper = styled.footer`
    &::before {
        content: '';
        display: block;
        position: relative;
        height: 1px;
        width: 70%;
        margin: 0 auto;
        background-color: ${({ theme }) => theme.colors.muted};
    }
`;

export const SimpleFooter = () => {
    return (
        <SimpleFooterWrapper>
            <p className="text-center p-5">
                Copyright &copy; 2022 SouJunior.com Lorem ipsum dolor sum
            </p>
        </SimpleFooterWrapper>
    );
};
