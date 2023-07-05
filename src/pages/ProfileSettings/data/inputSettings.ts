const configs = [
    {
        label: 'E-mail:',
        type: 'email',
        name: 'email',
        placeholder: 'junior@soujunior.com',
    },
    {
        label: 'CNPJ:',
        type: 'text',
        name: 'cnpj',
        placeholder: 'Ex: xx.xxx.xxx/xxxx-xx',
    },
    {
        label: 'Nome:',
        type: 'text',
        name: 'nome',
        placeholder: 'Empresa SouJunior',
    },
    {
        label: 'Site da empresa:',
        type: 'text',
        name: 'site',
        placeholder: 'www.soujunior.com.br',
    },
    {
        label: 'Outros:',
        type: 'text',
        name: 'instagram',
        placeholder: '@soujunior/instagram',
    },
    {
        label: '',
        type: 'text',
        name: 'linkedin',
        placeholder: '@soujunior/linkedin',
    },
    {
        label: '',
        type: 'text',
        name: 'twitter',
        placeholder: '@soujunior/twitter',
    },
];

const inputConfigs = configs.map((item, index) => ({
    ...item,
    id: index + 1
  }));

export default inputConfigs;
