import { useContext } from 'react';
import { useApi } from '../../../hooks/useApi';
import { AuthContext } from '../../../contexts/Auth/AuthContext';

import {
  ActiveProfile,
  ActiveProfileDescription,
  ActiveProfileStatus,
  ActiveProfileTitle,
  EditProfile,
} from './styles';

import { Link } from 'react-router-dom';

const ActiveProfileComponent = () => {
  return (
    <ActiveProfile>
      <ActiveProfileTitle>
        Perfil <ActiveProfileStatus>ATIVO</ActiveProfileStatus>
      </ActiveProfileTitle>
      <ActiveProfileDescription>
        As empresas que buscarem candidatos podem encontrar o seu perfil.
      </ActiveProfileDescription>
      <EditProfile>
        <Link to="/">Editar perfil</Link>
      </EditProfile>
    </ActiveProfile>
  );
};

export default ActiveProfileComponent;
