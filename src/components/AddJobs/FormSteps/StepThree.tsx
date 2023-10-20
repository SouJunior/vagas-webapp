import { useEffect, useState } from 'react';

import {
    Label,
    Container,
    SelectInput,
    ErrorMessage,
    TextArea,
    RadioInputContainer,
    RadioInput,
    ButtonSection,
    CancelButton,
    Button,
} from './styles';
import Select from 'react-select';
import { useIBGELocations } from '../../../hooks/useIBGELocations';

export enum JobsModalityEnum {
    REMOTE = 'REMOTE',
    HYBRID = 'HYBRID',
    IN_PERSON = 'IN_PERSON',
}

const StepThree = ({
    register,
    errors,
    trigger,
    watch,
    setValue,
    PreviousStep,
}: any) => {
    const [selectedOptions, setSelectedOptions] = useState<any>([]);
    const { ufs, cities, handleSelectUf } = useIBGELocations();

    useEffect(() => {
        if (watch('modality') === JobsModalityEnum.REMOTE) {
            setValue('city', '');
            setValue('federalUnit', '');
        }
    }, [watch('modality')]);

    const affirmativeTypeOptions = [
        { value: 'Mulheres Cis ou Trans', label: 'Mulheres Cis ou Trans' },
        { value: 'Pessoa preta ou parda', label: 'Pessoa preta ou parda' },
        { value: 'PCD', label: 'PCD' },
        { value: '60+', label: '60+' },
        { value: 'LGBTQIA+', label: 'LGBTQIA+' },
    ];

    return (
        <>
            <Container>
                <div>
                    <Label>*Modalidade</Label>
                    <SelectInput
                        {...register('modality')}
                        defaultValue=""
                        width={164}
                    >
                        <option value="" disabled hidden>
                            Selecione
                        </option>
                        <option value={JobsModalityEnum.REMOTE}>Remoto</option>
                        <option value={JobsModalityEnum.HYBRID}>Híbrido</option>
                        <option value={JobsModalityEnum.IN_PERSON}>
                            Presencial
                        </option>
                    </SelectInput>
                    <ErrorMessage>
                        {errors.modality && <>{errors.modality.message}</>}
                    </ErrorMessage>
                </div>
                <div>
                    <Label>UF:</Label>
                    <SelectInput
                        {...register('federalUnit')}
                        name="federalUnit"
                        id="federalUnit"
                        onChange={(e) => {
                            setValue('federalUnit', e.target.value);
                            handleSelectUf(e);
                            trigger('federalUnit');
                        }}
                        defaultValue=""
                        width={126}
                        disabled={watch('modality') === JobsModalityEnum.REMOTE}
                    >
                        <option value="" disabled>
                            Selecione
                        </option>
                        {ufs.map((uf) => (
                            <option key={uf.id} value={uf.sigla}>
                                {uf.sigla}
                            </option>
                        ))}
                    </SelectInput>
                    <ErrorMessage>
                        {errors.federalUnit && (
                            <>{errors.federalUnit.message}</>
                        )}
                    </ErrorMessage>
                </div>
                <div>
                    <Label>Cidade: </Label>
                    <SelectInput
                        {...register('city')}
                        name="city"
                        id="city"
                        onChange={(e) => {
                            setValue('city', e.target.value);
                            trigger('city');
                        }}
                        defaultValue=""
                        width={205}
                        disabled={watch('modality') === JobsModalityEnum.REMOTE}
                    >
                        <option value="" disabled>
                            Selecione
                        </option>
                        {cities.map((city: any) => (
                            <option key={city.id} value={city.nome}>
                                {city.nome}
                            </option>
                        ))}
                    </SelectInput>
                    <div className="text-red-600 text-sm text-center">
                        {errors.city && <>{errors.city.message}</>}
                    </div>
                </div>
            </Container>
            <Label htmlFor="benefits">Benefícios: </Label>
            <TextArea
                maxLength={3000}
                id="benefits"
                {...register('benefits')}
            />
            <ErrorMessage>
                {errors.benefits && <>{errors.benefits.message}</>}
            </ErrorMessage>

            <Label>*Essa é uma vaga afirmativa?</Label>
            <RadioInputContainer>
                <Label>
                    <RadioInput
                        {...register('affirmative')}
                        type="radio"
                        value="true"
                        name="affirmative"
                    />
                    Sim
                </Label>
                <Label>
                    <RadioInput
                        {...register('affirmative')}
                        type="radio"
                        value="false"
                        defaultChecked
                        name="affirmative"
                    />
                    Não
                </Label>
            </RadioInputContainer>
            <Label>Selecione o grupo minoritário</Label>
            <Select
                {...register('affirmativeType')}
                name="affirmativeType"
                isMulti
                options={affirmativeTypeOptions}
                value={selectedOptions}
                onChange={(selectedOptions: any) => {
                    setSelectedOptions(selectedOptions);
                }}
                onBlur={() =>
                    setValue(
                        'affirmativeType',
                        selectedOptions.map((option: any) => option.value),
                    )
                }
                placeholder="Selecione"
                isDisabled={watch('affirmative') === 'false'}
            />
            <ErrorMessage>
                {errors.affirmativeType && (
                    <>{errors.affirmativeType.message}</>
                )}
            </ErrorMessage>
            <ButtonSection>
                <CancelButton onClick={PreviousStep}>Voltar</CancelButton>
                <Button type="submit">Finalizar</Button>
            </ButtonSection>
        </>
    );
};

export default StepThree;
