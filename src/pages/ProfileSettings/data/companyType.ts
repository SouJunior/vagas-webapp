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

const companyType = types.map((item, index) => ({
    ...item,
    id: index + 1,
}));

export default companyType;
