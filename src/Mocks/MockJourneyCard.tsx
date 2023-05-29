import styled from 'styled-components';

interface MockJourneyProps {
    Title: string;
    Content: any;
}

interface MockJourneyType {
    [key: string]: MockJourneyProps;
}

const Title = styled.h2`
    font-size: 22px;
    font-weight: bold;
    color: #515050;
    margin-bottom: 20px;
    margin-top: 36px;
`;

const Paragraph = styled.p`
    font-size: 16px;
    margin: 20px 2px;
    color: #515050;

    a {
        text-decoration: underline;
        color: ${({ theme }) => theme.colors.primary};
    }
`;

const List = styled.ul`
    color: #515050;
    margin-left: 20px;

    a {
        text-decoration: underline;
        color: ${({ theme }) => theme.colors.primary};
    }
`;

const Subtitle = styled.h3`
    font-size: 18px;
    font-weight: bold;
    color: #515050;
    margin-bottom: 20px;
    margin-top: 36px;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    text-align: center;
`;

const TableHeader = styled.th`
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 10px;
    color: white;
    border: 1px solid #ddd;
    position: sticky;
    top: -36px;
`;

const TableData = styled.td`
    padding: 10px;
    border: 1px solid #ddd;
`;

const headers = [
    'Agilidade',
    'Produto',
    'IT',
    'UX/UI Design',
    'Data Analytics',
    'Comunicação e Organização',
];

const KeyWords: any = {
    Agilidade: [
        'Frameworks ágeis',
        'Kanban',
        'Scrum',
        'XP',
        'Go Horse',
        'Lean',
        'SAFe',
        'BDD (Behavior Driven Development)',
    ],
    Produto: [
        'Design Thinking',
        'Discovery/Delivery',
        'Double diamond - diamante duplo',
        'Upstream/Downstream',
        'Design Sprint',
        'Inception',
        'Lean Startup',
        'PLD (product led growth)',
        'Modelo Hooked',
        'Teste A/B',
        'UX',
        'Pesquisa com usuário',
        'Entrevista com usuário',
        'Focus group',
        'Benchmarking',
        'Jobs to be done',
        'Discovery Contínuo',
        'Product/Market Fit',
        'MVP',
        'User Story',
        'Job Story',
        'PRD (product requirements document)',
        'Go to Market',
        'Business Case',
        'Business Plan',
        'Product Backlog',
        'Story mapping',
        'SWOT',
        'Mapas de jornada de usuário',
        'Fake door test',
        'Ramen test',
        'Teste da mãe',
        'Canvas de Modelo de Negócio',
        'Canvas de Proposta de Valor',
        'Roadmap',
        'Priorização RICE',
        'Priorização Kano',
        'Priorização Moscow',
        'OKR',
        'NPS',
        'Funil Pirata',
        'North Star Metric',
        'Customer Experience',
        'Customer Success',
        'Product Marketing',
        'Product OPS',
    ],
    IT: [
        'Postman',
        'APIs',
        'restful',
        'SOA',
        'webservices',
        'Jira',
        'Azure DevOps',
        'GitHub',
        'Docker',
        'Kubernetes',
        'SQL',
        'Python',
        'Java',
        'Javascript',
        'Ruby',
        'React',
        'CSS',
        'HTML',
    ],
    'UX/UI Design': [
        'Wireframing (prototipagem)',
        'Figma',
        'Adobe XD',
        'Axure',
        'Invision',
        'Sketch',
        'Photoshop',
        'Marvel',
        'Visio',
        'Lucid',
        'Miro',
        'Bootstrap',
        'Design system',
    ],
    'Data Analytics': [
        'Google Analytics',
        'GTM',
        'Power BI',
        'Looker',
        'Metabase',
        'Data Lake',
        'Tableau',
        'MixPanel',
        'Pendo',
        'HotJar',
        'Qualtrics',
        'Optimizely',
    ],
    'Comunicação e Organização': [
        'Canva',
        'Miro',
        'Slack',
        'Notion',
        'Confluence',
        'Asana',
        'Discord',
        'Google Sites',
        'Sharepoint',
        'Trello',
        'Monday',
    ],
};

const maxLinhas = Math.max(...headers.map((header) => KeyWords[header].length));

