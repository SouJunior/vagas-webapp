import * as s from '../styles/HomeCompaniesStyles';

import Logo from '../../assets/imgs/soujunior-empresas.png';
import HireImage from '../../assets/imgs/companies.png';
import { Link } from 'react-router-dom';

import img from './assets/Learn.png';

import { Card } from './components/Card';

import * as I from './components/Icons';
import FooterDefault from '../../components/FooterDefault';

export default function Companies() {
    return (
        <>
            <s.Header>
                <s.Container>
                    <s.HeaderWrapper>
                        <img src={Logo} alt="Sou Junior empresas" />
                        <nav aria-label="navegação principal">
                            <s.HeaderNavigation>
                                <s.ListItem>
                                    <Link to="/">Home</Link>
                                </s.ListItem>
                                <s.ListItem>
                                    <Link to="#">Sobre nós</Link>
                                </s.ListItem>
                            </s.HeaderNavigation>
                        </nav>{' '}
                    </s.HeaderWrapper>
                </s.Container>
            </s.Header>

            <s.HireJuniorsSection>
                <s.Container>
                    <s.HireSectionWrapper>
                        <div>
                            <s.HireTitle>Contrate Juniores!</s.HireTitle>
                            <s.HireDescription>
                                Encontre talentos iniciantes prontos para
                                crescer com sua empresa.
                            </s.HireDescription>

                            <s.ButtonRegister>
                                Cadastre sua empresa
                            </s.ButtonRegister>
                        </div>

                        <s.Image
                            src={HireImage}
                            alt="Ilustração da seção de contratação"
                        />
                    </s.HireSectionWrapper>
                </s.Container>
            </s.HireJuniorsSection>

            <section>
                <s.Container>
                    <s.Subtitle as={'h2'}>
                        Por que contratar um profissional júnior?
                    </s.Subtitle>

                    <s.Explanation>
                        O mercado de tecnologia é dinâmico e competitivo, o que
                        exige das empresas criatividade na hora de compor suas
                        equipes. Nesse cenário, contratar profissionais juniores
                        em tech pode trazer benefícios significativos tanto para
                        a organização quanto para os colaboradores mais
                        experientes. A seguir, destacamos as principais
                        vantagens dessa escolha estratégica:
                    </s.Explanation>

                    <s.CardsWrapper>
                        <Card
                            heading="Disposição para aprender"
                            description="Profissionais juniores entram no mercado com entusiasmo e vontade de conhecimento. Essa disposição para aprender e se adaptar a novas ferramentas e metodologias permite que se alinhem rapidamente aos objetivos e valores da empresa."
                            img={img}
                        />

                        <Card
                            heading="Custo-benefício atrativo"
                            description="Contratar um júnior é, geralmente, mais econômico do que investir diretamente em profissionais mais seniores. Isso permite à empresa alocar recursos em treinamento e desenvolvimento, garantindo que o colaborador cresça dentro da organização e atenda às demandas específicas do negócio."
                            img={I.Cost}
                        />

                        <Card
                            heading="Novas perspectivas"
                            description="Por estarem iniciando na área, esses profissionais podem trazer ideias inovadoras e questionamentos que desafiam o status quo. Essa visão nova pode ser crucial em um setor que valoriza tanto a criatividade quanto a inovação."
                            img={I.Idea}
                        />

                        <Card
                            heading="Formação moldada às necessidades 
da empresa"
                            description="Ao investir em talentos juniores, as empresas têm a oportunidade de formar profissionais sob medida, alinhados à sua cultura e processos. Isso pode gerar maior engajamento e retenção, já que o colaborador sente que está crescendo junto com a empresa."
                            img={I.Mindset}
                        />

                        <Card
                            heading="Facilidade de integração"
                            description="Profissionais juniores, por estarem começando a carreira, geralmente têm maior flexibilidade para se adaptarem a diferentes equipes, estilos de gestão e projetos."
                            img={I.Team}
                        />

                        <Card
                            heading="Investimento de longo prazo"
                            description="Contratar um profissional júnior em tech não é apenas uma ação de curto prazo para preencher uma vaga, mas um investimento estratégico no futuro da sua empresa. "
                            img={I.Growth}
                        />
                    </s.CardsWrapper>

                    <s.Call>
                        Aposte no potencial e na capacidade de evolução dos
                        juniores – eles podem ser o{' '}
                        <strong>diferencial competitivo</strong> que sua equipe
                        precisa!
                    </s.Call>
                </s.Container>
            </section>

            <FooterDefault />
        </>
    );
}
