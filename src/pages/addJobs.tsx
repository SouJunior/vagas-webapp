import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useApi } from '../hooks/useApi';
import { yupResolver } from '@hookform/resolvers/yup';
import { createJobForm } from '../validations/JobFormValidations';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../components/Header';
import logoNameEmpresa from '../assets/imgs/logo-name-empresa.svg';
import {
    Form,
    FormHeader,
    FormSection,
    FormSteps,
    FormTitle,
    HeaderContainer,
    HorizontalLine,
    LogoImage,
    MainGrid,
    SeparatorLine,
    NoJobsContainer,
    InnerContainer,
    Icon,
    Title,
    Message,
} from './styles/addJobsStyles';
import JobPreview from '../components/JobCard/previewJobCard';
import JobModal from '../components/AddJobs/JobModal';
import CancelModal from '../components/CancelModal';
import WaitModal from '../components/WaitModal';
import StepOne from '../components/AddJobs/FormSteps/StepOne';
import StepTwo from '../components/AddJobs/FormSteps/StepTwo';
import StepThree from '../components/AddJobs/FormSteps/StepThree';

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
    contractType: string | undefined;
    affirmative: string | boolean;
    affirmativeType?: any;
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

    const [contractTimeValue, setContractTimeValue] = useState('');
    const [showPreview, setShowPreview] = useState(false);
    const [cancelModal, setCancelModal] = useState(false);
    const [aguardar, setAguardar] = useState(false);
    const [showContractTimeInput, setShowContractTimeInput] = useState(false);
    const [companyId, setCompanyId] = useState<any>('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [step, setStep] = useState(1);

    const api = useApi();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        data.affirmative = data.affirmative === 'true' ? true : false;

        const createJobCheck = watch([
            'title',
            'description',
            'prerequisites',
            'benefits',
            'type',
            'typeContract',
            'salaryMin',
            'salaryMax',
            'modality',
            'federalUnit',
            'city',
            'indefinideContract',
            'contractType',
            'affirmative',
            'affirmativeType',
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
                    createJobCheck[13],
                    createJobCheck[14],
                    createJobCheck[15],
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
            toast.error(error.message, {
                position: 'top-center',
                theme: 'colored',
            });
        }
    };

    const handleClick = async () => {
        const isValid = await trigger([
            'title',
            'description',
            'prerequisites',
        ]);
        if (isValid) {
            NextStep();
            clearErrors();
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    };

    const handleClickStep2 = async () => {
        const isValid = await trigger([
            'salaryMin',
            'salaryMax',
            'type',
            'typeContract',
            'contractType',
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
                            <StepOne
                                setCancelModal={setCancelModal}
                                handleClick={handleClick}
                                errors={errors}
                                register={register}
                            />
                        )}

                        {step === 2 && (
                            <StepTwo
                                register={register}
                                control={control}
                                errors={errors}
                                setShowContractTimeInput={
                                    setShowContractTimeInput
                                }
                                setContractTimeValue={setContractTimeValue}
                                handleClickStep2={handleClickStep2}
                                PreviousStep={PreviousStep}
                                showContractTimeInput={showContractTimeInput}
                                contractTimeValue={contractTimeValue}
                                trigger={trigger}
                                setValue={setValue}
                            />
                        )}

                        <input
                            type="hidden"
                            value={companyId}
                            {...register('company_id')}
                        />

                        {step === 3 && (
                            <StepThree
                                register={register}
                                errors={errors}
                                trigger={trigger}
                                watch={watch}
                                setValue={setValue}
                                PreviousStep={PreviousStep}
                                onSubmit={onSubmit}
                                setCompanyId={setCompanyId}
                            />
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
        </>
    );
};

export default AddJobs;
