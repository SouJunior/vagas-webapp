import type { ChangeEvent, FormEvent, FunctionComponent } from 'react';
import { useRef, useState } from 'react';
// import JobCard from '../components/JobCard';
import Header from '@components/Header/index';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import {
  RiArrowDropDownLine as ArrowDropdown,
  RiInformationLine,
} from 'react-icons/ri';
import { v4 as uuidv4 } from 'uuid';
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
      throw new Error('Passed ID argument is invalid.\nThe argument is ' + id);
    }
    alert(`Vaga de ID: ${id} foi excluída com sucesso. ✅`);
    setJobsList(jobsList.filter((job) => job.id !== id));
  };

  const handleFieldChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
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
      <Header variant="navigation" pageName="Criar vaga" backTo={'/'} />

      <main className="mx-auto mb-0.5 mt-[6.1875rem] grid w-full max-w-[74.5625rem] grid-cols-1 gap-7 border-b md:grid-cols-2">
        <div className="col-span-full">
          <img
            src="/assets/logo-name-empresa.svg"
            alt="Logo SouJunior Empresa"
            className="mx-auto my-4 w-[315px]"
          />
          <span className="block w-full border-t-[1px]"></span>
        </div>

        <section className="mb-32 w-full">
          <form
            onSubmit={handleFormSubmit}
            className="h-min rounded-md border p-6 text-gray-darker shadow-md shadow-[#1a1a1a]/5"
            id="form"
          >
            <h1 className="mb-5 mt-1 text-2xl font-semibold">
              Preencha os campos
            </h1>

            <span className="mb-6 block w-full border-t-[1px]"></span>

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
                className="mt-[10px] block w-full rounded-md border px-4 py-3 outline-none placeholder:text-gray-dark/70 focus:border-blue"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="font-semibold">
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
                  className="mt-[10px] block w-full cursor-pointer appearance-none rounded-md border px-4 py-3 outline-none focus:border-blue"
                >
                  <option disabled className="text-gray-dark/60">
                    Tipo da vaga
                  </option>
                  <option value="Estágio" className="text-gray-darker">
                    Estágio
                  </option>
                  <option value="Júnior" className="text-gray-darker">
                    Júnior
                  </option>
                  <option value="Trainee" className="text-gray-darker">
                    Trainee
                  </option>
                </select>
                <ArrowDropdown className="absolute right-3 top-2 text-4xl text-gray-darker/60" />
              </div>
            </div>

            <div className="flex h-[3.25rem] gap-3">
              <button
                type="submit"
                onClick={addUpdatedCreatedAtToJobData}
                className="flex-1 rounded bg-blue font-semibold text-white hover:bg-blue-light active:bg-blue-dark"
              >
                Criar
              </button>

              <button
                type="reset"
                onClick={cleanJobData}
                className="flex-1 rounded border border-blue font-semibold text-blue"
              >
                Cancelar
              </button>
            </div>
          </form>

          <p className="mt-7 block text-center">
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

        <section className="max-h-[46.125rem] w-full overflow-scroll">
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
            <div className="rounded-md border border-dashed border-blue p-24 text-center font-canada">
              <div className="mx-auto mb-[47px] w-[10.625rem] rounded-full border border-blue p-9">
                <RiInformationLine size={96} className="text-blue" />
              </div>
              <p className="mb-[0.4375rem] text-[1.5625rem] font-medium leading-[1.875rem]">
                Você ou sua Organização, não possuem vagas em aberto.
              </p>
              <p className="text-[1.4375rem] font-normal leading-[1.6875rem] text-blue">
                Crie uma vaga ao lado para adicionar a lista de vagas!
              </p>
            </div>
          )}
        </section>
      </main>
    </>
  );
};
