import { Article, Camera, Key, Scroll, UserSquare } from 'phosphor-react';

const linkedinItems = [
    {
        id: 1,
        figure: <Camera size={25} color="#344054" />,
        title: 'A Fotografia',
        intro: 'Importância da imagem no LinkedIn: descubra como uma foto profissional pode impactar suas oportunidades de carreira.',
        contentIcon: <Camera size={120} color="#046AD0" opacity="0.6" />,
        content: [
            {
                text: `Em uma pesquisa da Passport-Photo Online, mais de 80% dos recrutadores disseram que uma foto do LinkedIn era um fator importante de classificação. Já 8 em cada 10 concordaram que a foto do perfil de um candidato no LinkedIn foi usada como uma forma de conhecer melhor a pessoa. Mesmo que os entrevistados concordem 82% das vezes que não se deve julgar um livro pela capa, isso acontece. Os candidatos a emprego podem ser rejeitados por sua foto de perfil do LinkedIn em até 70% das vezes.`,
            },
            {
                text: `Sua fotografia é sua primeira impressão online e precisa ser profissional. Veja algumas dicas rápidas:`,
            },
            {
                text: `
                    • Você precisa parecer acessível;\n
                    • Certifique-se de que seu rosto esteja claramente visível;\n
                    • Use seu traje habitual (não o pijama ou o terno de poder);\n
                    • E, sob nenhuma circunstância você deve ter outra pessoa em foto!\n
                `,
            },
            {
                text: `Para avaliar sua foto de perfil Linkedin, o site abaixo pode ser útil: https://www.snappr.com/photo-analyzer/`,
            },
        ],
    },
    {
        id: 2,
        figure: <Article size={25} color="#344054" />,
        title: 'O Título do Linkedin',
        intro: 'O resumo é crucial: destaca habilidades e experiências, capturando a atenção de recrutadores e conexões.',
        contentIcon: <Article size={120} color="#046AD0" opacity="0.6" />,
        content: [
            {
                text: `Esta é sem dúvida uma das partes mais importantes do seu perfil do LinkedIn. É aquela descrição de 120 caracteres diretamente abaixo do seu nome. O resumo aparece na sua página de perfil, mas também aparece toda vez que você se envolve no LinkedIn. Seja específico. Liste as habilidades técnicas e os cargos. Use palavras-chave para a posição desejada.`,
            },
            {
                text: `Dica profissional: agora você pode adicionar uma breve introdução de áudio. Você precisa usar seu dispositivo móvel para adicionar a introdução de áudio. Selecione o lápis para editar seu perfil. Onde ele pedir a pronúncia do seu nome, grave sua introdução. Você tem 10 segundos. Diga oi, conte às pessoas o que você faz e peça para elas se conectarem.`,
            },
        ],
    },
    {
        id: 3,
        figure: <UserSquare size={25} color="#344054" />,
        title: 'O Resumo do Linkedin (sobre)',
        intro: 'Não pule esta seção. Se precisar de ajuda, contrate um redator, mas inclua um resumo. ',
        contentIcon: <UserSquare size={120} color="#046AD0" opacity="0.6" />,
        content: [
            {
                text: `A seção de resumo oferece muita liberdade, mas aqui está uma fórmula infalível de 8 parágrafos para se destacar de acordo com a especialista em LinkedIn Mindi Rosser.`,
            },
            {
                text: `
                    • Faça uma pergunta baseada ou faça uma declaração ousada que estimule o leitor a continuar.\n
                    • Mostre ao seu alvo que você tem a solução para resolver o problema dele.\n
                    • Mostre a profundidade de sua experiência.\n
                    • Elabore em suas áreas de especialização, fornecendo exemplos tangíveis.\n
                    • Fale sobre o seu superpoder.\n
                    • Divulgue suas realizações e elogios.\n
                    • Diga-lhes por que você é apaixonado pelo seu trabalho.\n
                    • Dê-lhes uma chamada à ação.\n
                    • Dica profissional: escreva esta seção para a posição desejada. Mostrar progressão na carreira. Use palavras-chave comumente encontradas nas descrições dos empregos que você deseja ter.\n
                `,
            },
        ],
    },
    {
        id: 4,
        figure: <Scroll size={25} color="#344054" />,
        title: 'Sua experiência de trabalho e educação',
        intro: 'Aprimore seu perfil no LinkedIn! Exponha sua jornada e habilidades essenciais com palavras-chave direcionadas.',
        contentIcon: <Scroll size={120} color="#046AD0" opacity="0.6" />,
        content: [
            {
                text: `Esta parte é o seu “currículo” do LinkedIn. Se a empresa não for muito conhecida, inclua um breve resumo do que a empresa faz, liste seu cargo e pontos destacando suas responsabilidades. Este é um ótimo lugar para adicionar palavras-chave. Como o LinkedIn não possui um “teclado” robusto, use este truque: digite um hífen seguido pelo sinal de maior que no teclado para formar uma seta para usar como marcador. Mostre progressão na carreira, mas mantenha-a em 3 ou 4 pontos principais.`,
            },
            {
                text: `
                    Esta parte é o seu “currículo” do LinkedIn. Se a empresa não for muito conhecida, inclua um breve resumo do que a empresa faz, liste seu cargo e pontos destacando suas responsabilidades. Este é um ótimo lugar para adicionar palavras-chave. Como o LinkedIn não possui um “teclado” robusto, use este truque: digite um hífen seguido pelo sinal de maior que no teclado para formar uma seta para usar como marcador. Mostre progressão na carreira, mas mantenha-a em 3 ou 4 pontos principais.
                `,
            },
            {
                text: `
                    Dica profissional: use nomes de empresas e escolas. Quando você fizer isso, uma imagem em miniatura aparecerá em seu perfil. Não é nada demais, mas esteticamente parece mais bonito e, infelizmente, os livros são julgados por suas capas.
                `,
            },
        ],
    },
    {
        id: 5,
        figure: <Key size={25} color="#344054" />,
        title: 'Adicionar as palavras-chave corretas.',
        intro: 'Destaque suas habilidades ao buscar empregos. Identifique palavras-chave nos requisitos e seja autêntico.',
        contentIcon: <Scroll size={120} color="#046AD0" opacity="0.6" />,
        content: [
            {
                text: `Os recrutadores começam com uma pesquisa por palavra-chave para encontrar candidatos viáveis. Faça uma busca rápida de emprego para as posições que você deseja. Identifique palavras-chave lendo os requisitos do trabalho. Inclua hard skills e soft skills apenas se você tiver essas habilidades em seu repertório. Essa também é uma ótima maneira de ver se você precisa aprimorar suas habilidades para se tornar mais comercializável.`,
            },
            {
                text: `
                    Os recrutadores começam com uma pesquisa por palavra-chave para encontrar candidatos viáveis. Faça uma busca rápida de emprego para as posições que você deseja. Identifique palavras-chave lendo os requisitos do trabalho. Inclua hard skills e soft skills apenas se você tiver essas habilidades em seu repertório. Essa também é uma ótima maneira de ver se você precisa aprimorar suas habilidades para se tornar mais comercializável.
                `,
            },
            {
                text: `
                    Personalize o seu URL para o seu nome: www.linkedin.com/in/SeuNomeAqui isso facilita na busca e deixa seu perfil personalizado.
                `,
            },
            {
                text: `
                    Fonte: https://forbes.com.br/carreira/2022/02/5-dicas-para-voce-montar-um-perfil-de-sucesso-no-linkedin/
                `,
            },
        ],
    },
];

export { linkedinItems };