export const MockJourneyCard: MockJourneyType = {
    linkedin: {
        Title: 'Se destaque no Linkedin',
        Content: (
            <>
                <Title>1. Escolha imagens adequadas</Title>
                <Paragraph>
                    Ter uma boa foto de perfil no Linkedin traz maior autoridade
                    e faz com que o seu perfil um número maior de visitas. Para
                    se destacar, é preciso considerar um fator muito importante:
                    a escolha das imagens adequadas.
                </Paragraph>
                <Paragraph>
                    É preciso ter atenção para escolher a foto do perfil e a
                    foto de capa do Linkedin, pensando na imagem que se deseja
                    passar à rede. Preferencialmente escolha às fotografias nas
                    quais você está sozinho para o perfil — ou seja, deixe os
                    retratos divertidos com amigos, familiares e pets para
                    outras redes sociais — e vestido adequadamente para o que se
                    pretende. Para a imagem de capa, escolha uma imagem que
                    comunique com a sua área de atuação, que ajude a conectar
                    uma mensagem.
                </Paragraph>
                <Paragraph>
                    O site{' '}
                    <a href="https://www.snappr.com/photo-analyzer/">snappr</a>{' '}
                    pode ajduar na escolha da foto ideal para o perfil do
                    Linkedin.
                </Paragraph>
                <Title>2. Nome e título</Title>
                <Paragraph>
                    Um nome curto. Evite títulos de certificações porque não é
                    tão importante nesse momento. Use nome e sobrenome simples
                    para que as pessoas da sua rede lembrem com facilidade
                    quando não tiverem vendo o seu perfil. O título tem que ser
                    estratégico para o que você quer. Se quer um emprego na área
                    de produto, adicione o cargo pretendido. Se já estiver
                    trabalhando, adicione o título da função que desempenha e
                    não o que está registrado na carteira de trabalho.
                </Paragraph>
                <Title>3. Competências e Habilidades</Title>
                <Paragraph>
                    Deixe seu perfil atrativo relacionando suas competências e
                    habilidades com o seu histórico de vida. Para perfis
                    juniores, vale relacionar os trabalhos voluntários, projetos
                    na universidade, escola etc.
                </Paragraph>
                <Paragraph>
                    Faça testes de habilidades disponível no Linkedin, adicione
                    e compartilhe os selos que conseguir.
                </Paragraph>
                <Paragraph>
                    Ter depoimentos de pessoas que tiveram interação contigo no
                    passado é uma ótima forma de atestar as suas habilidades e
                    competências. As competências são uma das maiores chaves de
                    busca dos recrutadores, adicione o máximo que puder.
                </Paragraph>
                <Title>4. Experiências</Title>
                <Paragraph>
                    Linkedin não é o seu currículo, mas é importante ter as
                    informações sincronizadas. Não copie e cole as informações,
                    adicione as suas experiências de forma inspiracional,
                    indicando alguns resultados obtidos.
                </Paragraph>
                <Title>5. Personalize a sua URL</Title>
                <Paragraph>
                    Deixe que as pessoas te encontrem de forma fácil, quanto
                    mais clean e relacionado com o seu nome, melhor!
                </Paragraph>

                <List>
                    <li>acesse a sua conta no LinkedIn;</li>
                    <li>clique em “perfil”;</li>
                    <li>em seguida, clique em “editar perfil”;</li>
                    <li>
                        insira a URL desejada, com seu nome e sobrenome, por
                        exemplo.
                    </li>
                </List>

                <Title>6. Interaja</Title>
                <Paragraph>
                    O Linkedin é uma rede social que promove a interação entre
                    os usuários. Interaja em comentários e postagens de forma
                    estratégica. Faça comentários pertinentes e evite
                    posicionamento politico e de cunho racistas. Use em seu
                    benefício.
                </Paragraph>
            </>
        ),
    },
    curriculo: {
        Title: 'Como preparar um curriculo Junior:',
        Content: (
            <>
                <Title>
                    Destaque a sua formação acadêmica e extracurricular
                </Title>
                <Paragraph>
                    Destaque a sua formação acadêmica. Não se contente apenas em
                    informar onde você cursou o ensino médio ou o curso
                    superior.
                </Paragraph>
                <Paragraph>
                    Por exemplo, se você estuda Letras, um curso extracurricular
                    em Linguagem de Sinais (LIBRAS) ou Criatividade na Escrita
                    contam como importantes diferenciais que complementam a sua
                    formação acadêmica. O mesmo vale para Palestras e Workshops
                    relacionados à vaga desejada.
                </Paragraph>
                <Paragraph>
                    Esse é um momento de mostrar que, mesmo que lhe falte
                    experiência profissional, você está sempre em busca de
                    aprendizados e tem um foco de carreira definido, isso
                    enriquecerá bastante o seu primeiro currículo e vai
                    diferenciá-lo dos concorrentes.
                </Paragraph>
                <Paragraph>
                    Ao preencher esse campo, você deve começar da formação mais
                    recente para baixo, sempre preenchendo o nome do curso, da
                    instituição e o ano de conclusão ou previsão de término.
                </Paragraph>
                <Paragraph>
                    Não se esqueça também dos conhecimentos de idiomas, sendo
                    realista em seu domínio da língua. Por exemplo:
                </Paragraph>

                <List>
                    <li>
                        Inglês — Ípsilon Idiomas — 2015 Nível Intermediário em
                        Leitura, com facilidade em escrever pequenos parágrafos.
                        Nível básico em conversação.
                    </li>
                </List>

                <Title>
                    Mencione sua experiência com trabalhos voluntários
                </Title>
                <Paragraph>
                    Caso você já tenha feito trabalho voluntário ou pequenos
                    serviços, mesmo que informalmente, como ajudar em um
                    comércio local, é importante destacar essas informações em
                    seu currículo. Os recrutadores valorizam candidatos que
                    demostram aproveitar as oportunidades que surgem para se
                    desenvolverem pessoal e profissionalmente.
                </Paragraph>
                <Title>Destaque suas qualificações profissionais</Title>
                <Paragraph>
                    Ao escrever o primeiro currículo, o campo “Experiência
                    Profissional” pode ser substituído pelas suas qualificações,
                    as características e conhecimentos que você acumulou ao
                    longo dos anos e que o ajudarão na vaga pretendida.
                </Paragraph>
                <Paragraph>
                    Assim, você precisa fazer um exercício de autoconhecimento.
                    Pense nas atribuições da vaga que você está disputando,
                    quais as habilidades e competências que ela exige e que você
                    possui?
                </Paragraph>
                <Paragraph>
                    Por exemplo, uma vaga como “Estágio em Social Media” exige
                    candidatos que tenham afinidade com redes sociais,
                    facilidade em escrever para públicos distintos e
                    conhecimentos em métricas como engajamento, entre outros. E
                    você percebe que possui as seguintes qualificações, se:
                </Paragraph>
                <List>
                    <li>é heavy user das redes sociais</li>
                    <li>relaciona-se bem com as pessoas;</li>
                    <li>
                        tem conhecimentos em ferramentas como Photoshop e Corel,
                        que o ajudarão a criar as artes necessárias para as
                        redes sociais;
                    </li>
                    <li>
                        tem senso de organização, essencial para o planejamento
                        de conteúdo;
                    </li>
                    <li>
                        tem criatividade para escrever para públicos diversos;
                    </li>
                    <li>pensa rápido há hora de produzir um conteúdo novo.</li>
                </List>
                <Paragraph>
                    São itens que você pode destacar como qualificações
                    profissionais, aumentando a chance de conseguir a vaga.
                </Paragraph>
                <Title>Informe sobre certificações e hobbies</Title>
                <Paragraph>
                    Outra forma de valorizar ainda mais o seu primeiro currículo
                    é destacar eventuais certificados e hobbies que ajudam a
                    demostrar o seu perfil e seus conhecimentos.
                </Paragraph>
                <Paragraph>
                    No exemplo do tópico anterior, além de ter algumas
                    qualificações-chave, você também possui os seguintes
                    certificados:
                </Paragraph>
                <List>
                    <li>Inbound Marketing — Escola X - 2016</li>
                    <li>Produção de Conteúdo WEB — Escola Y - 2017</li>
                </List>
                <Paragraph>
                    Além disso, ter na fotografia, por exemplo, um Hobby ajuda a
                    mostrar que você tem um olhar criativo e é atento a
                    detalhes, coisas que farão a diferença para seus
                    avaliadores.
                </Paragraph>
                <Title>Não esqueça das informações complementares</Title>
                <Paragraph>
                    Muitas vezes existem informações que não cabem nos tópicos
                    anteriores, mas são essenciais para o seu primeiro currículo
                    ou para aumentar a chance de conseguir a vaga, tais como:
                </Paragraph>
                <List>
                    <li>
                        Disponibilidade de viagem ou mudança: se você está
                        tentando um emprego em outra cidade. Se você tem família
                        no outro endereço, por exemplo, você pode destacar essa
                        informação.
                    </li>
                    <li>
                        Se você possui alguma deficiência, como auditiva, você
                        pode indicar que “tem perda auditiva moderada, faz uso
                        de aparelho e se comunica bem verbalmente” e apontar se
                        há alguma necessidade de adaptações ou não.
                    </li>
                </List>
                <Title>
                    Saiba o que evitar na hora de escrever o seu primeiro
                    currículo
                </Title>
                <Paragraph>
                    Por fim, é necessário tomar alguns cuidados para não deixar
                    o seu currículo muito extenso ou difícil de ler. Confira
                    abaixo o que deve ser evitado.
                </Paragraph>
                <Subtitle>Formatação e Ortografia</Subtitle>
                <List>
                    <li>
                        seja direto, escreva somente o que for necessário e de
                        forma simples;
                    </li>
                    <li>evite erros ortográficos;</li>
                    <li>evite ultrapassar mais de duas folhas A4;</li>
                    <li>
                        evite fontes cursivas ou de difícil leitura ao escrever
                        o currículo. Prefira a Arial ou Times New Roman, mais
                        tradicionais e de fácil leitura;
                    </li>
                    <li>evite assinar e datar o currículo;</li>
                    <li>
                        evite encher o currículo de cores, no máximo use o
                        Negrito para destacar os tópicos e as informações
                        relevantes.
                    </li>
                </List>
                <Subtitle>Dados Pessoais e Referências </Subtitle>

                <List>
                    <li>
                        evite colocar documentos, nomes dos pais e agregados;
                    </li>
                    <li>
                        contatos de referências só devem ser passados quando
                        solicitados em uma eventual entrevista;
                    </li>
                    <li>
                        o mesmo serve para foto e pretensão salarial, só devem
                        constar no currículo se for solicitado no anúncio da
                        vaga.
                    </li>
                </List>
                <Subtitle> Conhecimentos e Habilidades</Subtitle>

                <List>
                    <li>
                        Não exagere em seus conhecimentos e habilidades de
                        informática e idiomas, serão detalhes facilmente
                        descobertos em uma entrevista, caso não sejam verídicos.
                    </li>
                </List>
                <Paragraph>
                    Como você pode ver, criar o primeiro currículo sem ter
                    experiência profissional não precisa ser complicado.
                    Seguindo as nossas dicas, você conseguirá montar um
                    currículo atraente e que reforçarão as suas habilidades e
                    conhecimentos, aumentando ainda mais as suas chances.
                </Paragraph>
            </>
        ),
    },
    processoSeletivo: {
        Title: 'Se prepare para o processo seletivo:',
        Content: (
            <>
                <Paragraph>Se prepare para processo seletivos!</Paragraph>
                <Paragraph>
                    Entrevista com RH, entrevista com área técnico, fit cultural
                    etc. são muitas as etapas para conseguir ingressar ao
                    mercado de trabalho.
                </Paragraph>
                <Paragraph>
                    Veja algumas dicas valiosas para mandar bem nos processos
                    seletivos:
                </Paragraph>
                <List>
                    <li>Saiba seu CV e seu Linkedin de cor e salteado;</li>
                    <li>
                        Tenha um roteirinho na manga com um baita storytelling
                        daquela perguntinha marota “me fale mais sobre você”; e
                    </li>
                    <li>
                        Saiba o que você quer. PJ ou CLT? Qual faixa salarial?
                        Que tipo de vaga? Que tipo de empresa? Presencial,
                        híbrido ou remoto? Nessas perguntas, não pode hesitar.
                    </li>
                    <li>
                        Saiba a sua pretensão salarial e a média salarial
                        oferecido pela empresa. É possível encontrar no site:{' '}
                        <a href="https://www.glassdoor.com.br/Sal%C3%A1rios/index.htm">
                            https://www.glassdoor.com.br/Sal%C3%A1rios/index.htm
                        </a>
                    </li>
                    <li>Saiba a diferença entre a contratação PJ e CLT;</li>
                    <li>Pesquise sobre as pessoas da empresa no Linkedin;</li>
                    <li>Se conecte com as pessoas e envie mensagens;</li>
                    <li>
                        Criar conexão é uma via de mão dupla, os dois tem que
                        ganhar nesse processo;
                    </li>
                    <li>
                        Antes das entrevistas relaxe, faça coisas que agucem a
                        sua criatividade e te faça relaxar;
                    </li>
                    <li>Seja você mesmo!</li>
                </List>
            </>
        ),
    },
    palavrasChave: {
        Title: 'Palavas-chaves na área tech:',
        Content: (
            <>
                <Table>
                    <thead>
                        <tr>
                            {headers.map((header, index) => (
                                <TableHeader key={index}>{header}</TableHeader>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {[...Array(maxLinhas)].map((_, rowIndex) => (
                            <tr key={rowIndex}>
                                {headers.map((header, columnIndex) => (
                                    <TableData key={columnIndex}>
                                        {KeyWords[header][rowIndex] || ''}
                                    </TableData>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </>
        ),
    },
};
