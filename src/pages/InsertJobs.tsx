import { FormEvent, useState } from 'react';
import JobCard from '../components/JobCard';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';

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
        hour: format(new Date(), 'p', { locale: pt }),
        date: format(new Date(), 'P', { locale: pt }),
    },
};
/**
 * Página de criação das vagas de emprego
 */
function InsertJobs() {
    const [jobData, setJobData] = useState<JobData>(emptyJobData);
    const [jobsList, setJobsList] = useState<JobData[]>([]);
    const DISCORD_LINK = 'https://discord.gg/R5RAxFVC';
    /**
     * Determina se um objeto é válido, verificando se existe ao menos uma propriedade que seja uma string vazia. Retorna verdadeiro se não existir, ou falso se existir.
     * @param o Um objeto com propriedades e métodos.
     */
    function isObjectValid(o: any) {
        return !Object.values(o).includes('');
    }

    function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!isObjectValid(jobData)) {
            return alert('Por favor, preencha os campos corretamente.');
        }

        setJobsList((prevState) => [...prevState, jobData]);
        alert('Vaga criada com sucesso. ✅');

        e.currentTarget.reset();
        setJobData(emptyJobData);
    }

    function handleDeleteJobCard(id: string) {
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
    }

    function handleFieldChange(e: any) {
        setJobData({
            ...jobData,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <main className="grid grid-cols-1 md:grid-cols-5 py-4">
            <form
                onSubmit={(e) => handleFormSubmit(e)}
                className="m-4 p-4 border h-min col-span-2"
                id="form"
            >
                <h1 className="font-bold text-lg">Preencha os campos</h1>
                <div className="py-2">
                    <label htmlFor="title">Titulo da vaga</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        onChange={(e) => handleFieldChange(e)}
                        className="w-full border-2 py-1 px-3 block outline-none focus:border-blue-600"
                    />
                </div>

                <div className="py-2">
                    <label htmlFor="description">Descrição da vaga</label>
                    <textarea
                        name="description"
                        id="description"
                        onChange={(e) => handleFieldChange(e)}
                        className="w-full h-40 border-2 py-1 px-3 block outline-none focus:border-blue-600"
                    />
                </div>

                <div className="py-2">
                    <label htmlFor="jobType">Tipo da vaga</label>
                    <select
                        name="jobType"
                        id="jobType"
                        onChange={(e) => handleFieldChange(e)}
                        required
                        defaultValue={'- Selecione aqui -'}
                        className="w-full border-2 py-1 px-3 block outline-none focus:border-blue-600"
                    >
                        <option disabled>- Selecione aqui -</option>
                        <option value="Estágio">Estágio</option>
                        <option value="Júnior">Júnior</option>
                        <option value="Trainee">Trainee</option>
                    </select>
                </div>
                <div className="flex gap-2">
                    <button
                        type="submit"
                        className="w-full inline-block rounded font-semibold bg-yellow-500 px-2 py-1 hover:bg-yellow-600 active:bg-yellow-500 focus:ring focus:ring-yellow-300 text-white"
                    >
                        Cadastrar
                    </button>
                    <button
                        type="reset"
                        className="w-fit text-sm inline-block rounded font-semibold bg-slate-500 px-2 py-1 hover:bg-slate-600 active:bg-slate-500 focus:ring focus:ring-slate-300 text-white"
                    >
                        Limpar
                    </button>
                </div>
            </form>

            <div className="m-4 col-span-3 h-96 overflow-scroll border-b-4">
                {jobsList.length > 0 ? (
                    jobsList.map((job) => (
                        <JobCard
                            key={job.id}
                            id={job.id}
                            title={job.title}
                            description={job.description}
                            jobType={job.jobType}
                            createdAt={job.createdAt}
                            onDeleteJobCard={() => handleDeleteJobCard(job.id)}
                        />
                    ))
                ) : (
                    <b>Sem vagas registradas até o momento :(</b>
                )}
            </div>
        </main>
    );
}

export default InsertJobs;
