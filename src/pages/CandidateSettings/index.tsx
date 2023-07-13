import profilePicture from '../../assets/imgs/profile-image.svg';
import trashPicture from '../../assets/imgs/trash.svg';
import {
    Container,
    Form,
    ProfilePicWrapper,
    Title,
    CurriculoWrapper,
    Trash,
    ExtraLine,
    Required,
    Buttons,
} from './style';
import {
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
    const [deleteButton1, setDeleteButton1] = useState(false);
    const [deleteButton2, setDeleteButton2] = useState(false);
    const [cancelModal, setCancelModal] = useState(false);
    const [confirmModal, setConfirmModal] = useState(false);
    const [fileName1, setFileName1] = useState<boolean | any>();
    const [fileName2, setFileName2] = useState<boolean | any>();

    // Funções do delete button

    const inputRef1 = useRef<HTMLInputElement | null>(null);
    const inputRef2 = useRef<HTMLInputElement | null>(null);

    const handleFileChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileObj1 = e.target.files && e.target.files[0];
        setFileName1(fileObj1);

        if (!fileObj1) {
            return;
        }
        setDeleteButton1(true);
    };

    const handleFileChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileObj2 = e.target.files && e.target.files[0];
        setFileName2(fileObj2);

        if (!fileObj2) {
            return;
        }
        setDeleteButton2(true);
    };

    const resetFileInput1 = () => {
        if (inputRef1.current) {
            inputRef1.current.value = '';
        }
        setDeleteButton1(false);
        setFileName1(false)
    };
    const resetFileInput2 = () => {
        if (inputRef2.current) {
            inputRef2.current.value = '';
        }
        setDeleteButton2(false);
        setFileName2(false)
    };

    // Função do modal de cancelamento

    const handleCancelModal = (e: any) => {
        e.preventDefault();
        document.body.style.overflow = 'hidden';
        setCancelModal(true);
        window.scrollTo(0, 0);
    };
    return (
        <Container>
            <Header />
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
                <Main>
                    <Row />
                </Main>
                <Title>Dados Pessoais</Title>
                <Form>
                    <div className="form__left">
                        <InputWrapper>
                            {HandleInputsRenderCandidate(inputConfigCandidate)}
                            <label>
                                Telefone 1<Required>*</Required>
                                <input
                                    type="tel"
                                    name="phoneNumber1"
                                    placeholder="(00) 00000-0000"
                                    maxLength={11}
                                    required
                                />
                            </label>
                        </InputWrapper>
                    </div>
                    <div className="form__right">
                        <InputWrapper>
                            <label>
                                Cidade<Required>*</Required>
                                <input
                                    type="text"
                                    placeholder="Insira sua cidade"
                                    required
                                />
                            </label>
                        </InputWrapper>
                        <Select>
                            <label htmlFor="states">
                                UF<Required>*</Required>
                            </label>
                            <select id="states" required>
                                <option value="DEFAULT">--</option>
                                {HandleOptionsRender(location)}
                            </select>
                        </Select>
                        <InputWrapper>
                            <label>
                                Telefone 2
                                <input
                                    maxLength={11}
                                    type="tel"
                                    name="phoneNumber2"
                                    placeholder="(00) 00000-0000"
                                />
                            </label>
                        </InputWrapper>
                    </div>
                </Form>
                <Main>
                    <Row />
                </Main>
                <Title>Dados Profissionais</Title>
                <Form>
                    <div className="form__left">
                        <CurriculoWrapper>
                            <span>Currículo 1 <Required>*</Required></span>
                            <div>
                                {fileName1 ? (
                                    <label htmlFor="fileInput1">
                                        {fileName1.name}
                                    </label>) :
                                    (<label htmlFor="fileInput1">
                                        Insira seu currículo em PDF
                                    </label>)
                                }
                                {deleteButton1 && (
                                    <Trash onClick={resetFileInput1}>
                                        <img src={trashPicture} alt="Deletar arquivo" />
                                    </Trash>
                                )}
                            </div>
                            <input
                                ref={inputRef1}
                                onChange={handleFileChange1}
                                type="file"
                                id="fileInput1"
                                accept=".pdf"
                                required
                            />
                        </CurriculoWrapper>
                    </div>
                    <div className="form__right">
                        <CurriculoWrapper>
                            <span>Currículo 2</span>
                            <div>
                                {
                                    fileName2 ? (
                                        <label htmlFor="fileInput2">
                                            {fileName2.name}
                                        </label>) :
                                        (<label htmlFor="fileInput2">
                                            Insira seu currículo em PDF
                                        </label>)
                                }
                                {deleteButton2 && (
                                    <Trash onClick={resetFileInput2}>
                                        <img src={trashPicture} alt="Deletar arquivo" />
                                    </Trash>
                                )}
                            </div>
                            <input
                                ref={inputRef2}
                                onChange={handleFileChange2}
                                type="file"
                                id="fileInput2"
                                name="curriculo2"
                                accept=".pdf"
                            />
                        </CurriculoWrapper>
                    </div>
                </Form>
                <ExtraLine>
                    <Row />
                </ExtraLine>
                <Buttons>
                    <div>
                        <Button type="submit">
                            Atualizar
                        </Button>
                    </div>
                    <div>
                        <Button background="outline" onClick={handleCancelModal}>
                            Cancelar
                        </Button>
                    </div>
                </Buttons>
            </form>
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
        </Container>
    );
};
