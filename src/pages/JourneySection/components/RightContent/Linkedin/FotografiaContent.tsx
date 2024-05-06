import { Camera } from 'phosphor-react';
import { Container, ImgWrap, Paragrafo } from '../styles';

const FotografiaContent: React.FC = () => {
    return (
        <Container>
             <ImgWrap>
                <Camera size={200} color="#046AD0" opacity="0.6" />
            </ImgWrap>
            <Paragrafo>
                Em uma pesquisa da Passport-Photo Online, mais de 80% dos
                recrutadores disseram que uma foto do LinkedIn era um fator
                importante de classificação. Já 8 em cada 10 concordaram que a
                foto do perfil de um candidato no LinkedIn foi usada como uma
                forma de conhecer melhor a pessoa. Mesmo que os entrevistados
                concordem 82% das vezes que não se deve julgar um livro pela
                capa, isso acontece. Os candidatos a emprego podem ser
                rejeitados por sua foto de perfil do LinkedIn em até 70% das
                vezes.
            </Paragrafo>
            <br />
            <Paragrafo>
                Sua fotografia é sua primeira impressão online e precisa ser
                profissional. Veja algumas dicas rápidas:
            <ul>
                <li>Você precisa parecer acessível;</li>
                <li>
                    Certifique-se de que seu rosto esteja claramente visível;
                </li>
                <li>
                    Use seu traje habitual (não o pijama ou o terno de poder);
                </li>
                <li>
                    E, sob nenhuma circunstância você deve ter outra pessoa em
                    sua foto!
                </li>
            </ul>
            </Paragrafo>
            <br />
            <Paragrafo>
                Para avaliar sua foto de perfil Linkedin, o site abaixo pode ser
                útil: <a href="https://www.snappr.com/photo-analyzer/" style={{ color: '#2E90FA', pointerEvents: 'auto' }}>https://www.snappr.com/photo-analyzer/</a>.

            </Paragrafo>
        </Container>
    );
};

export default FotografiaContent;
