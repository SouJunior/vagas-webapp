import { FormEvent, useState } from "react";
import "../App.css";
import JobCard from "../components/JobCard";

interface JobData {
  id: string;
  title: string;
  description: string;
  jobType: "Estágio" | "Trainee" | "Júnior" | "";
}

function InsertJobs() {
  const generateID = () => Math.floor(Date.now() * Math.random()).toString(36);

  const [jobsList, setJobsList] = useState<JobData[]>([
    {
      id: generateID(),
      title: "Desenvolvedor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      jobType: "Júnior",
    },
  ]);

  const emptyJobData: JobData = {
    id: generateID(),
    title: "",
    description: "",
    jobType: "",
  };

  const [jobData, setJobData] = useState<JobData>(emptyJobData);

  // FUNÇÕES
  // VALIDAR VALORES DE UM OBJETO
  function isValuesValid(object: any) {
    return !Object.values(object).includes("");
  }
  function resetForm() {
    const form = document.getElementById("form") as HTMLFormElement;
    form.reset();
  }
  // LIDAR COM O SUBMIT DO FORM
  function handleFormSubmit(event: FormEvent) {
    // prevenir comportamento padrão (reload)
    event.preventDefault();
    // validar dados preenchidos
    if (isValuesValid(jobData)) {
      // criar card com os dados
      createJobCard();
      alert("Vaga criada com sucesso. ✅");
      // resetar campos do formulário
      resetForm();
      // resetar jobData
      setJobData(emptyJobData);
    } else {
      alert("Por favor, preencha os campos corretamente.");
    }
  }
  // CRIAR UMA VAGA (CREATE)
  function createJobCard() {
    setJobData({ ...jobData, id: generateID() });
    setJobsList([...jobsList, jobData]);
  }
  // DELETAR UMA VAGA (DELETE)
  function deleteJobCard(id: string) {
    if (!id) {
      alert(
        "Erro ao apagar a vaga selecionada. Por favor, tente novamente ❌\n\nSe persistir o erro, contacte-nos através do nosso Discord:\nhttps://discord.gg/R5RAxFVC"
      );
      throw new Error("Passed ID argument is invalid.\nThe argument is " + id);
    }
    alert(`Vaga de ID: ${id} foi excluída com sucesso. ✅`);
    setJobsList(jobsList.filter((job) => job.id !== id));
  }

  function handleFieldChange(event: any) {
    setJobData({
      ...jobData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="App-wrapper">
      <header className="p-5 text-2xl">SouJunior</header>
      <hr />
      <main className="grid grid-cols-1 md:grid-cols-5 py-4">
        <form
          onSubmit={(event) => handleFormSubmit(event)}
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
              onChange={(event) => handleFieldChange(event)}
              className="w-full border-2 py-1 px-3 block outline-none focus:border-blue-600"
            />
          </div>

          <div className="py-2">
            <label htmlFor="description">Descrição da vaga</label>
            <textarea
              name="description"
              id="description"
              onChange={(event) => handleFieldChange(event)}
              className="w-full h-40 border-2 py-1 px-3 block outline-none focus:border-blue-600"
            />
          </div>

          <div className="py-2">
            <label htmlFor="jobType">Tipo da vaga</label>
            <select
              name="jobType"
              id="jobType"
              onChange={(event) => handleFieldChange(event)}
              required
              defaultValue={"- Selecione aqui -"}
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
              onClick={(event) => handleFormSubmit(event)}
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
                deleteJobCard={() => deleteJobCard(job.id)}
              />
            ))
          ) : (
            <b>Não há vagas disponíveis :(</b>
          )}
        </div>
      </main>
    </div>
  );
}

export default InsertJobs;
