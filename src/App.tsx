import { FormEvent, useId } from "react";
import "./App.css";
import JobCard from "./components/JobCard";

type JobsList = {
  id: string;
  title: string;
  description: string;
  jobType: "Estágio" | "Trainee" | "Júnior";
}[];

function App() {
  // Esse será nosso array de objetos (cada objeto é uma vaga)
  const jobsList: JobsList = [
    {
      id: useId(),
      title: "Desenvolvedor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      jobType: "Júnior",
    },
  ];

  // FUNÇÕES
  function handleFormSubmit(e: FormEvent) {
    e.preventDefault();

    console.log("Você apertou no botão de cadastrar!");

    /**** CREATE ****
     ** Aqui vai o código necessário para cadastrar uma vaga corretamente */
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
              title={job.title}
              description={job.description}
              jobType={job.jobType}
            />
          ))}
        </div>
      </main>

      <hr />

      <footer className="p-4">Todos os direitos reservados &copy;</footer>
    </div>
  );
}

export default App;
