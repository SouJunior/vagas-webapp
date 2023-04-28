import { 
    Header,
    Main, 
    Container, 
    Row,
    Copyright,
    ProfilePicture,
    UserButton,
    Company,
    Email,
    ArrowPicture,
    HeaderLogo,
    Position, 
    UserInfo,
    JobButton
} from "./styles/CompanyPortalStyles"
import LogoImage from "../assets/imgs/logotipo-icone-extendida.svg"
import ArrowImage from "../assets/imgs/arrow.svg"
import PlusSignImage from "../assets/imgs/plus-sign.png"
import Footer from '../components/CompanyPortal/Footer';
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../contexts/Auth/AuthContext"
import { useContext, useEffect, useState } from "react"
import { useApi } from "../hooks/useApi"

const CompanyPortal = () => {

    const navigate = useNavigate();
    const auth: any = useContext(AuthContext);
    const api = useApi();
    const [jobs,setJobs] = useState<any[]>([])

    useEffect(() => {
        const loadCompanyJobs = async (id: string)=> {
            const getJobsData = await api.getJobsByCompany(id);
            setJobs(getJobsData);
        }
        loadCompanyJobs(auth.user.id)
    }, [])
    
  return (
    <Container>
        <Header>
            <div>
                <HeaderLogo src={LogoImage} width="194px" height="29px" alt="logo" />
            </div>
            <UserButton>
                <a href="alterar-perfil">
                    <ProfilePicture src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-gris.png" 
                    alt="foto de perfil"/>
                </a>
                <UserInfo>
                    <Company>{auth.user.companyName}</Company>    
                    <Email>{auth.user.email}</Email> 
                </UserInfo>
                <ArrowPicture src={ArrowImage} alt="flecha" />
            </UserButton>        
        </Header>
        {(jobs?.length !== 0) ? 
        (<Main>
            <h2>Vagas cadastradas:</h2>
             {jobs.map ((job, index) =>
             <ul key={index}>
                <li>
                    Título da vaga: {job.title}
                </li>
                <li>
                    Pré-requisitos: {job.prerequisites}
                </li>
             </ul>)}
        </Main>):
        (<Main>
            <h1>{auth.user.companyName}, anuncie sua primeira vaga!</h1>
            <JobButton onClick={() => navigate('/insertjob')}>
                <div>
                    <img src={PlusSignImage} alt="mais" />
                </div>
                <div>
                    Anunciar vaga
                </div>
            </JobButton>
        </Main>)}
        <Position>
        <Main>
            <Row/>
        </Main>
        <Footer />
        <Main>
            <Row/>
        </Main>
        </Position>
        <Copyright>&copy; 2023 SouJunior</Copyright>
    </Container>
  )
}

export default CompanyPortal