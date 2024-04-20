import { Container, ImgWrap, Paragrafo } from '../styles';
import { Desktop } from 'phosphor-react';

const ExperienciaProfissional: React.FC = () => {
    return (
        <Container>
            <ImgWrap>
                <Desktop size={200} color="#046AD0" opacity='0.6' />
            </ImgWrap>
            <Paragrafo>
                Não se contente apenas em informar onde você cursou o ensino
                médio ou o curso superior. Por exemplo, se você estuda Letras,
                um curso extracurricular em Linguagem de Sinais (LIBRAS) ou
                Criatividade na Escrita contam como importantes diferenciais que
                complementam a sua formação acadêmica. O mesmo vale para
                Palestras e Workshops relacionados à vaga desejada.
            </Paragrafo>
            <br />
            <Paragrafo>
                Esse é um momento de mostrar que, mesmo que lhe falte
                experiência profissional, você está sempre em busca de
                aprendizados e tem um foco de carreira definido, isso
                enriquecerá bastante o seu primeiro currículo e vai
                diferenciá-lo dos concorrentes.
            </Paragrafo>
            <br />
            <Paragrafo>
                Ao preencher esse campo, você deve começar da formação mais
                recente para baixo, sempre preenchendo o nome do curso, da
                instituição e o ano de conclusão ou previsão de término. Não se
                esqueça também dos conhecimentos de idiomas, sendo realista em
                seu domínio da língua. Por exemplo:
            </Paragrafo>
            <br />
            <Paragrafo>
                Inglês — Ípsilon Idiomas — 2015 - Nível Intermediário em
                Leitura, com facilidade em escrever pequenos parágrafos. Nível
                básico em conversação.
            </Paragrafo>
        </Container>
    );
};

export default ExperienciaProfissional;
