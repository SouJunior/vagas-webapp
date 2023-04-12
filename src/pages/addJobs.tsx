import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import {
    Controller,
    FieldValues,
    SubmitHandler,
    useForm,
} from 'react-hook-form';
import axios from 'axios';
import { useApi } from '../hooks/useApi';
import { yupResolver } from '@hookform/resolvers/yup';
import { createJobForm } from '../validations/JobFormValidations';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../components/Header';
import logoNameEmpresa from '../assets/imgs/logo-name-empresa.svg';
import {
    ButtonSection,
    ErrorMessage,
    Form,
    FormHeader,
    FormSection,
    FormSteps,
    FormTitle,
    HeaderContainer,
    HorizontalLine,
    Input,
    Label,
    LogoImage,
    MainGrid,
    Select,
    SeparatorLine,
    TextArea,
    Button,
    CancelButton,
    SalarySection,
    SalaryInput,
    SalaryInputContainer,
    RadioInput,
    RadioInputContainer,
    Container,
    NoJobsContainer,
    InnerContainer,
    Icon,
    Title,
    Message,
    ListJobsContainer,
    ListJobTitle,
} from './styles/addJobsStyles';
import JobPreview from '../components/JobCard/previewJobCard';
import JobModal from '../components/AddJobs/JobModal';
import CancelModal from '../components/CancelModal';
import WaitModal from '../components/WaitModal';
import JobCard from '../components/JobCard';

type IBGEUFResponse = {
    map(arg0: (uf: any) => JSX.Element): import('react').ReactNode;
    sigla: string;
    id: string;
    nome: string;
};

type IBGECITYResponse = {
    id: number;
    nome: string;
};

interface FormData extends FieldValues {
    title: string;
    description: string;
    prerequisites: string;
    benefits: string;
    type: 'Estágio' | 'Trainee' | 'Júnior' | 'Analista';
    type_contract: string;
    other_type_contract?: string;
    salary: number;
    modality: 'Presencial' | 'Remoto' | 'Híbrido';
    headquarters: string;
    contract_time: string | boolean;
    affirmative: string | boolean;
    affirmative_type?: string | undefined;
    company_id?: string | undefined;
}

