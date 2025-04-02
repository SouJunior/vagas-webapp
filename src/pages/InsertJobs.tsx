import {
    ChangeEvent,
    FormEvent,
    FunctionComponent,
    useRef,
    useState,
} from 'react';
// import JobCard from '../components/JobCard';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import Header from '../components/Header';
import {
    RiArrowDropDownLine as ArrowDropdown,
    RiInformationLine,
} from 'react-icons/ri';
import Tiptap from '../components/Tiptap';

export interface JobData {
    readonly id: string;
    title: string;
    description: string;
    jobType: 'Estágio' | 'Trainee' | 'Júnior' | string;
    createdAt: {
        hour: string;
        date: string;
    };
}

const emptyJobData: JobData = {
    id: uuidv4(),
    title: '',
    description: '',
    jobType: '',
    createdAt: {
        hour: '',
        date: '',
    },
};
/**
 * Página de criação das vagas de emprego
 */
export const InsertJobs: FunctionComponent<any> = () => {
    const [jobData, setJobData] = useState<JobData>(emptyJobData);
    const [jobsList, setJobsList] = useState<JobData[]>([]);
    const DISCORD_LINK = 'https://discord.gg/R5RAxFVC';
    const titapRef = useRef<{ clearContent: () => void }>();

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (Object.values(jobData).some((value) => !value)) {
            return alert('Por favor, preencha os campos corretamente.');
        }

        setJobsList((prevState) => [...prevState, jobData]);
        alert('Vaga criada com sucesso. ✅');

        e.currentTarget.reset();
        titapRef.current?.clearContent();
        setJobData({ ...emptyJobData, id: uuidv4() });
    };

    const handleDeleteJobCard = (id: string) => {
        if (!id) {
            alert(
                `Erro ao apagar a vaga selecionada. Por favor, tente novamente ❌\n\nSe persistir o erro, contacte-nos através do nosso Discord:\n${DISCORD_LINK}`,
            );
            throw new Error(
                'Passed ID argument is invalid.\nThe argument is ' + id,
            );
        }
        alert(`Vaga de ID: ${id} foi excluída com sucesso. ✅`);
        setJobsList(jobsList.filter((job) => job.id !== id));
    };

    const handleFieldChange = (
        e: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
    ) => {
        setJobData({
            ...jobData,
            [e.target.name]: e.target.value,
        });
    };

    const handleDescriptionChange = (editorHTML: string) => {
        setJobData((prevState) => ({
            ...prevState,
            description: editorHTML,
        }));
    };

    const addUpdatedCreatedAtToJobData = () => {
        setJobData({
            ...jobData,
            createdAt: {
                hour: format(new Date(), 'p', { locale: pt }),
                date: format(new Date(), 'P', { locale: pt }),
            },
        });
    };

    const cleanJobData = () => {
        setJobData(emptyJobData);
        titapRef.current?.clearContent();
    };

    return (
        <>
            <Header pageName="Criar vaga" backTo={'/'} />

            <main className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-[6.1875rem] w-full max-w-[74.5625rem] mx-auto border-b mb-0.5">
                <div className="col-span-full">
                    <img
                        src="/assets/logo-name-empresa.svg"
                        alt="Logo SouJunior Empresa"
                        className="mx-auto my-4 w-[315px]"
                    />
                    <span className="border-t-[1px] block w-full"></span>
                </div>

                <section className="w-full mb-32">
                    <form
                        onSubmit={handleFormSubmit}
                        className="p-6 h-min border rounded-md text-gray-darker shadow-md shadow-[#1a1a1a]/5"
                        id="form"
                    >
                        <h1 className="font-semibold text-2xl mt-1 mb-5">
                            Preencha os campos
                        </h1>

                        <span className="border-t-[1px] block w-full mb-6"></span>

                        <div className="mb-3">
                            <label htmlFor="title" className="font-semibold">
                                Título
                            </label>

                            <input
                                type="text"
                                name="title"
                                id="title"
                                onChange={handleFieldChange}
                                placeholder="Título da vaga"
                                className="w-full border py-3 px-4 mt-[10px] block rounded-md outline-none focus:border-blue placeholder:text-gray-dark/70"
                            />
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="description"
                                className="font-semibold"
                            >
                                Descrição
                            </label>
                            <Tiptap
                                ref={titapRef}
                                onFieldChange={handleDescriptionChange}
                                id="description"
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="jobType" className="font-semibold">
                                Tipo
                            </label>

                            <div className="relative">
                                <select
                                    name="jobType"
                                    id="jobType"
                                    onChange={handleFieldChange}
                                    required
                                    defaultValue={'Tipo da vaga'}
                                    className="w-full border appearance-none py-3 px-4 block mt-[10px] outline-none rounded-md focus:border-blue cursor-pointer"
                                >
                                    <option
                                        disabled
                                        className="text-gray-dark/60"
                                    >
                                        Tipo da vaga
                                    </option>
                                    <option
                                        value="Estágio"
                                        className="text-gray-darker"
                                    >
                                        Estágio
                                    </option>
                                    <option
                                        value="Júnior"
                                        className="text-gray-darker"
                                    >
                                        Júnior
                                    </option>
                                    <option
                                        value="Trainee"
                                        className="text-gray-darker"
                                    >
                                        Trainee
                                    </option>
                                </select>
                                <ArrowDropdown className="text-gray-darker/60 text-4xl absolute top-2 right-3" />
                            </div>
                        </div>

                        <div className="flex gap-3 h-[3.25rem]">
                            <button
                                type="submit"
                                onClick={addUpdatedCreatedAtToJobData}
                                className="flex-1 rounded font-semibold text-white bg-blue hover:bg-blue-light active:bg-blue-dark"
                            >
                                Criar
                            </button>

                            <button
                                type="reset"
                                onClick={cleanJobData}
                                className="flex-1 rounded font-semibold text-blue border border-blue"
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>

                    <p className="text-center mt-7 block">
                        Está tendo algum problema? Consulte nosso{' '}
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue underline"
                        >
                            suporte
                        </a>
                    </p>
                </section>

                <section className="w-full max-h-[46.125rem] overflow-scroll">
                    {jobsList.length > 0 ? (
                        jobsList.map((job) => (
                            <div key={job.id}>{job.title}</div>
                            // <JobCard
                            //     key={job.id}
                            //     id={job.id}
                            //     title={job.title}
                            //     description={job.description}
                            //     jobType={job.jobType}
                            //     createdAt={job.createdAt}
                            //     onDeleteJobCard={handleDeleteJobCard}
                            // />
                        ))
                    ) : (
                        <div className="border border-dashed border-blue rounded-md text-center font-canada p-24">
                            <div className="mb-[47px] mx-auto border border-blue rounded-full w-[10.625rem] p-9">
                                <RiInformationLine
                                    size={96}
                                    className="text-blue"
                                />
                            </div>
                            <p className="text-[1.5625rem] leading-[1.875rem] font-medium mb-[0.4375rem]">
                                Você ou sua Organização, não possuem vagas em
                                aberto.
                            </p>
                            <p className="text-blue text-[1.4375rem] leading-[1.6875rem] font-normal">
                                Crie uma vaga ao lado para adicionar a lista de
                                vagas!
                            </p>
                        </div>
                    )}
                </section>
            </main>
        </>
    );
};
