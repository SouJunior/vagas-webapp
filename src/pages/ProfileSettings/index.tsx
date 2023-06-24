import profilePicture from '../../assets/imgs/profile-image.svg';
import { Form, ProfilePicWrapper } from './style';
import {
    Container,
    Copyright,
    Main,
    Position,
    Row,
} from '../styles/CompanyPortalStyles';
import InputWrapper from '../../components/InputWrapper';
import { Select } from '../../components/Select';
import { Button } from '../../components/Button';
// import { Footer } from '../../components/Footer';
import Footer from '../../components/Portal/Footer';
import inputConfigs from './data/inputSettings';
import countryStates from './data/countryStates';
import typeCompany from './data/typeCompany';
import Header from '../../components/Portal/Header';
import { ProfilePicture } from '../../components/Portal/Header/styles';
import { HandleInputsRender } from './utils/handleInputsRender';
import { handleOptionsRender } from './utils/handleOptionsRender';
import { useApi } from '../../hooks/useApi';

export const ProfileSettings: React.FC = () => {

    const api = useApi();

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("companyType", e.target.type.value);
        formData.append("companySize", e.target.size.value);
        formData.append("location", e.target.states.value);
        formData.append("companySite", e.target.site.value);
        formData.append("description", e.target.description.value);
        formData.append("otherSite[instagram]", e.target.instagram.value);
        formData.append("otherSite[linkedin]", e.target.linkedin.value);
        formData.append("otherSite[twitter]", e.target.twitter.value);
        formData.append("file", e.target.profiPic.value)

        api.updateCompanyProfile(formData)
            .then((res) => {
                //TODO mensagem de envio com sucesso / pop-up "atualizações salvas"
            })
            .catch((err) => {
                //TODO ver mensagem de erro para o usuário
            });

    };

    return (
        <Container>
            <Header />
            <form onSubmit={handleSubmit}>
                <ProfilePicWrapper>
                    <ProfilePicture
                        src={profilePicture}
                        alt="Foto de perfil"
                        width={'10%'}
                    />
                    <div className="upload">
                        <label htmlFor="profiPic">Alterar foto</label>
                        <input name="profPic" id="profiPic" type="file" accept=".jpg, .jpeg, .png" />
                    </div>
                    <p>Somente formatos jpg, jpeg e png</p>
                    <span>Aqui tem um erro!</span>
                </ProfilePicWrapper>
                <Main>
                    <Row />
                </Main>
                <Form>
                    <div className="form__left">
                        <InputWrapper>
                            {HandleInputsRender(inputConfigs)}
                        </InputWrapper>
                    </div>
                    <div className="form__right">
                        <Select>
                            <label>
                                UF<sup>*</sup>
                            </label>
                            <select name="states">
                                <option value="">Selecione um estado</option>
                                {handleOptionsRender(countryStates)}
                            </select>
                            <label>Tipo de Empresa</label>
                            <select name="type">
                                <option value="">Selecione um tipo</option>
                                {handleOptionsRender(typeCompany)}
                            </select>
                            <label>Porte da Empresa</label>
                            <select name="size">
                                <option value="">Selecione um tamanho</option>
                                <option value="SMALL SIZE">
                                    Pequeno - até 49 funcionários
                                </option>
                                <option value="HALF SIZE">
                                    Médio: 50 a 99 funcionários
                                </option>
                                <option value="BIG SIZE">
                                    Grande: a partir de 100 funcionários
                                </option>
                            </select>
                        </Select>
                        <div className="form__textarea">
                            <label>Decrição da empresa</label>
                            <textarea name="description" placeholder="Breve descrição da empresa" />
                        </div>
                    </div>

                    <div className="form__change">
                        <Button type="submit">Alterar</Button>
                    </div>
                    <div className="form__cancel">
                        <Button background="outline">Cancelar</Button>
                    </div>
                </Form>
            </form>
            <Position>
                <Main>
                    <Row />
                </Main>
                <Footer />
                <Main>
                    <Row />
                </Main>
            </Position>
            <Copyright>&copy; 2023 SouJunior</Copyright>
        </Container>
    );
};
