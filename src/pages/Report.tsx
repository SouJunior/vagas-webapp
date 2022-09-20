import * as React from 'react';
import Footer from "../components/Footer";
import Header from "../components/HeaderReport";
import { Outlet } from "react-router-dom";
import { Container } from "../components/styles/Container.styled";

const Report = () => {
    return (
        <div>
            <Header/>
            <Container>
                <h1>Informe a equipe do SouJunior o problema desta vaga</h1>
                <h2>Após denuncias a vaga nossa equipe ira tomar as devidas providëncias em relação a denúncia.</h2>
                <hr className="mb-7" />
                <Outlet />
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8'>
                <div className='w-96 h-96 '>
                Denunciar esta Vaga

                UX Designer Junior
                Bento Gonçalves, Rio Grande do Sul, Brasil
                REMOTO - JUNIOR - PJ

                Tempo Integral
                51-200 funcionários
                Recrutando agora

                Procuramos um profissional para ocupar a posição de UX
                    Designer em um cliente referência no setor de produção de
                    imunobiológicos (vacinas) e análises laboratoriais
                    veterinários.

                Culturalmente, procuramos uma pessoa que:
                    seja curiosa por natureza;
                    perfil mão na massa e ágil;
                    sabe ouvir e se comunicar;
                    busca e tenha um histórico de aprendizado contínuo;
                
                Responsabilidades e atribuições: 
                </div>
                    <div className='m-4 p-4 rounded-md border h-min col-span-2'>
                    Por que está denunciando esta vaga?<br></br>
                    Informe abaixo a informação mais relevante para a denuncia da vaga!
                <hr></hr>
                <br></br>

                <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleText0" placeholder="Descreva a causa da denúncia?"/>
                </div>
                </div>


            </Container>
            <Footer/>
        </div>
        )
}

export default Report;