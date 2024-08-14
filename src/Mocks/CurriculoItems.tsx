import {
    Crosshair,
    Desktop,
    Globe,
    Rocket,
    Star,
    XCircle,
} from 'phosphor-react';

const curriculoItems = [
    {
        id: 1,
        figure: <Crosshair size={25} color="#344054" />,
        title: 'Defina um Objetivo Profissional',
        intro: 'Saiba como redigir um objetivo claro e direcionado à vaga desejada.',
        contentIcon: <Crosshair size={120} color="#046AD0" />,
        content: [
            {
                text: `O segundo passo na elaboração do seu primeiro currículo é definir qual o seu objetivo profissional. Mas, o que escrever? O ideal é que você tenha clareza e direcione o objetivo à vaga. Evite escrever coisas como:`,
            },
            {
                sub: `“Desejo conquistar a minha independência pessoal em um ambiente de trabalho que traga oportunidades de crescimento”.`,
            },
            {
                text: `Um texto assim soa vago, não diz nada. Supondo que você esteja tentando uma vaga de vendas em uma loja, você pode escrever algo como:`,
            },
            {
                sub : `
                    “Desejo atuar na área de vendas, aprimorando as minhas habilidades comerciais e ganhando experiência em lidar com o público”.
                `
            }
        ],
    },
    {
        id: 2,
        figure: <Desktop size={25} color="#344054" />,
        title: 'Destaque a Sua Formação ',
        intro: 'Preparar um currículo é mais do que apenas listar sua formação acadêmica. É uma oportunidade de se destacar.',
        contentIcon: <Desktop size={120} color="#046AD0" />,
        content: [
            {
                text: `Não se contente apenas em informar onde você cursou o ensino médio ou o curso superior. Por exemplo, se você estuda Letras, um curso extracurricular em Linguagem de Sinais (LIBRAS) ou Criatividade na Escrita contam como importantes diferenciais que complementam a sua formação acadêmica. O mesmo vale para Palestras e Workshops relacionados à vaga desejada.`,
            },
            {
                text: `Esse é um momento de mostrar que, mesmo que lhe falte experiência profissional, você está sempre em busca de aprendizados e tem um foco de carreira definido. Isso enriquecerá bastante o seu primeiro currículo e vai diferenciá-lo dos concorrentes.`,
            },
            {
                text: ` Ao preencher esse campo, você deve começar da formação mais recente para baixo, sempre preenchendo o nome do curso, da instituição e o ano de conclusão ou previsão de término. Não se esqueça também dos conhecimentos de idiomas, sendo realista em seu domínio da língua. Por exemplo:`,
            },
            {
                text: ` • Inglês — Ípsilon Idiomas —  2015 - Nível Intermediário em Leitura, com facilidade em escrever pequenos parágrafos. Nível básico em conversação.`,
            },
        ],
    },
    {
        id: 3,
        figure: <Globe size={25} color="#344054" />,
        title: 'Mencione Seus Trabalhos Voluntários',
        intro: 'Trabalho voluntário é um diferencial entre os demais candidatos, pois demonstra sua disposição em dar de si em prol de outros. ',
        contentIcon: <Globe size={120} color="#046AD0" />,
        content: [
            {
                text: `Caso você já tenha feito trabalho voluntário ou pequenos serviços, mesmo que informalmente, como ajudar em um comércio local, é importante destacar essas informações em seu currículo. Os recrutadores valorizam candidatos que demonstram aproveitar as oportunidades que surgem para se desenvolverem pessoal e profissionalmente.`,
            },
        ],
    },
    {
        id: 4,
        figure: <Star size={25} color="#344054" />,
        title: 'Destaque Suas Qualificações Profissionais',
        intro: 'Enfatize suas habilidades e competências para maximizar suas chances na vaga pretendida.',
        contentIcon: <Star size={120} color="#046AD0" />,
        content: [
            {
                text: `Ao escrever o primeiro currículo, o campo “Experiência Profissional” pode ser substituído pelas suas qualificações, as características e conhecimentos que você acumulou ao longo dos anos e que o ajudarão na vaga pretendida.`,
            },
            {
                text: `Assim, você precisa fazer um exercício de autoconhecimento. Pensando nas atribuições da vaga que você está disputando, quais as habilidades e competências que ela exige e que você possui? Por exemplo, uma vaga como “Estágio em Social Media” exige candidatos que tenham afinidade com redes sociais, facilidade em escrever para públicos distintos e conhecimentos em métricas como engajamento, entre outros. E você percebe que possui as seguintes qualificações, se:`,
            },
            {
                text: `
                    • é heavy user das redes sociais;\n
                    • relaciona-se bem com as pessoas;\n
                    • tem conhecimentos em ferramentas como Photoshop e Corel, que o ajudarão a criar as artes necessárias para as redes sociais;\n
                    • tem senso de organização, essencial para o planejamento de conteúdo;\n
                    • tem criatividade para escrever para públicos diversos;\n
                    • raciocínio rápido em produzir conteúdo novo.
                `,
            },
            {
                text: `São itens que você pode destacar como qualificações profissionais, aumentando a chance de conseguir a vaga.`,
            },
        ],
    },
    {
        id: 5,
        figure: <Rocket size={25} color="#344054" />,
        title: 'Não Esqueça das Informações Complementares',
        intro: 'Destaque seus certificados e informações adicionais para turbinar seu currículo. Veja como:',
        contentIcon: <Rocket size={120} color="#046AD0" />,
        content: [
            {
                text: `Outra forma de valorizar ainda mais o seu primeiro currículo é destacar eventuais certificados que ajudam a demonstrar o seu perfil e seus conhecimentos.`,
            },
            {
                text: `No exemplo do tópico anterior, além de ter algumas qualificações-chave, você também possui os seguintes certificados:`,
            },
            {
                text: `
                    • Inbound Marketing — Escola X - 2016\n
                    • Produção de Conteúdo WEB — Escola Y - 2017\n
                `,
            },
            {
                text: `Não esqueça das informações complementares.`,
            },
            {
                text: `Muitas vezes existem informações que não cabem nos tópicos anteriores, mas são essenciais para o seu primeiro currículo ou para aumentar a chance de conseguir a vaga, tais como:`,
            },
            {
                text: `• Disponibilidade de viagem ou mudança: Se você está tentando um emprego em outra cidade e possui família nesta cidade, por exemplo, você pode destacar essa informação;\n
                    • Se você possui alguma deficiência, como auditiva, você pode indicar que “tem perda auditiva moderada, faz uso de aparelho e se comunica bem verbalmente” e apontar se há alguma necessidade de adaptações ou não.\n`,
            },
        ],
    },
    {
        id: 6,
        figure: <XCircle size={25} color="#344054" />,
        title: 'O que Evitar',
        intro: 'Por fim, é necessário tomar alguns cuidados para não deixar o seu currículo muito extenso ou difícil de ler. Confira o que deve ser evitado:',
        contentIcon: <XCircle size={120} color="#046AD0" />,
        content: [
            {
                text: `Formatação e Ortografia:`,
            },
            {
                text: `• seja direto, escreva somente o que for necessário e de forma simples;\n
                    • evite erros ortográficos;\n
                    • evite ultrapassar mais de duas folhas A4;\n
                    • evite fontes cursivas ou de difícil leitura ao escrever o currículo. Prefira a Arial ou Times New Roman, mais tradicionais e de fácil leitura;\n
                    • evite assinar e datar o currículo;\n
                    • evite encher o currículo de cores, no máximo use o Negrito para destacar os tópicos e as informações relevantes.\n`,
            },
            {
                text: `Dados Pessoais e Referências:`,
            },
            {
                text: `• evite colocar documentos, nomes dos pais e agregados;\n
                    • contatos de referências só devem ser passados quando solicitados em uma eventual entrevista;\n
                    • o mesmo serve para foto e pretensão salarial, só devem constar no currículo se for solicitado no anúncio da vaga.\n`,
            },
            {
                text: `Conhecimentos e Habilidades:`,
            },
            {
                text: `• Não exagere em seus conhecimentos e habilidades de informática e idiomas, serão detalhes facilmente descobertos em uma entrevista, caso não sejam verídicos.`,
            },
        ],
    },
];

export { curriculoItems };
