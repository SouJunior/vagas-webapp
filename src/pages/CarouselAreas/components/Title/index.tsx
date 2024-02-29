import * as S from './style';

interface TitleProps {
    children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
    return <S.TitleStyle>{children}</S.TitleStyle>;
};

export default Title;
