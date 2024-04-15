import { Container, Img, Paragrafo } from "../styles";
import Contract from "../../../../../assets/imgs/contract.svg"

const ExperienciaContent: React.FC = () => {
    return (
        <Container>
            <Img src={Contract} alt="Ícone de um contrato"/>
            <Paragrafo>
                Esta parte é o seu “currículo” do LinkedIn. Se a empresa não for
                muito conhecida, inclua um breve resumo do que a empresa faz,
                liste seu cargo e pontos destacando suas responsabilidades. Este
                é um ótimo lugar para adicionar palavras-chave. Como o LinkedIn
                não possui um “teclado” robusto, use este truque: digite um
                hífen seguido pelo sinal de maior que no teclado para formar uma
                seta para usar como marcador. Mostre progressão na carreira, mas
                mantenha-a em 3 ou 4 pontos principais.
            </Paragrafo>
            <br />
            <Paragrafo>
                Infelizmente, o preconceito de idade é real. Ao listar sua
                educação, você não é obrigado a colocar datas. Então, se você se
                formou na faculdade na década de 1990, pule as datas! Inclua
                cursos de certificação relevantes para o cargo em sua seção de
                educação.
            </Paragrafo>
            <br />
            <Paragrafo>
                Dica profissional: use nomes de empresas e escolas. Quando você
                fizer isso, uma imagem em miniatura aparecerá em seu perfil. Não
                é nada demais, mas esteticamente parece mais bonito e,
                infelizmente, os livros são julgados por suas capas.
            </Paragrafo>
        </Container>
    );
};

export default ExperienciaContent;
