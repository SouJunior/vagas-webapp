import {
  Button,
  ButtonSection,
  CancelButton,
  ErrorMessage,
  Input,
  Label,
  TextArea,
} from './styles';

type StepOneProps = {
  setCancelModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: () => void;
  errors: Record<string, any>;
  register: any;
};

const StepOne = ({
  setCancelModal,
  handleClick,
  errors,
  register,
}: StepOneProps) => {
  return (
    <>
      <Label htmlFor="title">*Título: </Label>
      <Input
        type="text"
        maxLength={30}
        id="title"
        {...register('title')}
        placeholder="Título da vaga"
      />
      <ErrorMessage>{errors.title && <>{errors.title.message}</>}</ErrorMessage>
      <Label
        htmlFor="description"
        aria-label="Descrição da vaga. É obrigatória e deve ter no máximo 3000 caracteres."
      >
        *Descrição:{' '}
      </Label>
      <TextArea
        maxLength={3000}
        id="description"
        {...register('description')}
        aria-describedby="description-error"
        placeholder="Descrição da vaga"
      />
      <ErrorMessage>
        {errors.description && <>{errors.description.message}</>}
      </ErrorMessage>

      <Label htmlFor="prerequisites" aria-label="Pré-requisitos">
        *Pré-requisitos:{' '}
      </Label>
      <TextArea
        maxLength={3000}
        id="prerequisites"
        {...register('prerequisites')}
        placeholder="Informe os pré-requisitos da vaga cadastrada"
      />
      <ErrorMessage>
        {errors.prerequisites && <>{errors.prerequisites.message}</>}
      </ErrorMessage>

      <ButtonSection>
        <CancelButton onClick={() => setCancelModal(true)}>
          Cancelar
        </CancelButton>
        <Button onClick={handleClick}>Continuar</Button>
      </ButtonSection>
    </>
  );
};

export default StepOne;
