import { ChangeEvent, FormEvent, useId, useState } from "react";
import "./App.css";
import JobCard from "./components/JobCard";

interface JobData {
  id: string;
  title: string;
  description: string;
  jobType: "Estágio" | "Trainee" | "Júnior";
}

function App() {
  // Esse será nosso array de objetos (cada objeto é uma vaga)
  const [jobsList, setJobsList] = useState<JobData[]>([
    {
      id: useId(),
      title: "Desenvolvedor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      jobType: "Júnior",
    },
  ]);

  const [jobData, setJobData] = useState<JobData>({
    id: "",
    title: "",
    description: "",
    jobType: "Estágio",
  });

  const id = useId();

  // FUNÇÕES
  function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
    /**** CREATE ****
     ** Aqui vai o código necessário para cadastrar uma vaga corretamente */

    setJobData({ ...jobData, id: id });
    setJobsList([...jobsList, jobData]);
  }

  function deleteJobCard(id: string) {
    if(!id){
      alert('Erro ao apagar a vaga selcionada. Por favor, tente novamente\n\nSe persistir o erro, contacte-nos através do nosso Discord: https://discord.gg/R5RAxFVC')
      throw new Error("Passed ID argument is invalid.\nThe argument is " + id);
    }

    const result = jobsList.filter((job) => job.id !== id )
  
    setJobsList(result);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setJobData({
      ...jobData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="App-wrapper">
      <header className="p-5 text-2xl">SouJunior</header>
      <hr />
      <main className="grid grid-cols-1 md:grid-cols-2 py-4">
        <form
          onSubmit={(e) => handleFormSubmit(e)}
          className="m-4 p-4 border h-min"
        >
          <h1 className="font-bold text-lg">Preencha os campos</h1>
          <div className="py-2">
            <label htmlFor="title">Titulo da vaga</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={(event) => handleChange(event)}
              className="w-full border-2 py-1 px-3 block outline-none focus:border-blue-600"
            />
          </div>

          <div className="py-2">
            <label htmlFor="description">Descrição da vaga</label>
            <textarea
              name="description"
              id="description"
              className="w-full border-2 py-1 px-3 block outline-none focus:border-blue-600"
            />
          </div>

          <div className="py-2">
            <label htmlFor="jobType">Tipo da vaga</label>
            <select
              name="jobType"
              id="jobType"
              required
              defaultValue={"- Selecione aqui -"}
              className="w-full border-2 py-1 px-3 block outline-none focus:border-blue-600"
            >
              <option selected disabled>
                - Selecione aqui -
              </option>
              <option value="estagio">Estágio</option>
              <option value="junior">Júnior</option>
              <option value="trainee">Trainee</option>
            </select>
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              onClick={(event) => handleFormSubmit(event)}
              className="w-4/5 inline-block rounded font-semibold bg-yellow-500 px-2 py-1 hover:bg-yellow-600 active:bg-yellow-500 focus:ring focus:ring-yellow-300 text-white"
            >
              Cadastrar
            </button>
            <button
              type="reset"
              className="w-1/5 inline-block rounded font-semibold bg-slate-500 px-2 py-1 hover:bg-slate-600 active:bg-slate-500 focus:ring focus:ring-slate-300 text-white"
            >
              Reset
            </button>
          </div>
        </form>

        {/* /**** READ ****
         ** Aqui vai o código necessário para ler todas as vagas cadastradas e atualizar a View do React com elas
         */}
        <div className="m-4">
          {jobsList.map((job) => (
            <JobCard 
              key={job.id}
              id={job.id}
              title={job.title}
              description={job.description}
              jobType={job.jobType}
              deleteJobCard={() => deleteJobCard(job.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
