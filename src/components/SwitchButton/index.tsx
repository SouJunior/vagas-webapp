import * as React from 'react';
import Switch from '@mui/material/Switch';
import { Container } from './styles';

interface SwitchButtonProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SwitchButton({ checked, onChange }: SwitchButtonProps) {
  const text = checked ? 'Alerta criado' : 'Alerta de vagas';

  return (
    <Container>
      <h2>{text}</h2>
      <Switch
        checked={checked}
        onChange={onChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    </Container>
  );
}
