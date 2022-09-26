import * as React from 'react';
import Header from "../components/HeaderReport";
import { Outlet } from "react-router-dom";
import { Container } from "../components/styles/Container.styled";
import { Description } from '../components/JobCard/styles';

const Report = () => {
    return (
        <div>
            <Header/>
            <Container>
                <h1>Informe a equipe do SouJunior o problema desta vaga</h1>
                <h2 className='border-b'>Após denuncias a vaga nossa equipe ira tomar as devidas providëncias em relação a denúncia.</h2>
                <br></br>
                <Outlet />
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
                <div className='p-0 bg-white border rounded max-w-sm'>
                <div className='p-1 bg-red-600 rounded text-white'>Denunciar esta Vaga</div>
                
                <div className='p-1 rounded-t-lg '>
                <section className='p-4'>
                <h3>UX Designer Junior</h3>
                <p>Empresa Verde</p>
                <p>Bento Gonçalves, Rio Grande do Sul, Brasil</p>
                <br></br>
                <p className='p-4'>REMOTO - JUNIOR - PJ</p>

                <div className='p-4 box-border border-2 rounded-md'>
                <p>Tempo Integral</p>
                <p>51-200 funcionários</p>
                <p>Recrutando agora</p>
                </div>
                
                <article className='p-5'>
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
                </article>
                </section> 
                </div>
                </div>
                    <div className='report_write'>
                    Por que está denunciando esta vaga?<br></br>
                    Informe abaixo a informação mais relevante para a denuncia da vaga!
                <hr></hr>
                <br></br>

                <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleText0" placeholder="Descreva a causa da denúncia?"/>
                </div>
                </div>
                
            </Container>
        </div>
        )
}

export default Report;