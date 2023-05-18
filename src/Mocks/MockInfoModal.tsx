interface ModalInfoItem {
    title: string;
    description: any;
    source: string;
}

interface ModalInfoType {
    [key: string]: ModalInfoItem;
}

const LinkStyles = {
    color: 'blue',
    textDecoration: 'underline',
    fontWeight: '500',
};

export const ModalInfo: ModalInfoType = {
    Bussiness: {
        title: 'O que faz um profissional de Business Intelligence ?',
        description: (
            <>
                <p>
                    O profissional de Business Intelligence ocupa um cargo
                    estratégico dentro da empresa, pois, com base nos dados
                    coletados e nos relatórios gerados, é capaz de traçar
                    caminhos e pensar em soluções para tornar o negócio mais
                    eficiente. Ele está atento a todos os fatores que
                    influenciam diretamente o sucesso de uma organização.
                    <br />
                    <br /> Esse profissional é capaz de fornecer insights para
                    as lideranças, fazendo com que a empresa se destaque no
                    mercado. Ele tem a responsabilidade de planejar, organizar,
                    executar e analisar as estratégias de uma empresa com base
                    nos dados coletados.
                    <br />
                    <br />
                    Para isso, o profissional de BI utiliza de um olhar
                    analítico afiado para identificar padrões, reconhecer pontos
                    a melhorar, gerenciar riscos, apontar soluções e prever
                    cenários futuros.
                </p>
            </>
        ),
        source: 'https://www.guiadacarreira.com.br/blog/business-intelligence',
    },
    TechRecruiter: {
        title: 'O que faz um Tech Recruiter?',
        description: (
            <>
                <p>
                    Os recrutadores técnicos lidam com um nicho de profissionais
                    bastante específico e bem diferente dos demais, sendo
                    responsáveis pela aquisição e triagem de currículos, assim
                    como a procura de profissionais capacitados.
                    <br />
                    <br />
                    Além disso, eles são responsáveis pela{' '}
                    <b>criação de estratégias para o processo seletivo</b>
                    , assim como escrever descrições de vagas apropriadas
                    (discutimos a importância disso mais a frente).
                    <br />
                    <br />
                    Uma das principais diferenças é que os{' '}
                    <b>profissionais de TI ainda são escassos</b>, ou seja, a
                    grande maioria deles estará empregada. Sendo assim, é um
                    nicho de pessoas que não procuram emprego, mas recebem
                    propostas de headhunters. Ou seja, não adianta somente
                    divulgar a vaga, é necessário procurar ativamente por esses
                    profissionais. Sendo assim, o Tech Recruiter nos principais
                    ambientes online para se deparar com profissionais passíveis
                    de preencher as vagas que precisam. Aqui o networking também
                    é extremamente importante para{' '}
                    <b>encontrar aquela agulha no palheiro.</b>
                    <br />
                    <br />
                    Outra característica importante é que ao abordar esse
                    profissional para uma entrevista de emprego não solicitada,
                    nem sempre ele está disposto a responder as longas perguntas
                    dos recrutadores.
                    <br />
                    <br />
                    Dessa forma, a{' '}
                    <b>
                        habilidade de interpretar seus currículos e suas
                        experiências
                    </b>{' '}
                    é primordial.
                </p>
            </>
        ),
        source: 'https://tangerino.com.br/blog/tech-recruiter/#O-que-%C3%A9-um-Tech-Recruiter',
    },
    Products: {
        title: 'O que faz quem trabalha com produto ?',
        description: (
            <>
                <p>
                    Bom, para começar, vale relembrar que a área de produto é a
                    responsável por garantir que os produtos de uma empresa
                    tenham <b>sucesso</b>. Ou seja, são profissionais que
                    utilizarão os recursos de tecnologia disponíveis para criar
                    algo que atenda uma <b>necessidade legítima</b> das pessoas
                    usuárias.
                    <br />
                    <br />
                    Dessa forma, o uso do produto criado deve resultar em uma
                    recompensa à organização através dos objetivos atingidos.
                    <br />
                    <br />
                    Profissionais dessa área vão trabalhar com:
                    <br />
                    <br />
                    <ul>
                        <li>
                            Estabelecer a conexão com clientes, além de observar
                            pessoas usuárias e o mercado (comportamentos,
                            tendências, etc);
                        </li>
                        <li>
                            Com base nessas observações, evoluir o processo de
                            descoberta de produtos com levantamento de demandas,
                            oportunidades e potenciais problemas a serem
                            resolvidos;
                        </li>
                        <li>
                            Coliderar &ndash; através de sua influência &ndash;
                            o time na construção e evolução contínua do produto;
                        </li>
                        <li>
                            Avaliar constantemente os{' '}
                            <a
                                href="https://www.zup.com.br/categorias/dados"
                                style={LinkStyles}
                            >
                                dados
                            </a>{' '}
                            e fatos relacionados ao mercado e ao desempenho do
                            produto, com o objetivo de identificar ajustes que
                            maximizem os resultados alcançados.
                        </li>
                    </ul>
                </p>
            </>
        ),
        source: 'https://www.zup.com.br/blog/carreira-em-produto#:~:text=Bom%2C%20para%20come%C3%A7ar%2C%20vale%20relembrar,necessidade%20leg%C3%ADtima%20das%20pessoas%20usu%C3%A1rias',
    },
    Agile: {
        title: 'O que faz um agilista',
        description: (
            <>
                <p>
                    O agilista é um profissional responsável por{' '}
                    <b>implementar metodologias ágeis</b> no cotidiano de uma
                    empresa. O seu papel é estratégico no processo de
                    digitalização de um negócio, já que ele oferece treinamento,
                    ferramentas e mentoria. <br />
                    <br />
                    Além disso, o agilista dá suporte à equipe para que ela{' '}
                    <b>foque no que realmente é prioridade.</b> Isso porque o
                    mercado exige entregas mais ágeis, o que permite que a
                    empresa tenha um feedback para definir se ela muda ou
                    continua em um determinado projeto.
                    <br />
                    <br />
                    Ou seja, esse profissional deve buscar formas de incentivar
                    a equipe a fim de alcançar os objetivos e estimular a
                    comunicação e cooperação entre os integrantes do time. Além
                    disso, deve facilitar, planejar e conduzir as reuniões do
                    projeto.
                    <br />
                    <br />
                    Resumindo, o agilista é aquele que, diferente de um chefe ou
                    um gerente das antigas, olha para a equipe,{' '}
                    <b>ajuda a cuidar das pessoas no dia a dia</b> e a otimizar
                    os processos dentro da empresa, não pensando apenas em
                    lucro.
                </p>
            </>
        ),
        source: 'https://blog.crowd.br.com/agilista/#:~:text=O%20agilista%20%C3%A9%20um%20profissional,oferece%20treinamento%2C%20ferramentas%20e%20mentoria',
    },
    SocialMedia: {
        title: 'O que um profissional de Social Media faz ?',
        description: (
            <>
                <p>
                    A rotina deste profissional é muito mais agitada do que
                    passar o dia rolando o feed do Instagram! Quem trabalha com
                    redes sociais passa boa parte do tempo fazendo pesquisas e
                    preenchendo planilhas, cadernos, documentos e reunindo
                    ideias para transformá-las em conteúdo.
                    <br />
                    <br />O que a audiência vê, o post publicado, é apenas uma
                    pequena parte de um grande trabalho. Por isso, se você está
                    pensando em trabalhar com redes sociais apenas pela
                    afinidade com as redes sociais, continue lendo este texto!
                    <br />
                    <br />
                    <b>
                        Confira algumas das atividades que o profissional de
                        Social Media irá desempenhar na sua rotina de trabalho:
                    </b>
                    <br />
                    <br />
                    <ul>
                        <li>Planejamento e pesquisa;</li>
                        <li>Criação de estratégia;</li>
                        <li>Criação de conteúdo;</li>
                        <li>Interações com o público;</li>
                        <li>Monitoramento das informações e métricas;</li>
                        <li>Análise de resultados.</li>
                    </ul>
                    <br />
                    Ter noção do todo e entender a multidisciplinaridade disso é
                    muito importante, e essa área envolve diversas funções que
                    podem envolver mais de um profissional capacitado com
                    habilidades diferentes.
                </p>
            </>
        ),
        source: 'https://tudodeshare.com.br/artigos/social-media-o-que-e-e-o-que-faz/',
    },
    UXUIDesign: {
        title: 'O que faz um UX designer ?',
        description: (
            <>
                <p>
                    O UX Design é derivado da frase inglesa “User Experience
                    Design”, cujo significado é traduzido no português como
                    “Design da Experiência do Usuário”. O UX Designer é o
                    profissional que atua com o propósito de atrelar os
                    conhecimentos da área do{' '}
                    <a
                        href="https://querobolsa.com.br/cursos-e-faculdades/design"
                        style={LinkStyles}
                    >
                        Design
                    </a>{' '}
                    e buscar melhorias para a experiência do usuário.
                    <br />
                    <br />
                    Este profissional deverá compreender o mercado e a empresa
                    que está inserido. Esta compreensão será vital para ele
                    observar possibilidades de melhorias e otimizações em
                    plataformas digitais e para o relacionamento cliente-empresa
                    como um todo.
                    <br />
                    <br />
                    Por falar em plataformas digitais, as melhorias do UX
                    Designer podem abranger situações de navegação do usuário
                    dentro de um site, minimizando o número de cliques que ele
                    precisa realizar para concluir uma ação. Outro exemplo
                    passível ao UX designer é trabalhar (e otimizar) o
                    atendimento do cliente por algum tipo de central de ajuda da
                    empresa.
                    <br />
                    <br />
                    O UX Designer deverá estar atento para critérios de
                    funcionamento, como a Usabilidade, Arquitetura e Design da
                    Informação e Gestão de Conteúdo. O profissional poderá
                    colocar em prática o seu conhecimento de áreas específicas
                    de Design e solucionar problemas e dores de determinado
                    usuário.
                    <br />
                    <br />
                    Por exemplo, utilizar os conceitos de Design de interação,
                    Design da Informação e Design Ambiental nas demandas de
                    aprimoramento da experiência do cliente.Possivelmente, o
                    estudante de UX Designer terá acesso aos seguintes conteúdos
                    durante a sua formação acadêmica.
                    <br />
                    <br />
                    <ul>
                        <li>Avaliação de Experiência e Usabilidade,</li>
                        <li>Gamificação</li>
                        <li>Análise de Dados,</li>
                        <li>Inteligência Estratégica</li>
                        <li>Métodos Ágeis de Projetos</li>
                        <li>Arquitetura da Informação</li>
                    </ul>
                </p>
                <p style={{ marginTop: '26px' }}>
                    Fonte:{' '}
                    <a
                        href="https://querobolsa.com.br/carreiras-e-profissoes/ux-designer"
                        style={LinkStyles}
                    >
                        https://querobolsa.com.br/carreiras-e-profissoes/ux-designer
                    </a>
                </p>
                <h3
                    style={{
                        fontSize: '24px',
                        marginTop: '32px',
                        marginBottom: '32px',
                    }}
                >
                    O que faz um UI designer?
                </h3>
                <p>
                    <b>UI designer</b>, ou designer de interface do usuário,
                    promove a criação e o desenvolvimento da interface explorada
                    pelo usuário em um produto ou serviço. O profissional
                    trabalha muito próximo (em alguns casos, concomitantemente)
                    ao UX{' '}
                    <a
                        href="https://querobolsa.com.br/cursos-e-faculdades/design/bolsas?l=graduacao"
                        style={LinkStyles}
                    >
                        design
                    </a>{' '}
                    (designer de experiência). Afinal, as duas áreas de atuação
                    desempenham funções de detecção e compreensão da atividade
                    do usuário. Tanto a necessidade da utilização e experiência
                    de quem usa, cenário referente ao UX designer, ou de
                    alterações e melhorias para fluidez do uso da interface, que
                    diz respeito ao UI designer.
                </p>
            </>
        ),
        source: 'https://querobolsa.com.br/carreiras-e-profissoes/ui-designer',
    },
    FrontEnd: {
        title: 'O que faz um Desenvolvedor front-end',
        description: (
            <>
                <p>
                    Como o próprio nome sugere, este profissional desenvolve
                    aquilo que está na frente do site ou aplicativo, ou seja, o
                    que é visível para o usuário final.
                    <br />
                    <br />
                    Essa parte de um projeto se chama interface de usuário, pois
                    é com ela que o usuário interage sem precisar conhecer
                    programação.
                    <br />
                    <br />
                    Para que o usuário consiga usar o aplicativo, plataforma ou
                    site facilmente, o desenvolvedor front-end faz uso de
                    linguagens de programação, softwares e diversas tecnologias.
                    Por isso, é importante estar sempre reciclando esses
                    conhecimentos. Afinal, a evolução da tecnologia está
                    acontecendo com enorme velocidade, não é?
                    <br />
                    <br />
                    Por fim, precisamos mencionar o que o desenvolvedor
                    front-end não é ou não faz.
                    <br />
                    <br />
                    Como vimos, desenvolvedores podem ser front-end, back-end e
                    full-stack. O desenvolvedor front-end pode atuar como
                    full-stack e vice-versa. O que não se pode confundir é o
                    front com o back. Entenda o porquê:
                </p>
            </>
        ),
        source: 'https://blog.crowd.br.com/desenvolvedor-front-end/',
    },
    BackEnd: {
        title: 'O que faz um desenvolvedor back-end',
        description: (
            <>
                <p>
                    Projetos de tecnologia são divididos em 2 partes: front-end
                    e back-end. Já falamos sobre o{' '}
                    <a
                        href="https://blog.crowd.br.com/desenvolvedor-front-end/"
                        style={LinkStyles}
                    >
                        dev front-end
                    </a>{' '}
                    aqui no blog e, hoje, falaremos sobre o desenvolvedor
                    back-end.
                    <br />
                    <br />
                    Também existe o profissional full-stack, que é aquele que
                    trabalha no projeto como um todo. E o que faz o
                    desenvolvedor back-end, afinal?
                    <br />
                    <br />
                    Este é o <b>profissional que atua nos “bastidores”,</b> por
                    assim dizer. Enquanto o profissional front-end trabalha na
                    parte visível de um projeto, ou seja, na interface de
                    usuário, o dev back-end trabalha na parte invisível para o
                    visitante do site, usuário do aplicativo ou programa de
                    computador.
                    <br />
                    <br />
                    Esta parte “invisível” é tudo que envolve o fluxo de dados
                    entre o sistema e o servidor. São os códigos que rodam “por
                    trás da tela”, por isso back-end.
                    <br />
                    <br />
                    Imagine um formulário em um site, em que você coloca seu
                    nome e e-mail e clica em enviar. Exemplo comum que todo
                    mundo já viu, certo?
                    <br />
                    <br />O desenvolvedor back-end é o responsável por programar
                    as funções que fazem esses dados serem enviados ao servidor
                    para serem armazenados no banco de dados, por exemplo.
                </p>
            </>
        ),
        source: 'https://blog.crowd.br.com/desenvolvedor-back-end/',
    },
    Data: {
        title: 'O que faz um Cientista de dados ?',
        description: (
            <>
                <p>
                    O <b>cientista de dados</b>, ou <i>data scientist</i>, é uma
                    figura profissional que está cada vez mais presente no mundo
                    dos negócios. O seu principal objetivo é coletar, organizar
                    e analisar{' '}
                    <a
                        href="https://querobolsa.com.br/cursos-e-faculdades/banco-de-dados"
                        style={LinkStyles}
                    >
                        dados
                    </a>{' '}
                    para obter insights e informações úteis para as empresas.
                    Para isso, o cientista de dados deve ter profundos
                    conhecimentos em{' '}
                    <a
                        href="https://querobolsa.com.br/cursos-e-faculdades/matematica"
                        style={LinkStyles}
                    >
                        matemática
                    </a>
                    ,{' '}
                    <a
                        href="https://querobolsa.com.br/cursos-e-faculdades/estatistica"
                        style={LinkStyles}
                    >
                        estatística
                    </a>
                    ,{' '}
                    <a
                        href="https://querobolsa.com.br/cursos-e-faculdades/computacao"
                        style={LinkStyles}
                    >
                        computação
                    </a>{' '}
                    e também em linguagens de programação.
                    <br />
                    <br />
                    Essas competências permitem que ele consiga trabalhar com
                    dados de diferentes formatos, na forma de tabelas, gráficos
                    ou textos. Além disso, o cientista de dados também precisa
                    ser capaz de interpretar os dados coletados e transformá-los
                    em informações úteis para as empresas.
                    <br />
                    <br />
                    Para isso, ele precisa ter habilidades de comunicação, pois
                    precisa estar apto a explicar os resultados de suas análises
                    para outros profissionais. O cientista de dados também deve
                    desenvolver modelos e algoritmos para ajudar a entender os
                    dados e encontrar soluções para problemas.
                    <br />
                    <br />
                    Vale destacar que o profissional precisa conhecer a fundo
                    técnicas de{' '}
                    <a
                        href="https://querobolsa.com.br/cursos-e-faculdades/inteligencia-artificial/bolsas"
                        style={LinkStyles}
                    >
                        machine learning
                    </a>{' '}
                    e outras técnicas avançadas de análise de dados. Ao longo do
                    seu trabalho, o cientista de dados precisa estar
                    constantemente se atualizando, pois as tecnologias e
                    técnicas relacionadas ao tratamento de dados estão em
                    constante evolução.
                    <br />
                    <br />
                    Caso você tenha dúvidas se esta profissão é a escolha certa
                    para você, não deixe de conferir o{' '}
                    <a
                        href="https://querobolsa.com.br/teste-vocacional-analise-e-desenvolvimento-de-sistemas"
                        style={LinkStyles}
                    >
                        Teste Vocacional da Quero Bolsa.
                    </a>{' '}
                    É rápido, gratuito e pode te ajudar nessa importante escolha
                    profissional.
                </p>
            </>
        ),
        source: 'https://querobolsa.com.br/carreiras-e-profissoes/cientista-de-dados',
    },
    Mobile: {
        title: 'O que faz um Desenvolvedor Mobile ?',
        description: (
            <>
                <p>
                    Acima de tudo, é bom lembrar que um software tem o objetivo
                    de solucionar um problema, seja no desktop ou no mobile.
                    Portanto, a pessoa desenvolvedora Mobile tem a missão de
                    programar, codificar e testar plataformas nos sistemas
                    operacionais existentes. Além disso, ela realiza a
                    manutenção dos programas, corrige bugs e trabalha visando a
                    boa experiência do usuário.
                </p>
            </>
        ),
        source: 'https://coodesh.com/blog/carreiras/desenvolvedor-mobile/',
    },
    Qa: {
        title: 'Pessoa QA: o que faz',
        description: (
            <>
                <p>
                    O que faz a pessoa QA dentro da equipe de desenvolvimento?
                    Saiba neste artigo porque as startups dão tanto valor a
                    esse(a) profissional. E veja quais as responsabilidades,
                    média salarial do mercado e ainda como investir nesta
                    carreira. Acompanhe até o final.
                    <br />
                    <br />
                    Primeiramente, é bom lembrar que a sigla QA significa
                    Quality Analyst, em inglês, ou Analista de Qualidade, em
                    português. Como o próprio nome diz, o(a) desenvolvedor(a)
                    desta área é responsável pela qualidade do produto que é
                    entregue ao cliente.
                    <br />
                    <br />
                    Por isso, ele(a) mantém um fluxo de trabalho que compreende
                    testes, estratégias e análises do negócio como um todo.
                    Nesse sentido, é muito importante que a pessoa QA tenha
                    conhecimento em todas as áreas de tecnologia e saiba como
                    conduzir seu trabalho.
                </p>
            </>
        ),
        source: 'https://coodesh.com/blog/carreiras/pessoa-qa-o-que-faz-e-qual-a-sua-importancia/#:~:text=A%20pessoa%20QA%20%C3%A9%20o,conforme%20a%20expectativa%20do%20cliente',
    },
    DevOps: {
        title: 'O que faz um DevOps ?',
        description: (
            <>
                <p>
                    DevOps descreve abordagens que ajudam a acelerar os
                    processos necessários para levar uma ideia do
                    desenvolvimento à implantação em um ambiente de produção no
                    qual ela seja capaz de gerar valor para o usuário. Essas
                    ideias podem ser um novo recurso de software, uma
                    solicitação de aprimoramento ou uma correção de bug, entre
                    outros.
                    <br />
                    <br />
                    Essas abordagens exigem comunicação frequente entre as
                    equipes de desenvolvimento e operações, trabalho
                    colaborativo e empatia com os demais membros das equipes.
                    Também são necessários provisionamento flexível e
                    escalabilidade.
                    <br />
                    <br />
                    Com o DevOps, aqueles que mais precisam de recursos
                    conseguem obtê-los por meio do autosserviço e da automação.
                    Os desenvolvedores, que normalmente criam códigos em um
                    ambiente de desenvolvimento padrão, trabalham em estreita
                    colaboração com a equipe de operações de TI para acelerar a
                    compilação de programas de software, a realização de testes
                    e o lançamento de soluções, sem sacrificar a confiabilidade.
                </p>
            </>
        ),
        source: 'https://www.redhat.com/pt-br/topics/devops#:~:text=A%20palavra%20%22DevOps%22%20%C3%A9%20a,muitas%20outras%20pr%C3%A1ticas%20e%20conceitos',
    },
};
