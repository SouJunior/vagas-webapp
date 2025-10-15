import { Button } from '../../components/Button';
import InputWrapper from '../../components/InputWrapper';
import { Select } from '../../components/Select';
import { Form, ProfileImgWrapper } from './style';

import Header from '@components/Header';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useApi } from '../../hooks/useApi';
import companyType from './data/companyType';
import inputConfigs from './data/inputSettings';
import location from './data/location';
import { checkImgZise } from './utils/checkImgSize';
import { handleImgFile } from './utils/handleImgFile';
import { HandleInputsRender } from './utils/handleInputsRender';
import { HandleOptionsRender } from './utils/handleOptionsRender';
import { handleSubmitForm } from './utils/handleSubimitForm';

import FooterDefault from '@components/FooterDefault';
import { useForm } from 'react-hook-form';
import CancelModal from '../../components/Portal/ProfileModal/CancelModal';
import ConfirmModal from '../../components/Portal/ProfileModal/ConfirmModal';

export const ProfileSettings: React.FC = () => {
  const [charCount, setCharCount] = useState(0);
  const [currChar, setCurrChar] = useState(0);
  const [selectedImage, setSelectedImage] = useState<File | null | any>(null);
  const [imagePreview, setImagePreview] = useState<Blob | null>(null);
  const [cancelModal, setCancelModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCancelModal = (e: any) => {
    e.preventDefault();
    setIsModalOpen(false);
    setCancelModal(true);
    window.scrollTo(0, 0);
  };

  const api = useApi();
  const auth = useContext(AuthContext);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setCurrChar(2000 - charCount);
  }, [charCount]);

  const onSubmit = (data: any) => {
    handleSubmitForm({ data, selectedImage, api, auth, setConfirmModal });
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#fdfffc] text-center font-canada">
      <Header
        variant="loggedInUser"
        userName={auth?.user?.name}
        email={auth?.user?.email}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ProfileImgWrapper>
          <img
            src={
              imagePreview || (auth.user.profile ?? '/assets/profile-image.svg')
            }
            alt="Foto de perfil"
            className="mx-4 aspect-square w-[10%] cursor-default rounded-full object-cover"
          />
          <div className="upload">
            <label htmlFor="profiPic">Alterar foto</label>
            {/**
             * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
             */}
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
          <span className="img__error">{checkImgZise(selectedImage)}</span>
        </ProfileImgWrapper>
        <main className="pt-15 flex flex-col items-center justify-center px-2.5 pb-10 text-center">
          <div className="mb-auto w-[90%] border-t-2 border-[#979797] opacity-20" />
        </main>
        <Form charQtde={currChar}>
          <div className="form__left">
            <InputWrapper>
              {HandleInputsRender(inputConfigs, register, setValue)}
            </InputWrapper>
          </div>
          <div className="form__right">
            {/*TODO: Isso é um wrapper deveria chamar SelectWrapper */}
            <Select>
              <label htmlFor="states">
                UF<sup>*</sup>
              </label>
              <select
                id="states"
                defaultValue={auth.user.uf ?? 'DEFAULT'}
                {...register('uf', {
                  validate: (value) =>
                    value !== 'DEFAULT' || 'O campo UF é obrigatório',
                })}
                className={errors.uf ? 'error' : ''}
              >
                <option value="DEFAULT" disabled>
                  --
                </option>
                {HandleOptionsRender(location)}
              </select>
              {errors.uf && (
                <p
                  style={{
                    color: 'red',
                    paddingBottom: '8px',
                  }}
                >
                  {errors.uf.message?.toString()}
                </p>
              )}

              <label htmlFor="companyType">Tipo de Empresa</label>
              <select
                id="companyType"
                defaultValue={auth.user.companyType ?? 'DEFAULT'}
                {...register('type')}
              >
                <option value="DEFAULT" disabled>
                  --
                </option>
                {HandleOptionsRender(companyType)}
              </select>
              <label htmlFor="companySize">Porte da Empresa</label>
              <select
                id="companySize"
                defaultValue={auth.user.companySize ?? 'DEFAULT'}
                {...register('size')}
              >
                <option value="DEFAULT" disabled>
                  --
                </option>
                <option value="SMALL SIZE">
                  Pequeno - até 49 funcionários
                </option>
                <option value="HALF SIZE">Médio: 50 a 99 funcionários</option>
                <option value="BIG SIZE">
                  Grande: a partir de 100 funcionários
                </option>
              </select>
            </Select>
            <div className="form__textarea">
              <label>Decrição da empresa</label>
              <textarea
                placeholder="Breve descrição da empresa"
                {...register('description')}
                defaultValue={auth.user.description}
                onChange={(e) => setCharCount(e.target.value.length)}
              />
            </div>
            <span>{currChar} caracteres restantes</span>
          </div>

          <div className="form__change">
            <Button type="submit">Alterar</Button>
          </div>
          <div className="form__cancel">
            <Button background="outline" onClick={handleCancelModal}>
              Cancelar
            </Button>
          </div>
        </Form>
      </form>

      {confirmModal && <ConfirmModal setConfirmModal={setConfirmModal} />}

      {cancelModal && (
        <CancelModal setCancelModal={setCancelModal} open={isModalOpen} />
      )}
      <div className="mt-auto">
        <FooterDefault />
      </div>
    </div>
  );
};
