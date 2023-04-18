import {
    DescriptionPreview,
    Divider,
    HeaderPreview,
    JobType,
    PreviewField,
    Title,
    WrapperPreview,
} from './styles';

function JobPreview({
    showPreview,
    setShowPreview,
    watch,
    contractTimeValue,
}: any) {
    return (
        <WrapperPreview>
            <HeaderPreview>
                <Title>{watch('title')}</Title>
                <span>
                    <JobType>{watch('type')}</JobType>
                    <JobType>{watch('type_contract')}</JobType>
                </span>
            </HeaderPreview>

            <DescriptionPreview>{watch('description')}</DescriptionPreview>

            {watch('minValue') !== undefined ||
            watch('maxValue') !== undefined ? (
                <PreviewField>
                    Faixa Salarial: de {watch('minValue')} a {watch('maxValue')}{' '}
                </PreviewField>
            ) : null}
            <span>
                <PreviewField>Pré-requisitos:</PreviewField>
                <PreviewField>{watch('prerequisites')}</PreviewField>
            </span>
            <PreviewField>
                {watch('contract_time') === 'no'
                    ? contractTimeValue
                    : 'Contrato por tempo indeterminado'}
            </PreviewField>
            {watch('benefits') === null ? null : (
                <PreviewField>Benefícios: {watch('benefits')}</PreviewField>
            )}
            {watch('affirmative') === 'false' ? null : (
                <PreviewField>
                    Grupo Minoritário: {watch('affirmative_type')}
                </PreviewField>
            )}
            <PreviewField>
                {watch('modality')} - {watch('city')}
            </PreviewField>
            <Divider />
        </WrapperPreview>
    );
}

export default JobPreview;
