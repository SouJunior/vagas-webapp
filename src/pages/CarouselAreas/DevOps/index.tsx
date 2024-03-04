import DevOpsImg from '../../../assets/imgs/devops-img.svg';
import DevOpsDeveloper from '../../../assets/imgs/devops-developer.svg';

import { FloppyDisk } from 'phosphor-react';

import * as S from './style';
import Title from '../components/Title';
import ListSubtitle from '../components/ListSubtitle';
import ProfessionsParagraph from '../components/ProfessionsParagraph';
import ProfessionsSubtitle from '../components/ProfessionsSubtitle';
import ProfessionsCard from '../components/ProfessionsCard';

const DevOps = () => {
    return (
        <>
            <S.ContainerTitle>
                <Title>DevOps</Title>
                <ProfessionsParagraph dark>
                    O profissional de DevOps atua como um elo importante entre
                    as equipes de desenvolvimento e operações em uma empresa que
                    cria software. O termo "DevOps" vem da combinação das
                    palavras "Desenvolvimento" e "Operações", indicando uma
                    abordagem colaborativa para melhorar a eficiência na
                    produção de software. O principal objetivo do profissional
                    de DevOps é tornar o processo de desenvolvimento e entrega
                    de software mais rápido, eficiente e confiável através de
                    atividade como:
                </ProfessionsParagraph>
            </S.ContainerTitle>

            <ProfessionsCard color="#1165BA" icon>
                <FloppyDisk size={200} color="#fff" />
            </ProfessionsCard>

            <ProfessionsCard color="#323232">
                <ProfessionsSubtitle>Automação</ProfessionsSubtitle>
                <S.ListLight>
                    <li>
                        Automatizar processos de desenvolvimento, teste e
                        implantação para acelerar a entrega de software; 
                    </li>
                    <li>
                        Utilizar ferramentas de automação para provisionamento
                        de infraestrutura e configuração.
                    </li>
                </S.ListLight>
            </ProfessionsCard>

            <ProfessionsCard color="#046AD0">
                <ProfessionsSubtitle>
                    Integração Contínua (CI)
                </ProfessionsSubtitle>

                <ProfessionsParagraph>
                    Implementar práticas de integração contínua para garantir
                    que alterações de código sejam integradas e testadas
                    automaticamente, reduzindo problemas de integração no final
                    do ciclo de desenvolvimento.
                </ProfessionsParagraph>
            </ProfessionsCard>

            <S.MonitoringAndSecurityBox>
                <div>
                    <ListSubtitle dark left="24px">
                        Monitoramento e Feedback
                    </ListSubtitle>

                    <S.ListDark>
                        <li>
                            Implementar ferramentas de monitoramento para
                            acompanhar o desempenho do aplicativo e identificar
                            problemas rapidamente;
                        </li>
                        <li>
                            Coletar feedback sobre a experiência do usuário e
                            métricas operacionais para melhorar continuamente os
                            processos.
                        </li>
                    </S.ListDark>
                </div>

                <div>
                    <ListSubtitle dark left="24px">
                        Segurança
                    </ListSubtitle>

                    <S.TextSecurity>
                        Integrar práticas de segurança no ciclo de vida de
                        desenvolvimento, garantindo que a segurança seja uma
                        consideração contínua.
                    </S.TextSecurity>

                    <S.MonitoringAndSecurityFigure>
                        <img src={DevOpsImg} alt="Imagem DevOps" />
                    </S.MonitoringAndSecurityFigure>
                </div>
            </S.MonitoringAndSecurityBox>

            <ProfessionsCard color="#323232">
                <ProfessionsSubtitle>Entrega Contínua (CD)</ProfessionsSubtitle>

                <ProfessionsParagraph>
                    Implementar práticas de entrega contínua para automatizar o
                    processo de implantação de software em ambientes de produção
                    de forma eficiente e confiável.
                </ProfessionsParagraph>
            </ProfessionsCard>

            <ProfessionsCard color="#046AD0">
                <ProfessionsSubtitle>Colaboração</ProfessionsSubtitle>

                <ProfessionsParagraph>
                    Facilitar a comunicação e colaboração entre equipes de
                    desenvolvimento e operações para reduzir silos e melhorar o
                    fluxo de trabalho.
                </ProfessionsParagraph>
            </ProfessionsCard>

            <S.BlueHighContainer>
                <div>
                    <ListSubtitle dark>Resolução de problemas</ListSubtitle>

                    <ProfessionsParagraph dark left="21px">
                        Colaborar na resolução rápida de problemas e na
                        implementação de melhorias contínuas com base nas lições
                        aprendidas.
                    </ProfessionsParagraph>
                </div>

                <div>
                    <ListSubtitle dark>Orquestração de Containers</ListSubtitle>

                    <ProfessionsParagraph dark left="21px">
                        Utilizar ferramentas de orquestração de contêineres,
                        como Kubernetes, para gerenciar e escalar aplicações em
                        ambientes de contêineres.
                    </ProfessionsParagraph>
                </div>
            </S.BlueHighContainer>

            <S.DarkHighContainer>
                <div>
                    <ListSubtitle>Gestão de Configuração</ListSubtitle>

                    <ProfessionsParagraph left="21px">
                        Gerenciar configurações de software e infraestrutura de
                        maneira consistente e controlada, usando ferramentas
                        como Ansible, Chef ou Puppet.
                    </ProfessionsParagraph>
                </div>

                <div>
                    <ListSubtitle>Cultura DevOps</ListSubtitle>

                    <ProfessionsParagraph left="21px">
                        Promover uma cultura de colaboração, automação e
                        melhoria contínua dentro da organização.
                    </ProfessionsParagraph>
                </div>
            </S.DarkHighContainer>

            <S.BlueDarkHighContainer>
                <ProfessionsParagraph>
                    Ambos os profissionais desempenham papéis complementares
                    para criar produtos digitais bem-sucedidos, onde o UX Design
                    se concentra na experiência global do usuário e o UI Design
                    trata da estética visual da interface. A colaboração entre
                    essas disciplinas é fundamental para oferecer uma
                    experiência completa e eficaz aos usuários.
                </ProfessionsParagraph>
            </S.BlueDarkHighContainer>

            <S.FigureDevOpsDev>
                <img src={DevOpsDeveloper} alt="DevOps Developer" />
            </S.FigureDevOpsDev>
        </>
    );
};

export default DevOps;
