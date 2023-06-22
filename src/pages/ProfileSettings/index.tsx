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
import { handleInputsRender } from './utils/handleInputsRender';
import { handleOptionsRender } from './utils/handleOptionsRender';

export const ProfileSettings: React.FC = () => {
    return (
        <Container>
            <Header />
            <ProfilePicWrapper>
                <ProfilePicture
                    src={profilePicture}
                    alt="Foto de perfil"
                    width={'10%'}
                />
                <div className="upload">
                    <label htmlFor="profiPic"></label>
                    <input type="file" accept=".jpg, .jpeg, .png" />
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
                        {handleInputsRender(inputConfigs)}
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
                            <option value="pequeno">
                                Pequeno - até 49 funcionários
                            </option>
                            <option value="medio">
                                Médio: 50 a 99 funcionários
                            </option>
                            <option value="grande">
                                Grande: a partir de 100 funcionários
                            </option>
                        </select>
                    </Select>
                    <div className="form__textarea">
                        <label>Decrição da empresa</label>
                        <textarea placeholder="Breve descrição da empresa" />
                    </div>
                </div>

                <div className="form__change">
                    <Button>Alterar</Button>
                </div>
                <div className="form__cancel">
                    <Button background="outline">Cancelar</Button>
                </div>
            </Form>
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
