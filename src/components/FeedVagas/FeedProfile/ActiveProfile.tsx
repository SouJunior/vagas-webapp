import { useContext } from 'react';
import { useApi } from '../../../hooks/useApi';
import { AuthContext } from '../../../contexts/Auth/AuthContext';

import {
    CheckBoxWrapper,
    CheckBoxLabel,
    CheckBox,
    CheckBoxContainer,
} from './styles';

const ActiveProfile: React.FC = () => {
    const { token }: any = useContext(AuthContext);
    const { toggleActiveProfile }: any = useApi();
    let isActive = toggleActiveProfile.currentValue;

    const handleCheckboxChange = async (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const active = e.target.checked;
        await toggleActiveProfile({ isActive: active }, token);
    };
    return (
        <CheckBoxContainer className="flex">
            <label htmlFor="checkbox">Perfil Ativo</label>
            <CheckBoxWrapper>
                <CheckBox
                    id="checkbox"
                    type="checkbox"
                    checked={isActive}
                    onChange={handleCheckboxChange}
                />
                <CheckBoxLabel htmlFor="checkbox" />
            </CheckBoxWrapper>
        </CheckBoxContainer>
    );
};

export default ActiveProfile;
