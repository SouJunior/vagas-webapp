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
          <JobType>{watch('typeContract')}</JobType>
        </span>
      </HeaderPreview>

      <DescriptionPreview>{watch('description')}</DescriptionPreview>

      {watch('salaryMin') !== undefined || watch('salaryMax') !== undefined ? (
        <PreviewField>
          Faixa Salarial: de {watch('salaryMin')} a {watch('salaryMax')}{' '}
        </PreviewField>
      ) : null}
      <span>
        <PreviewField>Pré-requisitos:</PreviewField>
        <PreviewField>{watch('prerequisites')}</PreviewField>
      </span>
      <PreviewField>
        {watch('indefinideContract') === 'false'
          ? watch('contractType')
          : 'Contrato por tempo indeterminado'}
      </PreviewField>
      {watch('benefits') === null ? null : (
        <PreviewField>Benefícios: {watch('benefits')}</PreviewField>
      )}
      {watch('affirmative') === 'false' ? null : (
        <PreviewField>
          Grupo Minoritário:{' '}
          {watch('affirmativeType') && watch('affirmativeType').join(' / ')}
        </PreviewField>
      )}
      {watch('modality') !== undefined && (
        <PreviewField>
          {watch('modality')}{' '}
          {watch('modality') !== 'Remoto' &&
          watch('city') &&
          watch('federalUnit')
            ? ` - ${watch('city')}/${watch('federalUnit')}`
            : null}
        </PreviewField>
      )}
      <Divider />
    </WrapperPreview>
  );
}

export default JobPreview;
