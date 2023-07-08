import profilePicture from '../../assets/imgs/profile-image.svg';
import trashPicture from '../../assets/imgs/trash.svg';
import {
    Form,
    ProfilePicWrapper,
    Title,
    MainLine,
    CurriculoWrapper,
    LoadCurriculum,
    Trash,
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
import location from '../ProfileSettings/data/location';
import Header from '../../components/Portal/Header';
import { ProfileImg } from '../../components/Portal/Header/styles';
import { HandleInputsRenderCandidate } from './utils/handleInputsRenderCandidate';
import inputConfigCandidate from './data/inputConfigCandidate';
import { ChangeEvent, useRef, useState } from 'react';
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
    const [deleteButton, setDeleteButton] = useState(false);
    const [cancelModal, setCancelModal] = useState(false);
    const [confirmModal, setConfirmModal] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(false);

    // Funções do delete button

    const inputRef1 = useRef<HTMLInputElement | null>(null);
    const inputRef2 = useRef<HTMLInputElement | null>(null);

    const handleFileChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileObj1 = e.target.files && e.target.files[0];

        if (!fileObj1) {
            return;
        }
        setDeleteButton(true);
    };
    const handleFileChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileObj2 = e.target.files && e.target.files[0];

        if (!fileObj2) {
            return;
        }
        setDeleteButton(true);
    };

    const resetFileInput1 = () => {
        if (inputRef1.current) {
            inputRef1.current.value = '';
        }
        setDeleteButton(false);
    };
    const resetFileInput2 = () => {
        if (inputRef2.current) {
            inputRef2.current.value = '';
        }
        setDeleteButton(false);
    };

    // Validação do modal de cancelamento

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
                            <input type="text" placeholder="(00) 00000 0000" />
                            {isValid ? (
                                <p>Número de telefone válido</p>
                            ) : (
                                <p>Número de telefone inválido</p>
                            )}
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
                                {HandleOptionsRender(location)}
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
                        <label htmlFor="fileInput1">Curriculo1</label>
                        <br />
                        <input
                            ref={inputRef1}
                            onChange={handleFileChange1}
                            type="file"
                            id="fileInput1"
                            placeholder="Insira seu curriculo em PDF"
                            accept=".pdf"
                        />
                        {deleteButton && (
                            <Trash onClick={resetFileInput1}>
                                <img src={trashPicture} alt="Deletar arquivo" />
                            </Trash>
                        )}
                    </CurriculoWrapper>
                </div>
                <div className="form__right">
                    <CurriculoWrapper>
                        <label htmlFor="fileInput2">Curriculo2</label>
                        <br />
                        <input
                            ref={inputRef2}
                            onChange={handleFileChange2}
                            type="file"
                            id="fileInput2"
                            name="curriculo2"
                            placeholder="Insira seu curriculo em PDF"
                            accept=".pdf"
                        />
                        {deleteButton && (
                            <Trash onClick={resetFileInput2}>
                                <img src={trashPicture} alt="Deletar arquivo" />
                            </Trash>
                        )}
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
