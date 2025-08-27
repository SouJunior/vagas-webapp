export type IBGEUFResponse = {
  map(arg0: (uf: any) => JSX.Element): React.ReactNode;
  sigla: string;
  id: string;
  nome: string;
};

export type IBGECityResponse = {
  id: number;
  nome: string;
};
