import { useState } from 'react';
import LogoImage from '../../assets/imgs/logotipo-icone-extendida.svg';
import { useApi } from '../../hooks/useApi';
import {
  Background,
  Btn,
  ButtonsWrapper,
  Container,
  LoadingBar,
  ModalColumn,
  ModalHead,
  ModalRow,
  ModalWrapper,
  Option,
  ProgressBar,
  Success,
} from './styles';

interface Props {
  title: string;
  id: string;
  onClose: () => void;
}

function EndJobModal({ title, onClose, id }: Props) {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const api = useApi();

  const endJobById = async () => {
    const response = await api.deleteJob(id);
    setSuccess(true);

    setTimeout(() => {
      onClose();
      setLoading(false);
    }, 3000);

    // return response;
  };

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Container>
      <Background
        onClick={() => {
          onClose();
        }}
      />
      <ModalWrapper>
        <ModalHead>
          <img
            src={LogoImage}
            alt="Logotipo-estendida-com-ícone-da-SouJunior"
          />
        </ModalHead>
        {success ? (
          <>
            <Success>Vaga cancelada com sucesso!</Success>
            {loading ? (
              <LoadingBar>
                <ProgressBar />
              </LoadingBar>
            ) : null}
          </>
        ) : (
          <ModalRow>
            <ModalColumn>
              <img src="/assets/profile-image.svg" />
            </ModalColumn>
            <ModalColumn>
              <h2>Qual o motivo de encerramento da vaga?</h2>
              <h2 className="job-title">{title}</h2>

              <form>
                <Option>
                  <input
                    type="radio"
                    id="souJuniorOption"
                    value="souJunior"
                    checked={selectedOption === 'souJunior'}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="souJuniorOption">
                    Achei o candidato pela SouJunior
                  </label>
                </Option>
                <Option>
                  <input
                    type="radio"
                    id="outraPlataformaOption"
                    value="outraPlataforma"
                    checked={selectedOption === 'outraPlataforma'}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="outraPlataformaOption">
                    Achei o candidato em outra plataforma
                  </label>
                </Option>
                <Option>
                  <input
                    type="radio"
                    id="desistenciaOption"
                    value="desistencia"
                    checked={selectedOption === 'desistencia'}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="desistenciaOption">
                    A empresa desistiu de contratar nesse momento
                  </label>
                </Option>
              </form>

              <ButtonsWrapper>
                <Btn type="confirm" onClick={() => endJobById()}>
                  Confirmar
                </Btn>
                <Btn type="cancel" onClick={() => onClose()}>
                  Cancelar
                </Btn>
              </ButtonsWrapper>
            </ModalColumn>
          </ModalRow>
        )}
      </ModalWrapper>
    </Container>
  );
}

export default EndJobModal;
