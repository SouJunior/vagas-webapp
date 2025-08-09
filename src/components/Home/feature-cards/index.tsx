import { FeatureCard } from './feature-card';

export const FeatureCards: React.FC = ({}) => {
    return (
        <>
            <FeatureCard
                title={'Porque devemos utilizar a SJ?'}
                description={
                    'A SJ é uma ferramenta poderosa para desenvolvimento.'
                }
                imgSrc={'/path/to/image.jpg'}
                imgAlt={'Descrição da imagem'}
            />
        </>
    );
};
