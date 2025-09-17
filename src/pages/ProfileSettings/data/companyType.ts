const types = [
  { nome: 'Comercial', sigla: 'comercial' },
  { nome: 'Comunicação', sigla: 'comunicao' },
  { nome: 'Indústria', sigla: 'industria' },
  { nome: 'RH', sigla: 'rh' },
  { nome: 'Saúde', sigla: 'saude' },
  { nome: 'Tecnologia', sigla: 'tecnologia' },
  { nome: 'Telemarketing', sigla: 'telemarketing' },
  { nome: 'Outros', sigla: 'outros' },
];
// TODO: Pode ser uma função porém é necessário atribuir os tipos certos
const companyType = types.map((item, index) => ({
  ...item,
  id: index + 1,
}));

export default companyType;
