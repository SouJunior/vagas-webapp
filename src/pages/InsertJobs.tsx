import { FormEvent, useState } from 'react';
import JobCard from '../components/JobCard';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import Header from '../components/Header';
import { RiArrowDropDownLine as ArrowDropdown } from 'react-icons/ri';

export interface JobData {
    readonly id: string;
    title?: string;
    description?: string;
    jobType?: 'Estágio' | 'Trainee' | 'Júnior';
    createdAt: {
        hour?: string;
        date?: string;
    } | null;
}

const emptyJobData: JobData = {
    id: uuidv4(),
    title: undefined,
    description: undefined,
    jobType: undefined,
    createdAt: {
        hour: undefined,
        date: undefined,
    },
};
/**
 * Página de criação das vagas de emprego
 */
function InsertJobs() {
    const [jobData, setJobData] = useState<JobData>(emptyJobData);
    const [jobsList, setJobsList] = useState<JobData[]>([]);
    const DISCORD_LINK = 'https://discord.gg/R5RAxFVC';

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (Object.values(jobData).some((value) => !value)) {
            return alert('Por favor, preencha os campos corretamente.');
        }

        setJobsList((prevState) => [...prevState, jobData]);
        alert('Vaga criada com sucesso. ✅');

        e.currentTarget.reset();
        setJobData(emptyJobData);
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

    const handleFieldChange = (e: any) => {
        setJobData({
            ...jobData,
            [e.target.name]: e.target.value,
        });
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
    };

    return (
        <>
            <Header pageName="Criar vaga" backTo={'/'} />

            <main className="grid grid-cols-1 md:grid-cols-2 gap-7 py-8 mt-[80px]">
                <div className="w-full max-w-[583px] justify-self-end">
                    <form
                        onSubmit={(e) => handleFormSubmit(e)}
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
                                onChange={(e) => handleFieldChange(e)}
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

                            <textarea
                                name="description"
                                id="description"
                                onChange={(e) => handleFieldChange(e)}
                                placeholder="Descrição da vaga"
                                className="w-full h-32 border py-3 px-4 mt-[10px] rounded-md block outline-none focus:border-blue placeholder:text-gray-dark/70"
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
                                    onChange={(e) => handleFieldChange(e)}
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

                        <div className="flex gap-3">
                            <button
                                type="submit"
                                onClick={addUpdatedCreatedAtToJobData}
                                className="flex-1 rounded font-semibold p-4 text-white bg-blue"
                            >
                                Criar
                            </button>

                            <button
                                type="reset"
                                onClick={cleanJobData}
                                className="flex-1 rounded font-semibold p-4 text-blue border border-blue"
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
                </div>

                <div className="m-4 h-96 overflow-scroll border-b-4">
                    {jobsList.length > 0 ? (
                        jobsList.map((job) => (
                            <JobCard
                                key={job.id}
                                id={job.id}
                                title={job.title}
                                description={job.description}
                                jobType={job.jobType}
                                createdAt={job.createdAt}
                                onDeleteJobCard={() =>
                                    handleDeleteJobCard(job.id)
                                }
                            />
                        ))
                    ) : (
                        <b>Sem vagas registradas até o momento :(</b>
                    )}
                </div>
            </main>
        </>
    );
}

export default InsertJobs;
