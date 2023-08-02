import React from 'react';
import Header from '../components/Portal/Header';
import { Footer } from '../components/Footer';
import {
    Container,
    LeftContainer,
    ResumePreview,
    RightContainer,
    Wrapper,
    Cards,
    PaymentInfo,
    PageTitle,
    DownloadBtn
} from './styles/MatchJobs';
import MatchCard from '../components/MatchCard';
import {FiDownloadCloud} from "react-icons/fi"

function MatchJobs() {
    return (
        <>
            <Header />
            <Container>
            <PageTitle>Match de Vagas</PageTitle>
                <Wrapper>
                    <LeftContainer>
                        <ResumePreview>
                            <iframe
                                src={`https://docs.google.com/viewer?url=${encodeURIComponent(
                                    'https://mooncoded.vercel.app/static/files/curriculum_vitae.pdf',
                                )}&embedded=true`}
                                width="100%"
                                height="100%"
                                title="curriculum"
                                allowFullScreen
                            ></iframe>
                        </ResumePreview>
                        <DownloadBtn>
                            <FiDownloadCloud size={20} />
                            <p>Fazer Download</p>
                        </DownloadBtn>
                    </LeftContainer>
                    <RightContainer>
                        <Cards>
                            <MatchCard
                                title="Descrição da Vaga"
                                description="Lorem ipsum dolor sit amet. Ut sunt rerum a totam alias et aspernatur delectus. Aut incidunt inventore nam voluptas doloremque 33 unde dolor qui cupiditate dolore et enim totam sit fugit nesciunt. Eos dolores dolorum et maxime aperiam a atque optio ut sequi nostrum qui quasi laborum est quia quos."
                            />
                            <MatchCard
                                title="Responsabilidades"
                                description="Lorem ipsum dolor sit amet. Ut sunt rerum a totam alias et aspernatur delectus. Aut incidunt inventore nam voluptas doloremque 33 unde dolor qui cupiditate dolore et enim totam sit fugit nesciunt. Eos dolores dolorum et maxime aperiam a atque optio ut sequi nostrum qui quasi laborum est quia quos."
                            />
                            <MatchCard
                                title="Qualificações"
                                description="Lorem ipsum dolor sit amet. Ut sunt rerum a totam alias et aspernatur delectus. Aut incidunt inventore nam voluptas doloremque 33 unde dolor qui cupiditate dolore et enim totam sit fugit nesciunt. Eos dolores dolorum et maxime aperiam a atque optio ut sequi nostrum qui quasi laborum est quia quos."
                            />
                            <MatchCard
                                title="Benefícios"
                                description="Lorem ipsum dolor sit amet. Ut sunt rerum a totam alias et aspernatur delectus. Aut incidunt inventore nam voluptas doloremque 33 unde dolor qui cupiditate dolore et enim totam sit fugit nesciunt. Eos dolores dolorum et maxime aperiam a atque optio ut sequi nostrum qui quasi laborum est quia quos."
                            />
                            <MatchCard
                                title="Informações Adicionais"
                                description="Lorem ipsum dolor sit amet. Ut sunt rerum a totam alias et aspernatur delectus. Aut incidunt inventore nam voluptas doloremque 33 unde dolor qui cupiditate dolore et enim totam sit fugit nesciunt. Eos dolores dolorum et maxime aperiam a atque optio ut sequi nostrum qui quasi laborum est quia quos."
                            />
                              <MatchCard
                                title="Informações Adicionais"
                                description="Lorem ipsum dolor sit amet. Ut sunt rerum a totam alias et aspernatur delectus. Aut incidunt inventore nam voluptas doloremque 33 unde dolor qui cupiditate dolore et enim totam sit fugit nesciunt. Eos dolores dolorum et maxime aperiam a atque optio ut sequi nostrum qui quasi laborum est quia quos."
                            />
                        </Cards>
                        <PaymentInfo>
                            <h1>Faixa Salarial: R$ 5.000,00 - R$ 7.000,00</h1>
                        </PaymentInfo>
                    </RightContainer>
                </Wrapper>

                <Footer />
            </Container>
        </>
    );
}

export default MatchJobs;
