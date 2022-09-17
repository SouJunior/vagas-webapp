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
                
            </Container>
            <Footer/>
        </div>
        )
}

export default Report;