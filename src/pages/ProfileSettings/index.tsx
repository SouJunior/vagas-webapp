import profilePicture from '../../assets/imgs/profile-image.svg';
import { Form, ProfileImgWrapper } from './style';
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
import Footer from '../../components/Portal/Footer';
import inputConfigs from './data/inputSettings';
import location from './data/location';
import companyType from './data/companyType';
import Header from '../../components/Portal/Header';
import { ProfileImg } from '../../components/Portal/Header/styles';
import { HandleInputsRender } from './utils/handleInputsRender';
import { HandleOptionsRender } from './utils/handleOptionsRender';
import { useContext, useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { handleSubmitForm } from './utils/handleSubimitForm';
import { handleImgFile } from './utils/handleImgFile';

import { useForm } from 'react-hook-form';

export const ProfileSettings: React.FC = () => {
    const [charCount, setCharCount] = useState(0);
    const [currChar, setCurrChar] = useState(0);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<Blob | null>(null);

    //TODO: Utilizar essa variável para o tamanho da foto e formato
    console.log(selectedImage) 

    const api = useApi();
    const auth = useContext(AuthContext);

    const { register, watch } = useForm();

    function setError(error: string) {
        if (watch('location') === 'DEFAULT' ?? undefined) {
            return error;
        }
        return;
    }

    useEffect(() => {
        setCurrChar(2000 - charCount);
    }, [charCount]);

    return (
        <Container>
            <Header />
            <form
                onSubmit={(e) =>
                    handleSubmitForm({ e, selectedImage, api, auth })
                }
            >
                <ProfileImgWrapper>
                    <ProfileImg
                        src={
                            imagePreview ||
                            (auth.user.profile ?? profilePicture)
                        }
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
                            onChange={(e: any) =>
                                handleImgFile({
                                    e,
                                    setSelectedImage,
                                    setImagePreview,
                                })
                            }
                        />
                    </div>
                    <p>Aceitável somente os formatos .jpg, .jpeg e .png</p>
                    <span>Aqui tem um erro!</span>
                </ProfileImgWrapper>
                <Main>
                    <Row />
                </Main>
                <Form charQtde={currChar}>
                    <div className="form__left">
                        <InputWrapper>
                            {HandleInputsRender(inputConfigs)}
                        </InputWrapper>
                    </div>
                    <div className="form__right">
                        <Select>
                            <label htmlFor="states">
                                UF<sup>*</sup>
                            </label>
                            <select
                                id="states"
                                defaultValue={'DEFAULT'}
                                {...register('location', {
                                    required: 'O campo UF é obrigatório',
                                })}
                            >
                                <option value="DEFAULT" disabled>
                                    --
                                </option>
                                {HandleOptionsRender(location)}
                            </select>
                            <p style={{ color: 'red' }}>
                                {setError('O campo UF é obrigatório')}
                            </p>
                            <label htmlFor="companyType">Tipo de Empresa</label>
                            <select
                                id="companyType"
                                name="type"
                                defaultValue={'DEFAULT'}
                            >
                                <option value="DEFAULT" disabled>
                                    --
                                </option>
                                {HandleOptionsRender(companyType)}
                            </select>
                            <label htmlFor="companySize">
                                Porte da Empresa
                            </label>
                            <select
                                id="companySize"
                                name="size"
                                defaultValue={'DEFAULT'}
                            >
                                <option value="DEFAULT" disabled>
                                    --
                                </option>
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
                            <textarea
                                name="description"
                                placeholder="Breve descrição da empresa"
                                onChange={(e) =>
                                    setCharCount(e.target.value.length)
                                }
                            />
                        </div>
                        <span>{currChar} caracteres restantes</span>
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
