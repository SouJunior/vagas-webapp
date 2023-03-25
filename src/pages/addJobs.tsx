import { ChangeEvent, useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import {
    Controller,
    FieldValues,
    SubmitHandler,
    useForm,
} from 'react-hook-form';
import axios from 'axios';
import { useApi } from '../hooks/useApi';
import { yupResolver } from '@hookform/resolvers/yup';
import { createJobForm } from '../validations';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PreviewModal from '../components/PreviewModal';
import CancelModal from '../components/CancelModal';
import WaitModal from '../components/WaitModal';

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
    } = useForm<FormData>({
        mode: 'onChange',
        resolver: yupResolver(createJobForm),
    });
    const [showOtherInput, setShowOtherInput] = useState(false);
    const [ufs, setUfs] = useState<IBGEUFResponse[]>([]);
    const [cities, setCities] = useState<IBGECITYResponse[]>([]);
    const [selectedUf, setSelectedUf] = useState('0');
    const [modality, setModality] = useState(false);
    const [affirmativeVanancy, setAffirmativeVanancy] = useState(false);
    const [contractTimeValue, setContractTimeValue] = useState('');
    const [showPreview, setShowPreview] = useState(false);
    const [cancelModal, setCancelModal] = useState(false);
    const [aguardar, setAguardar] = useState(false);
    const [showContractTimeInput, setShowContractTimeInput] = useState(false);
    const [companyId, setCompanyId] = useState<any>('');

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

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        data.affirmative = data.affirmative === 'true' ? true : false;
        data.contract_time =
            data.contract_time === 'no' ? contractTimeValue : 'undetermined';
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
                })
                .catch((err: any) => {
                    throw new Error(err.message);
                });
        } catch (error: any) {
            toast.error(error.message, {
                position: 'top-center',
                theme: 'colored',
            });
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

    function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
        const uf = event.target.value;
        setSelectedUf(uf);
    }

    function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
        const city = event.target.value;
        const cityUf = `${city}/${selectedUf}`;
        setValue('headquarters', cityUf);
    }

    function handleContractTypeChange(event: ChangeEvent<HTMLSelectElement>) {
        const selectedValue = event.target.value;
        selectedValue === 'Outro'
            ? setShowOtherInput(true)
            : setShowOtherInput(false);
    }

    const handleContractChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setShowContractTimeInput(value === 'no');
    };

    const handleModalityChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        selectedValue === 'Híbrido' || selectedValue === 'Presencial'
            ? setModality(true)
            : setModality(false);
    };

    const handleAffirmativeVacancyChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const { value } = event.target;
        setAffirmativeVanancy(value === 'false');
        setValue('affirmative_type', value === 'false' ? '' : value);
    };

    return (
        <div className="min-h-screen w-full flex justify-center">
            <div className="flex flex-col gap-2 mt-10 mb-20 border rounded border-blue px-20 pt-8 pb-12">
                <h1 className="text-center mb-14 text-xl font-bold text-blue">
                    Cadastro de vagas
                </h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="gap-6 flex flex-col"
                >
                    <div className="flex flex-col">
                        <div className="flex gap-2">
                            <label htmlFor="title">*Título da vaga: </label>
                            <input
                                className="border border-blue rounded w-[76%] h-12 pl-3"
                                type="text"
                                maxLength={30}
                                id="title"
                                {...register('title')}
                            />
                        </div>
                        <div className="text-red-600 text-sm text-center">
                            {errors.title && <>{errors.title.message}</>}
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-3">
                            <label
                                htmlFor="description"
                                aria-label="Descrição da vaga. É obrigatória e deve ter no máximo 3000 caracteres."
                            >
                                *Descrição:{' '}
                            </label>
                            <textarea
                                className="border border-blue rounded w-[80%] h-20 pl-3 pt-2"
                                maxLength={3000}
                                id="description"
                                {...register('description')}
                                aria-describedby="description-error"
                            />
                        </div>
                        <div className="text-red-600 text-sm text-center">
                            {errors.description && (
                                <>{errors.description.message}</>
                            )}
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-3">
                            <label
                                htmlFor="prerequisites"
                                aria-label="Pré-requisitos"
                            >
                                *Pré-requisitos:{' '}
                            </label>
                            <textarea
                                className="border border-blue rounded w-[75%] pl-3 pt-2"
                                maxLength={3000}
                                id="prerequisites"
                                {...register('prerequisites')}
                            />
                        </div>
                        <div className="text-red-600 text-sm text-center">
                            {errors.prerequisites && (
                                <>{errors.prerequisites.message}</>
                            )}
                        </div>
                    </div>
                    <div>
                        <div className="flex">
                            <label htmlFor="benefits">Benefícios: </label>
                            <textarea
                                className="border border-blue rounded w-[80%] ml-5 pl-3 pt-2"
                                maxLength={3000}
                                id="benefits"
                                {...register('benefits')}
                            />
                        </div>
                        <div className="text-red-600 text-sm text-center">
                            {errors.benefits && <>{errors.benefits.message}</>}
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div>
                            <label htmlFor="type">Tipo de vaga:</label>

                            <select
                                {...register('type')}
                                id="type"
                                defaultValue="Selecione"
                                className="border border-blue rounded p-1 ml-2"
                            >
                                <option value="Selecione" disabled hidden>
                                    Selecione
                                </option>
                                <option value="Estágio">Estágio</option>
                                <option value="Trainee">Trainee</option>
                                <option value="Júnior">Júnior</option>
                                <option value="Analista">Analista</option>
                            </select>
                            <div className="text-red-600 text-sm text-center">
                                {errors.type && <>{errors.type.message}</>}
                            </div>
                        </div>
                        <div className="flex">
                            <div>
                                <label htmlFor="type_contract">
                                    Tipo de contrato:
                                </label>
                                <select
                                    {...register('type_contract')}
                                    id="type_contract"
                                    onChange={handleContractTypeChange}
                                    defaultValue="Selecione"
                                    className="border border-blue rounded p-1 ml-2"
                                >
                                    <option value="Selecione" disabled hidden>
                                        Selecione
                                    </option>
                                    <option value="CLT">CLT</option>
                                    <option value="PJ">PJ</option>
                                    <option value="Outro">Outro</option>
                                </select>

                                <div className="text-red-600 text-sm text-center">
                                    {errors.type_contract && (
                                        <>{errors.type_contract.message}</>
                                    )}
                                </div>
                            </div>
                            {showOtherInput && (
                                <div className="ml-8">
                                    <input
                                        className="border border-blue rounded p-1"
                                        placeholder="Informe o tipo de contrato"
                                        type="text"
                                        {...register('other_type_contract')}
                                    />
                                    <div className="text-red-600 text-sm text-center">
                                        {errors.other_type_contract && (
                                            <>
                                                {
                                                    errors.other_type_contract
                                                        .message
                                                }
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <div>
                            <label>
                                *Contrato por tempo indeterminado?
                                <input
                                    type="radio"
                                    value="undetermined"
                                    {...register('contract_time')}
                                    name="contract_time"
                                    defaultChecked
                                    onChange={handleContractChange}
                                    className="ml-4"
                                />
                                Sim
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="no"
                                    {...register('contract_time')}
                                    name="contract_time"
                                    onChange={handleContractChange}
                                    className="ml-4"
                                />
                                Não
                            </label>
                        </div>
                        {showContractTimeInput && (
                            <div>
                                <label>Tempo do contrato</label>
                                <input
                                    type="text"
                                    className="border border-blue rounded p-1 ml-2"
                                    required
                                    value={contractTimeValue}
                                    onChange={(e) =>
                                        setContractTimeValue(e.target.value)
                                    }
                                />
                                {errors.contract_time && (
                                    <>{errors.contract_time.message}</>
                                )}
                            </div>
                        )}
                    </div>
                    <div>
                        <div className="flex">
                            <label>Faixa Salarial: </label>
                            <div>
                                <Controller
                                    {...register('minValue')}
                                    control={control}
                                    defaultValue=""
                                    render={({
                                        field: { onChange, value },
                                    }) => (
                                        <NumericFormat
                                            displayType={'input'}
                                            value={value}
                                            thousandSeparator={'.'}
                                            decimalSeparator={','}
                                            prefix={'R$ '}
                                            onValueChange={(values: any) => {
                                                const { floatValue } = values;
                                                onChange(floatValue);
                                            }}
                                            className="border border-blue rounded ml-2"
                                        />
                                    )}
                                />
                                <div className="text-red-600 text-sm text-center">
                                    {errors.minValue && (
                                        <>{errors.minValue.message}</>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label className="mx-4">a</label>
                                <Controller
                                    {...register('maxValue')}
                                    control={control}
                                    defaultValue=""
                                    render={({
                                        field: { onChange, value },
                                    }) => (
                                        <NumericFormat
                                            value={value}
                                            displayType={'input'}
                                            thousandSeparator={'.'}
                                            decimalSeparator={','}
                                            prefix={'R$ '}
                                            onValueChange={(values: any) => {
                                                const { floatValue } = values;
                                                onChange(floatValue);
                                            }}
                                            className="border border-blue rounded ml-2"
                                        />
                                    )}
                                />
                                <div className="text-red-600 text-sm text-center">
                                    {errors.maxValue && (
                                        <>{errors.maxValue.message}</>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <div>
                            <label>*Modalidade</label>
                            <select
                                {...register('modality')}
                                onChange={handleModalityChange}
                                defaultValue="Selecione"
                                className="border border-blue rounded p-1 ml-2"
                            >
                                <option value="Selecione" disabled hidden>
                                    Selecione
                                </option>
                                <option value="Remoto">Remoto</option>
                                <option value="Híbrido">Híbrido</option>
                                <option value="Presencial">Presencial</option>
                            </select>
                            <div className="text-red-600 text-sm text-center">
                                {errors.modality && (
                                    <>{errors.modality.message}</>
                                )}
                            </div>
                        </div>

                        <div>
                            <label className="ml-5">UF:</label>
                            <select
                                {...register('uf')}
                                name="uf"
                                id="uf"
                                onChange={(e) => {
                                    handleSelectUf(e);
                                    trigger('uf');
                                }}
                                disabled={!modality}
                                defaultValue="Selecione"
                                className="border border-blue rounded p-1 ml-2"
                            >
                                <option value="Selecione" disabled hidden>
                                    Selecione
                                </option>
                                {ufs.map((uf) => (
                                    <option key={uf.id} value={uf.sigla}>
                                        {uf.nome}
                                    </option>
                                ))}
                            </select>
                            <div className="text-red-600 text-sm text-center">
                                {errors.uf && <>{errors.uf.message}</>}
                            </div>
                        </div>

                        <div>
                            <label className="ml-5">Cidade: </label>
                            <select
                                name="headquarters"
                                id="headquarters"
                                onChange={(e) => {
                                    handleSelectCity(e);
                                    trigger('headquarters');
                                }}
                                disabled={!modality}
                                defaultValue="Selecione"
                                className="border border-blue rounded p-1 ml-2"
                            >
                                <option value="Selecione" disabled hidden>
                                    Selecione
                                </option>
                                {cities.map((city) => (
                                    <option key={city.id} value={city.nome}>
                                        {city.nome}
                                    </option>
                                ))}
                            </select>
                            <div className="text-red-600 text-sm text-center">
                                {errors.headquarters && (
                                    <>{errors.headquarters.message}</>
                                )}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>
                                *Essa é uma vaga afirmativa?
                                <input
                                    {...register('affirmative')}
                                    type="radio"
                                    value="true"
                                    defaultChecked
                                    name="affirmative"
                                    onChange={handleAffirmativeVacancyChange}
                                    className="ml-4"
                                />
                                Sim
                            </label>
                            <input
                                type="hidden"
                                value={companyId}
                                {...register('company_id')}
                            />
                            <label>
                                <input
                                    {...register('affirmative')}
                                    type="radio"
                                    value="false"
                                    name="affirmative"
                                    onChange={handleAffirmativeVacancyChange}
                                    className="ml-4"
                                />
                                Não
                            </label>
                        </div>
                        <div>
                            <label>Selecione o grupo minoritário</label>
                            <select
                                {...register('affirmative_type')}
                                disabled={affirmativeVanancy}
                                defaultValue="Selecione"
                                className="border border-blue rounded p-1 ml-2"
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
                            </select>
                            <div className="text-red-600 text-sm text-center">
                                {errors.affirmative_type && (
                                    <>{errors.affirmative_type.message}</>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5 justify-end mt-8">
                        <button
                            onClick={() => setShowPreview(true)}
                            className="p-4 border border-blue rounded  text-blue"
                        >
                            Visualizar
                        </button>
                        <button
                            className="p-4 border border-blue rounded  text-blue"
                            onClick={() => setCancelModal(true)}
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="p-4 rounded bg-blue text-white"
                        >
                            Add job
                        </button>
                    </div>

                    <PreviewModal
                        showPreview={showPreview}
                        setShowPreview={setShowPreview}
                        watch={watch}
                        contractTimeValue={contractTimeValue}
                    />

                    {cancelModal && (
                        <CancelModal
                            setCancelModal={setCancelModal}
                            handleConfirmCancel={handleConfirmCancel}
                        />
                    )}

                    {aguardar && <WaitModal />}
                </form>
            </div>
        </div>
    );
};

export default AddJobs;
