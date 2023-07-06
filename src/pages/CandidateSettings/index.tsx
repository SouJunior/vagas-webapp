import profilePicture from '../../assets/imgs/profile-image.svg';
import {
    Form,
    ProfilePicWrapper,
    Title,
    MainLine,
    CurriculoWrapper,
    DeleteButton,
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
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ConfirmModal from '../../components/Portal/ProfileModal/ConfirmModal';
import CancelModal from '../../components/Portal/ProfileModal/CancelModal';

export const CandidateSettings: React.FC = () => {
    const [cancelModal, setCancelModal] = useState(false);
    const [confirmModal, setConfirmModal] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        setSelectedFile(file);
    };
    const handleDeleteClick = () => {
        setSelectedFile(null);
    };

    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm();

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
                            <select
                                id="states"
                                defaultValue={'DEFAULT'}
                                {...register('location', {
                                    validate: (value) =>
                                        value !== 'DEFAULT' ||
                                        'O campo UF é obrigatório',
                                })}
                                className={errors.location ? 'error' : ''}
                            >
                                <option value=""> -- </option>
                            </select>
                            {errors.location && (
                                <p
                                    style={{
                                        color: 'red',
                                        paddingBottom: '8px',
                                    }}
                                >
                                    {errors.location.message?.toString()}
                                </p>
                            )}
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
                            onChange={handleFileChange}
                            placeholder="Insira seu curriculo em PDF"
                            accept=".pdf"
                        />
                    </CurriculoWrapper>
                    {selectedFile && (
                        <button onClick={handleDeleteClick}>Excluir</button>
                    )}
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
