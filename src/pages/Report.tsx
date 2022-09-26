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
                <h2 className='border-b '>Após denuncias a vaga nossa equipe ira tomar as devidas providëncias em relação a denúncia.</h2>
                <br></br>
                <Outlet />
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
                <div className='p-1 bg-white w-[583px] h-[560px] rounded-[11px] border-2 border-red-600 flex-nowrap overflow-auto' >
                <p className='p-1 ring-4 ring-red-600 rounded bg-red-600 text-white'>Denunciar esta Vaga</p>
                
                <div className='p-1 rounded-t-lg '>
                <section className='p-4'>
                <h3 className='font-extrabold text-[26px]'>UX Designer Junior</h3>
                <p className='text-[16px] font-semibold'>Empresa Verde</p>
                <p>Bento Gonçalves, Rio Grande do Sul, Brasil</p>
                <br></br>
                <p className='p-4 font-semibold'>REMOTO - JUNIOR - PJ</p>

                <div className='p-4 box-border border-2 rounded-md'>
                <p>Tempo Integral</p>
                <p>51-200 funcionários</p>
                <a href="#" className='text-sky-600'>Recrutando agora</a>
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
                Culturalmente, procuramos uma pessoa que:
                    seja curiosa por natureza;
                    perfil mão na massa e ágil;
                    sabe ouvir e se comunicar;
                    busca e tenha um histórico de aprendizado contínuo;
                
                Responsabilidades e atribuições:
                Culturalmente, procuramos uma pessoa que:
                    seja curiosa por natureza;
                    perfil mão na massa e ágil;
                    sabe ouvir e se comunicar;
                    busca e tenha um histórico de aprendizado contínuo;
                
                Responsabilidades e atribuições:
                Culturalmente, procuramos uma pessoa que:
                    seja curiosa por natureza;
                    perfil mão na massa e ágil;
                    sabe ouvir e se comunicar;
                    busca e tenha um histórico de aprendizado contínuo;
                
                Responsabilidades e atribuições:
                Culturalmente, procuramos uma pessoa que:
                    seja curiosa por natureza;
                    perfil mão na massa e ágil;
                    sabe ouvir e se comunicar;
                    busca e tenha um histórico de aprendizado contínuo;
                
                Responsabilidades e atribuições:
                Culturalmente, procuramos uma pessoa que:
                    seja curiosa por natureza;
                    perfil mão na massa e ágil;
                    sabe ouvir e se comunicar;
                    busca e tenha um histórico de aprendizado contínuo;
                
                Responsabilidades e atribuições:
                Culturalmente, procuramos uma pessoa que:
                    seja curiosa por natureza;
                    perfil mão na massa e ágil;
                    sabe ouvir e se comunicar;
                    busca e tenha um histórico de aprendizado contínuo;
                
                Responsabilidades e atribuições:
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
                
                   
                </div>
                
            </Container>
        </div>
        )
}

export default Report;