const AddJobs = () => {
    const {
        register,
        handleSubmit,
        watch,
        control,
        setValue,
        reset,
        trigger,
        formState: { errors },
        clearErrors,
    } = useForm<FormData>({
        mode: 'onChange',
        resolver: yupResolver(createJobForm),
    });

    const [ufs, setUfs] = useState<IBGEUFResponse[]>([]);
    const [cities, setCities] = useState<IBGECITYResponse[]>([]);
    const [selectedUf, setSelectedUf] = useState('0');
    const [affirmativeVanancy, setAffirmativeVanancy] = useState(false);
    const [contractTimeValue, setContractTimeValue] = useState('');
    const [showPreview, setShowPreview] = useState(false);
    const [cancelModal, setCancelModal] = useState(false);
    const [aguardar, setAguardar] = useState(false);
    const [showContractTimeInput, setShowContractTimeInput] = useState(false);
    const [companyId, setCompanyId] = useState<any>('');
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [step, setStep] = useState(1);
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);

    const api = useApi();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
            .then((response) => {
                setUfs(response.data);
                // setCompanyId(localStorage.getItem('authToken'));
            });
    }, []);

    useEffect(() => {
        axios
            .get(
                `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`,
            )
            .then((response) => {
                setCities(response.data);
            });
    }, [selectedUf]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await api.getJobsByCompany(
                'a3ff7a7d-b8ef-4361-b99e-2bef7075d2ee',
            );
            setJobs(data);
        };
        fetchData();
    }, []);

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        data.affirmative = data.affirmative === 'true' ? true : false;
        data.contract_time =
            data.contract_time === 'no'
                ? contractTimeValue
                : 'Contrato por tempo indeterminado';
        if (data.type_contract === 'Outro') {
            data.type_contract = data.other_type_contract ?? '';
            delete data.other_type_contract;
        } else {
            delete data.other_type_contract;
        }
        const createJobCheck = watch([
            'title',
            'description',
            'prerequisites',
            'benefits',
            'type',
            'type_contract',
            'salary',
            'modality',
            'headquarters',
            'contract_time',
            'affirmative',
            'affirmative_type',
            'company_id',
        ]);

        try {
            await api
                .createJob(
                    createJobCheck[0],
                    createJobCheck[1],
                    createJobCheck[2],
                    createJobCheck[3],
                    createJobCheck[4],
                    createJobCheck[5],
                    createJobCheck[6],
                    createJobCheck[7],
                    createJobCheck[8],
                    createJobCheck[9],
                    createJobCheck[10],
                    createJobCheck[11],
                    createJobCheck[12],
                )
                .then((resolve: any) => {
                    toast.success('Vaga criada com sucesso!', {
                        position: 'top-center',
                        theme: 'colored',
                    });
                    setIsModalOpen(true);
                })
                .catch((err: any) => {
                    throw new Error(err.message);
                });
        } catch (error: any) {
            console.log(error);
            // toast.error(error.message, {
            //     position: 'top-center',
            //     theme: 'colored',
            // });
        }
    };

    function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
        const uf = event.target.value;
        setSelectedUf(uf);
    }

    function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
        const city = event.target.value;
        const cityUf = `${city}/${selectedUf}`;
        setValue('headquarters', cityUf);
    }

    const handleClick = async () => {
        const isValid = await trigger([
            'title',
            'description',
            'type',
            'type_contract',
        ]);
        if (isValid) {
            clearErrors();
            NextStep();
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    };

    const handleClickStep2 = async () => {
        const isValid = await trigger([
            'minValue',
            'maxValue',
            'prerequisites',
            'contract_time',
        ]);
        if (isValid) {
            clearErrors();
            NextStep();
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    };

    const handleConfirmCancel = () => {
        setCancelModal(false);
        setAguardar(true);

        setTimeout(() => {
            reset();
            navigate('/');
        }, 1000);
    };
    const handleAffirmativeVacancyChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const { value } = event.target;
        setAffirmativeVanancy(value === 'false');
        setValue('affirmative_type', value === 'false' ? '' : value);
    };

    const NextStep = async () => {
        setStep(step + 1);
    };

    const PreviousStep = () => {
        setStep(step - 1);
    };

    const formValues = watch();
    useEffect(() => {
        const filteredValues = Object.values(formValues).filter(
            (value) => value !== 'Selecione' && value !== '',
        );
        const formEmpty = filteredValues.length === 0;
        setShowPreview(!formEmpty);
    }, [formValues]);

    return (
        <>
            <Header pageName="Criar vaga" backTo={'/'}></Header>
            <HeaderContainer>
                <LogoImage
                    src={logoNameEmpresa}
                    alt="Logo SouJunior Empresa"
                    className="mx-auto my-4 w-[315px]"
                />
                <SeparatorLine />
            </HeaderContainer>
            <MainGrid>
                <FormSection>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <FormHeader>
                            <FormTitle>Preencha os campos</FormTitle>
                            <FormSteps>Etapa {step} de 3</FormSteps>
                        </FormHeader>
                        <HorizontalLine />
                        {step === 1 && (
                            <>
                                <Label htmlFor="title">*Título: </Label>
                                <Input
                                    type="text"
                                    maxLength={30}
                                    id="title"
                                    {...register('title')}
                                />
                                <ErrorMessage>
                                    {errors.title && (
                                        <>{errors.title.message}</>
                                    )}
                                </ErrorMessage>
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
                                />
                                <ErrorMessage>
                                    {errors.description && (
                                        <>{errors.description.message}</>
                                    )}
                                </ErrorMessage>
                                <Label htmlFor="type">Tipo:</Label>

                                <Select
                                    {...register('type')}
                                    id="type"
                                    defaultValue="Selecione"
                                >
                                    <option value="Selecione" disabled hidden>
                                        Selecione
                                    </option>
                                    <option value="Estágio">Estágio</option>
                                    <option value="Trainee">Trainee</option>
                                    <option value="Júnior">Júnior</option>
                                    <option value="Analista">Analista</option>
                                </Select>
                                <ErrorMessage>
                                    {errors.type && <>{errors.type.message}</>}
                                </ErrorMessage>
                                <Label htmlFor="type_contract">
                                    Tipo de contrato:
                                </Label>
                                <Select
                                    {...register('type_contract')}
                                    id="type_contract"
                                    defaultValue="Selecione"
                                >
                                    <option value="Selecione" disabled hidden>
                                        Selecione
                                    </option>
                                    <option value="CLT">CLT</option>
                                    <option value="PJ">PJ</option>
                                    <option value="Outro">Outro</option>
                                </Select>

                                <ErrorMessage>
                                    {errors.type_contract && (
                                        <>{errors.type_contract.message}</>
                                    )}
                                </ErrorMessage>
                                <ButtonSection>
                                    <CancelButton
                                        onClick={() => setCancelModal(true)}
                                    >
                                        Cancelar
                                    </CancelButton>
                                    <Button onClick={handleClick}>
                                        Continuar
                                    </Button>
                                </ButtonSection>
                            </>
                        )}

                        {step === 2 && (
                            <>
                                <SalarySection>
                                    <Label>*Faixa Salarial: </Label>
                                    <SalaryInputContainer>
                                        <div>
                                            <Controller
                                                {...register('minValue')}
                                                control={control}
                                                defaultValue=""
                                                render={({
                                                    field: { onChange, value },
                                                }) => (
                                                    <SalaryInput
                                                        displayType={'input'}
                                                        value={value}
                                                        thousandSeparator={'.'}
                                                        decimalSeparator={','}
                                                        prefix={'R$ '}
                                                        onValueChange={(
                                                            values: any,
                                                        ) => {
                                                            const {
                                                                floatValue,
                                                            } = values;
                                                            onChange(
                                                                floatValue,
                                                            );
                                                        }}
                                                    />
                                                )}
                                            />
                                            <ErrorMessage>
                                                {errors.minValue && (
                                                    <>
                                                        {
                                                            errors.minValue
                                                                .message
                                                        }
                                                    </>
                                                )}
                                            </ErrorMessage>
                                        </div>
                                        <div>
                                            <Controller
                                                {...register('maxValue')}
                                                control={control}
                                                defaultValue=""
                                                render={({
                                                    field: { onChange, value },
                                                }) => (
                                                    <SalaryInput
                                                        value={value}
                                                        displayType={'input'}
                                                        thousandSeparator={'.'}
                                                        decimalSeparator={','}
                                                        prefix={'R$ '}
                                                        onValueChange={(
                                                            values: any,
                                                        ) => {
                                                            const {
                                                                floatValue,
                                                            } = values;
                                                            onChange(
                                                                floatValue,
                                                            );
                                                        }}
                                                    />
                                                )}
                                            />

                                            <ErrorMessage>
                                                {errors.maxValue && (
                                                    <>
                                                        {
                                                            errors.maxValue
                                                                .message
                                                        }
                                                    </>
                                                )}
                                            </ErrorMessage>
                                        </div>
                                    </SalaryInputContainer>
                                </SalarySection>
                                <Label
                                    htmlFor="prerequisites"
                                    aria-label="Pré-requisitos"
                                >
                                    *Pré-requisitos:{' '}
                                </Label>
                                <TextArea
                                    maxLength={3000}
                                    id="prerequisites"
                                    {...register('prerequisites')}
                                />
                                <ErrorMessage>
                                    {errors.prerequisites && (
                                        <>{errors.prerequisites.message}</>
                                    )}
                                </ErrorMessage>
                                <Label>
                                    *Contrato por tempo indeterminado?
                                </Label>
                                <RadioInputContainer>
                                    <Label>
                                        <RadioInput
                                            type="radio"
                                            value="yes"
                                            {...register('contract_time')}
                                            name="contract_time"
                                            defaultChecked
                                            onClick={() =>
                                                setShowContractTimeInput(false)
                                            }
                                        />
                                        Sim
                                    </Label>
                                    <Label>
                                        <RadioInput
                                            type="radio"
                                            value="no"
                                            {...register('contract_time')}
                                            name="contract_time"
                                            onClick={() =>
                                                setShowContractTimeInput(true)
                                            }
                                        />
                                        Não
                                    </Label>
                                </RadioInputContainer>
                                <Label>Tempo do contrato</Label>
                                <Input
                                    type="text"
                                    required
                                    disabled={!showContractTimeInput}
                                    value={contractTimeValue}
                                    onChange={(e) =>
                                        setContractTimeValue(e.target.value)
                                    }
                                />
                                <ErrorMessage>
                                    {errors.contract_time && (
                                        <>{errors.contract_time.message}</>
                                    )}
                                </ErrorMessage>
                                <ButtonSection>
                                    <CancelButton onClick={PreviousStep}>
                                        Voltar
                                    </CancelButton>
                                    <Button onClick={handleClickStep2}>
                                        Continuar
                                    </Button>
                                </ButtonSection>
                            </>
                        )}

                        {step === 3 && (
                            <>
                                <Container>
                                    <div>
                                        <Label>UF:</Label>
                                        <Select
                                            {...register('uf')}
                                            name="uf"
                                            id="uf"
                                            onChange={(e) => {
                                                handleSelectUf(e);
                                                trigger('uf');
                                            }}
                                            defaultValue="Selecione"
                                            width={126}
                                        >
                                            <option
                                                value="Selecione"
                                                disabled
                                                hidden
                                            >
                                                Selecione
                                            </option>
                                            {ufs.map((uf) => (
                                                <option
                                                    key={uf.id}
                                                    value={uf.sigla}
                                                >
                                                    {uf.sigla}
                                                </option>
                                            ))}
                                        </Select>
                                        <ErrorMessage>
                                            {errors.uf && (
                                                <>{errors.uf.message}</>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                    <div>
                                        <Label>Cidade: </Label>
                                        <Select
                                            name="headquarters"
                                            id="headquarters"
                                            onChange={(e) => {
                                                handleSelectCity(e);
                                                trigger('headquarters');
                                            }}
                                            defaultValue="Selecione"
                                            width={205}
                                        >
                                            <option
                                                value="Selecione"
                                                disabled
                                                hidden
                                            >
                                                Selecione
                                            </option>
                                            {cities.map((city) => (
                                                <option
                                                    key={city.id}
                                                    value={city.nome}
                                                >
                                                    {city.nome}
                                                </option>
                                            ))}
                                        </Select>
                                        <div className="text-red-600 text-sm text-center">
                                            {errors.headquarters && (
                                                <>
                                                    {
                                                        errors.headquarters
                                                            .message
                                                    }
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <Label>*Modalidade</Label>
                                        <Select
                                            {...register('modality')}
                                            defaultValue="Selecione"
                                            width={164}
                                        >
                                            <option
                                                value="Selecione"
                                                disabled
                                                hidden
                                            >
                                                Selecione
                                            </option>
                                            <option value="Remoto">
                                                Remoto
                                            </option>
                                            <option value="Híbrido">
                                                Híbrido
                                            </option>
                                            <option value="Presencial">
                                                Presencial
                                            </option>
                                        </Select>
                                        <ErrorMessage>
                                            {errors.modality && (
                                                <>{errors.modality.message}</>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </Container>
                                <Label htmlFor="benefits">Benefícios: </Label>
                                <TextArea
                                    maxLength={3000}
                                    id="benefits"
                                    {...register('benefits')}
                                />
                                <ErrorMessage>
                                    {errors.benefits && (
                                        <>{errors.benefits.message}</>
                                    )}
                                </ErrorMessage>

                                <Label>*Essa é uma vaga afirmativa?</Label>
                                <RadioInputContainer>
                                    <Label>
                                        <RadioInput
                                            {...register('affirmative')}
                                            type="radio"
                                            value="true"
                                            defaultChecked
                                            name="affirmative"
                                            onClick={() =>
                                                handleAffirmativeVacancyChange
                                            }
                                        />
                                        Sim
                                    </Label>
                                    <input
                                        type="hidden"
                                        value={companyId}
                                        {...register('company_id')}
                                    />
                                    <Label>
                                        <RadioInput
                                            {...register('affirmative')}
                                            type="radio"
                                            value="false"
                                            name="affirmative"
                                            onClick={() =>
                                                handleAffirmativeVacancyChange
                                            }
                                        />
                                        Não
                                    </Label>
                                </RadioInputContainer>
                                <Label>Selecione o grupo minoritário</Label>
                                <Select
                                    {...register('affirmative_type')}
                                    disabled={affirmativeVanancy}
                                    defaultValue="Selecione"
                                >
                                    <option value="Selecione" disabled hidden>
                                        Selecione
                                    </option>
                                    <option value="Mulheres Cis ou Trans">
                                        Mulheres Cis ou Trans
                                    </option>
                                    <option value="Pessoa preta ou parda">
                                        Pessoa preta ou parda
                                    </option>
                                    <option value="PCD">PCD</option>
                                    <option value="60+">60+</option>
                                    <option value="LGBTQIA+">LGBTQIA+</option>
                                </Select>
                                <ErrorMessage>
                                    {errors.affirmative_type && (
                                        <>{errors.affirmative_type.message}</>
                                    )}
                                </ErrorMessage>
                                <ButtonSection>
                                    <CancelButton onClick={PreviousStep}>
                                        Voltar
                                    </CancelButton>
                                    <Button type="submit">Finalizar</Button>
                                </ButtonSection>
                            </>
                        )}
                    </Form>
                </FormSection>

                {cancelModal && (
                    <CancelModal
                        handleConfirmCancel={handleConfirmCancel}
                        setCancelModal={setCancelModal}
                    />
                )}

                {aguardar && <WaitModal />}

                {!showPreview && (
                    <NoJobsContainer>
                        <InnerContainer>
                            <Icon />
                        </InnerContainer>
                        <Title>
                            Crie uma vaga ao lado para adicionar a lista de
                            vagas!
                        </Title>
                        <Message>
                            (Uma vez que os dados forem preenchidos, será
                            mostrada uma pré-visualização da vaga)
                        </Message>
                    </NoJobsContainer>
                )}
                {showPreview && (
                    <JobPreview
                        showPreview={showPreview}
                        setShowPreview={setShowPreview}
                        watch={watch}
                        contractTimeValue={contractTimeValue}
                    />
                )}
            </MainGrid>
            <div>
                {isModalOpen && (
                    <JobModal onClose={() => setIsModalOpen(false)} />
                )}
            </div>
            <ListJobTitle>Vagas Publicadas</ListJobTitle>
            <ListJobsContainer>
                {jobs.map((job: any) => (
                    <JobCard
                        key={job.id}
                        id={job.id}
                        title={job.title}
                        description={job.description}
                        jobType={job.jobType}
                        createdAt={job.createdAt}
                        type={job.type}
                        salaryMin={job.salaryMin}
                        salaryMax={job.salaryMax}
                        prerequisites={job.prerequisites}
                        contractType={job.contractType}
                        benefits={job.benefits}
                        affirmative={job.affirmative}
                        affirmativeType={job.affirmativeType}
                        modality={job.modality}
                        headquarters={job.headquarters}
                    />
                ))}
            </ListJobsContainer>
        </>
    );
};

export default AddJobs;
