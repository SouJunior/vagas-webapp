const configs = [
  {
    label: 'Nome completo',
    type: 'text',
    name: 'name',
  },
  {
    label: 'E-mail',
    type: 'email',
    name: 'email',
  },
];

const inputConfigs = configs.map((item, index) => ({
  ...item,
  id: index + 1,
}));

export default inputConfigs;
