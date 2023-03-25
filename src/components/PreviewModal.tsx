function PreviewModal({
    showPreview,
    setShowPreview,
    watch,
    contractTimeValue,
}: any) {
    return (
        showPreview && (
            <div className="dark-overlay" onClick={() => setShowPreview(false)}>
                <div
                    className="popup flex flex-col justify-between overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="mt-5">
                        <h2 className="text-lg font-bold text-center mb-8">
                            Nome da empresa
                        </h2>
                        <div className="ml-4">
                            <h2 className="text-lg font-bold">
                                {watch('title')}
                            </h2>
                            <p className="">
                                {watch('type')} / {watch('type_contract')}
                            </p>
                            <h2 className="text-lg font-bold mt-2">
                                Descrição/Pré-requisitos
                            </h2>
                            <p className="text-justify mb-7">
                                {watch('description')}
                            </p>
                            <p className="text-justify">
                                {watch('prerequisites')}
                            </p>
                            <h2 className="text-lg font-bold mt-2">
                                Benefícios:{' '}
                            </h2>
                            <p>{watch('benefits')}</p>
                            <span className="flex gap-2 mt-2">
                                <h2 className="text-md font-bold">
                                    Faixa Salarial:{' '}
                                </h2>
                                <p>
                                    {watch('minValue')} - {watch('maxValue')}{' '}
                                    reais/mês
                                </p>
                            </span>
                            <span className="flex gap-2 mt-2">
                                <h2 className="text-md font-bold">
                                    Modalidade:{' '}
                                </h2>
                                <p>{watch('modality')}</p>
                            </span>
                            <span className="flex gap-2 mt-2 mb-16">
                                <h2 className="text-md font-bold">
                                    Tempo/tipo de contrato:{' '}
                                </h2>
                                <p>
                                    {watch('contract_time') === 'no'
                                        ? contractTimeValue
                                        : 'undetermined'}
                                </p>
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={() => setShowPreview(false)}
                        className="bg-blue text-white rounded p-4"
                    >
                        Fechar
                    </button>
                </div>
            </div>
        )
    );
}

export default PreviewModal;
