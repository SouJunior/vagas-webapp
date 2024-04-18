import { Container, ImgWrap, Paragrafo } from '../styles';
import { UserSquare } from 'phosphor-react';

const ResumoLinkedinContent: React.FC = () => {
    return (
        <Container>
            <ImgWrap>
                <UserSquare size={200} color="#046AD0" opacity="0.6" />
            </ImgWrap>
            <Paragrafo>
                A seção de resumo oferece muita liberdade, mas aqui está uma
                fórmula infalível de 8 parágrafos para se destacar de acordo com
                a especialista em LinkedIn Mindi Rosser.
            </Paragrafo>
            <br />
            <Paragrafo>
                <ul>
                    <li>
                        Faça uma pergunta baseada ou faça uma declaração ousada
                        que estimule o leitor a continuar.
                    </li>
                    <li>
                        Mostre ao seu alvo que você tem a solução para resolver
                        o problema dele.
                    </li>
                    <li>Mostre a profundidade de sua experiência.</li>
                    <li>
                        Elabore em suas áreas de especialização, fornecendo
                        exemplos tangíveis.
                    </li>
                    <li> Fale sobre o seu superpoder.</li>
                    <li>Divulgue suas realizações e elogios.</li>
                    <li>
                        Diga-lhes por que você é apaixonado pelo seu trabalho.
                    </li>
                    <li>Dê-lhes uma chamada à ação.</li>
                    <li>
                        Dica profissional: escreva esta seção para a posição
                        desejada. Mostrar progressão na carreira. Use
                        palavras-chave comumente encontradas nas descrições dos
                        empregos que você deseja ter.
                    </li>
                </ul>
            </Paragrafo>
        </Container>
    );
};

export default ResumoLinkedinContent;
