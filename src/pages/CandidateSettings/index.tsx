import profilePicture from '../../assets/imgs/profile-image.svg';
import {
    Form,
    ProfilePicWrapper,
    Title,
    MainLine,
    CurriculoWrapper,
    LoadCurriculum,
} from './style';
import {
    Container,
    Copyright,
    Position,
    Main,
    Row,
} from '../styles/CandidatePortalStyles';
import InputWrapper from '../../components/InputWrapper';
import { Select } from '../../components/Select';
import { Button } from '../../components/Button';
import Footer from '../../components/Portal/Footer';
import countryStates from './data/countryStates';
import Header from '../../components/Portal/Header';
import { ProfileImg } from '../../components/Portal/Header/styles';
import { HandleInputsRenderCandidate } from './utils/handleInputsRenderCandidate';
import inputConfigCandidate from './data/inputConfigCandidate';
import { useRef, useState } from 'react';
import ConfirmModal from '../../components/Portal/ProfileModal/ConfirmModal';
import CancelModal from '../../components/Portal/ProfileModal/CancelModal';

export const CandidateSettings: React.FC = () => {
    const HandleOptionsRender = (arr: any): [] => {
        return arr.map((element: any) => {
            const key = element.id;

            return (
                <option key={key} value={element.sigla}>
                    {element.nome}
                </option>
            );
        });
    };
    const [cancelModal, setCancelModal] = useState(false);
    const [confirmModal, setConfirmModal] = useState(false);

    const handleCancelModal = (e: any) => {
        e.preventDefault();
        document.body.style.overflow = 'hidden';
        setCancelModal(true);
        window.scrollTo(0, 0);
    };
    return (
        <Container>
            <Header />
            <Title>Atualizar Perfil</Title>
            <MainLine>
                <Row />
            </MainLine>
            <form>
                <ProfilePicWrapper>
                    <ProfileImg
                        src={profilePicture}
                        alt="Foto de perfil"
                        width={'10%'}
                    />
                    <div className="upload">
                        <label htmlFor="profiPic">Alterar foto</label>
                        <input
                            name="profPic"
                            id="profiPic"
                            type="file"
                            accept=".jpg, .jpeg, .png"
                        />
                    </div>
                    <p>Somente formatos jpg, jpeg e png</p>
                    <span>Tamanho ou formato inválido</span>
                </ProfilePicWrapper>
                <MainLine>
                    <Row />
                </MainLine>
                <Title>Dados Pessoais</Title>
                <Form>
                    <div className="form__left">
                        <InputWrapper>
                            {HandleInputsRenderCandidate(inputConfigCandidate)}
                            <label>Telefone 1:</label>
                            <input
                                type="number"
                                placeholder="(00) 00000 - 0000"
                            />
                        </InputWrapper>
                    </div>
                    <div className="form__right">
                        <InputWrapper>
                            <label>Cidade:</label>
                            <input
                                type="text"
                                placeholder="Insira sua cidade"
                            />
                        </InputWrapper>
                        <Select>
                            <label htmlFor="states">
                                UF<sup>*</sup>
                            </label>
                            <select>
                                <option value="DEFAULT">--</option>
                                {HandleOptionsRender(countryStates)}
                            </select>
                        </Select>

                        <InputWrapper>
                            <label>
                                Telefone 2 <br />
                            </label>

                            <input
                                type="number"
                                name="numero2"
                                placeholder="(00) 00000 - 0000"
                            />
                        </InputWrapper>
                    </div>
                </Form>
            </form>
            <MainLine>
                <Row />
            </MainLine>
            <Title>Dados Profissionais</Title>

            <Form>
                <div className="form__left">
                    <CurriculoWrapper>
                        <label htmlFor="curriculo1">Curriculo1</label>
                        <br />
                        <input
                            type="file"
                            name="curriculo1"
                            id="documentoInput"
                            placeholder="Insira seu curriculo em PDF"
                            accept=".pdf"
                        />
                    </CurriculoWrapper>
                </div>

                <div className="form__right">
                    <CurriculoWrapper>
                        <label htmlFor="curriculo2">Curriculo2</label>
                        <br />
                        <input
                            type="file"
                            id="curriculo2"
                            name="curriculo2"
                            placeholder="Insira seu curriculo em PDF"
                            accept=".pdf"
                        />
                    </CurriculoWrapper>
                </div>
            </Form>
            <LoadCurriculum>
                <Button>Carregar Curriculo</Button>
            </LoadCurriculum>
            <Main>
                <Row />
            </Main>

            <Form>
                <div className="form__left">
                    <Button>Atualizar</Button>
                </div>
                <div className="form__right">
                    <Button background="outline" onClick={handleCancelModal}>
                        Cancelar
                    </Button>
                </div>
            </Form>

            {confirmModal && <ConfirmModal setConfirmModal={setConfirmModal} />}

            {cancelModal && <CancelModal setCancelModal={setCancelModal} />}

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
