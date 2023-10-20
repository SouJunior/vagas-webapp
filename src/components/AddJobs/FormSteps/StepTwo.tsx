import {
    Button,
    ButtonSection,
    CancelButton,
    ErrorMessage,
    Input,
    Label,
    RadioInput,
    RadioInputContainer,
    SalaryInput,
    SalaryInputContainer,
    SalarySection,
    SelectInput,
} from './styles';
import { Controller } from 'react-hook-form';

interface StepTwoProps {
    register: any;
    control: any;
    errors: Record<string, any>;
    setShowContractTimeInput: React.Dispatch<React.SetStateAction<boolean>>;
    setContractTimeValue: React.Dispatch<React.SetStateAction<string>>;
    handleClickStep2: () => void;
    PreviousStep: () => void;
    showContractTimeInput: boolean;
    contractTimeValue: string;
    trigger: any;
    setValue: any;
}

export enum JobsTypeEnum {
    TRAINEE = 'TRAINEE',
    JUNIOR = 'JUNIOR',
    ANALYST = 'ANALYST',
    INTERNSHIP = 'INTERNSHIP',
}

export enum TypeContract {
    CLT = 'CLT',
    PJ = 'PJ',
    OTHER = 'OTHER'
}

const StepTwo = ({
    register,
    control,
    errors,
    setShowContractTimeInput,
    setContractTimeValue,
    handleClickStep2,
    PreviousStep,
    showContractTimeInput,
    contractTimeValue,
    trigger,
    setValue,
}: StepTwoProps) => {
    return (
        <>
            <SalarySection>
                <Label>Faixa Salarial: </Label>
                <SalaryInputContainer>
                    <div>
                        <Controller
                            {...register('salaryMin')}
                            control={control}
                            defaultValue=""
                            render={({ field: { onChange, value } }) => (
                                <SalaryInput
                                    displayType={'input'}
                                    value={value}
                                    thousandSeparator={'.'}
                                    decimalSeparator={','}
                                    prefix={'R$ '}
                                    placeholder="Informe um valor inicial"
                                    onValueChange={(values: any) => {
                                        const { floatValue } = values;
                                        onChange(floatValue);
                                        trigger('salaryMax');
                                    }}
                                />
                            )}
                        />
                        <ErrorMessage>
                            {errors.salaryMin && (
                                <>{errors.salaryMin.message}</>
                            )}
                        </ErrorMessage>
                    </div>
                    <div>
                        <Controller
                            {...register('salaryMax')}
                            control={control}
                            defaultValue=""
                            render={({ field: { onChange, value } }) => (
                                <SalaryInput
                                    value={value}
                                    displayType={'input'}
                                    thousandSeparator={'.'}
                                    decimalSeparator={','}
                                    prefix={'R$ '}
                                    placeholder="Informe um valor final"
                                    onValueChange={(values: any) => {
                                        const { floatValue } = values;
                                        onChange(floatValue);
                                        trigger('salaryMin');
                                    }}
                                />
                            )}
                        />

                        <ErrorMessage>
                            {errors.salaryMax && (
                                <>{errors.salaryMax.message}</>
                            )}
                        </ErrorMessage>
                    </div>
                </SalaryInputContainer>
            </SalarySection>
            <Label htmlFor="type">*Tipo:</Label>
            <SelectInput {...register('type')} id="type" defaultValue="">
                <option value="" disabled hidden>
                    Selecione
                </option>
                <option value={JobsTypeEnum.INTERNSHIP}>Estágio</option>
                <option value={JobsTypeEnum.TRAINEE}>Trainee</option>
                <option value={JobsTypeEnum.JUNIOR}>Júnior</option>
                <option value={JobsTypeEnum.ANALYST}>Analista</option>
            </SelectInput>
            <ErrorMessage>
                {errors.type && <>{errors.type.message}</>}
            </ErrorMessage>
            <Label htmlFor="typeContract">*Tipo de contrato:</Label>
            <SelectInput
                {...register('typeContract')}
                id="typeContract"
                defaultValue=""
            >
                <option value="" disabled hidden>
                    Selecione
                </option>
                <option value={TypeContract.CLT}>CLT</option>
                <option value={TypeContract.PJ}>PJ</option>
                <option value={TypeContract.OTHER}>Outro</option>
            </SelectInput>

            <ErrorMessage>
                {errors.typeContract && <>{errors.typeContract.message}</>}
            </ErrorMessage>

            <Label>*Contrato por tempo indeterminado?</Label>
            <RadioInputContainer>
                <label>
                    <RadioInput
                        type="radio"
                        value="true"
                        {...register('indefinideContract')}
                        name="indefinideContract"
                        defaultChecked
                        onClick={() => {
                            setShowContractTimeInput(false);
                            setContractTimeValue('');
                        }}
                    />
                    Sim
                </label>
                <label>
                    <RadioInput
                        type="radio"
                        value="false"
                        {...register('indefinideContract')}
                        name="indefinideContract"
                        onClick={() => {
                            setShowContractTimeInput(true);
                        }}
                    />
                    Não
                </label>
            </RadioInputContainer>
            <Label>Tempo do Contrato:</Label>
            <Input
                {...register('contractType')}
                type="text"
                required
                placeholder="Informe o tempo de contrato"
                disabled={!showContractTimeInput}
                value={contractTimeValue}
                onChange={(e) => {
                    setContractTimeValue(e.target.value);
                    setValue('contractType', e.target.value);
                }}
            />
            <ErrorMessage>
                {errors.contractType && <>{errors.contractType.message}</>}
            </ErrorMessage>
            <ButtonSection>
                <CancelButton onClick={PreviousStep}>Voltar</CancelButton>
                <Button onClick={handleClickStep2}>Continuar</Button>
            </ButtonSection>
        </>
    );
};

export default StepTwo;
