import { 
    Main, 
    Container, 
    Row,
    Copyright,
    Position,
    ProfileButton,
    SearchButton,
    Input,
    Form 
} from "./styles/CandidatePortalStyles"
import Footer from '../components/Portal/Footer/Index';
import Header from '../components/Portal/Header/Index';
import CurriculumImage from "../assets/imgs/cv.svg"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../contexts/Auth/AuthContext"
import { useContext, useEffect, useState } from "react"
import { useApi } from "../hooks/useApi"

const CandidatePortal = () => {

    const navigate = useNavigate();
    const auth: any = useContext(AuthContext);
    const api = useApi();

    const [field, setField] = useState("")

    console.log(field)

   const handleSearchBox = async (e: any) => {
        e.preventDefault();
        setField(e.target.value);

        if (!field) return;

        const response = await api.searchJobs(field);
        console.log(response.data)

        return response;
   }

  return (
    <Container>
    <Header />
     <Main>
        <Form>
            <Input type="text" value={field} onChange={handleSearchBox} placeholder="Digite seu cargo"/>
            <SearchButton onClick={() => navigate('/feedvagas')}>
                Buscar vagas
            </SearchButton>
        </Form>
        <Row/>
         <h1>{auth.user.name}, atualize seu currículo!</h1>
         <ProfileButton onClick={() => navigate('/')}>
             <div>
                 <img src={CurriculumImage} alt="currículo" />
             </div>
             <div>
                 Atualizar meu currículo
             </div>
         </ProfileButton>
     </Main>
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

export default CandidatePortal