import React from 'react';
import TriangleWarning from '../../../assets/imgs/triangleWarning.svg';
import { Button } from '../button';
import { LazyImage } from '../lazy-image';

type ErrorModalProps = {
  hasError: boolean;
  onRetry?: () => void;
  onClose?: () => void;
  errorType?: 'unexpected' | 'save' | 'publish' | undefined;
};

const errorMessages = {
  unexpected: {
    title: 'Opps! Algo deu errado...',
    message:
      'Estamos enfrentando um problema inesperado. Tente novamente em breve.',
  },
  save: {
    title: 'Não foi possível salvar a vaga',
    message:
      'Não conseguimos salvar sua vaga no momento. Tente novamente em alguns instantes.',
  },
  publish: {
    title: 'Não foi possível publicar a vaga',
    message:
      'Não conseguimos publicar sua vaga no momento. Tente novamente em alguns instantes.',
  },
};

export function ErrorModal({
  hasError,
  onRetry,
  onClose,
  errorType,
}: ErrorModalProps) {
  if (!hasError) return null;

  const { title, message } = errorType
    ? errorMessages[errorType]
    : errorMessages.unexpected;

  const modalTitleId = 'error-modal-title';
  const modalDescId = 'error-modal-desc';

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && onClose) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#FBFDFF] bg-opacity-70"
      onKeyDown={handleKeyDown}
    >
      <div
        className="relative flex h-auto w-[90%] max-w-[804px] flex-col items-center justify-center gap-6 rounded-2xl border border-[#DEDEDE] bg-white p-6 font-canada shadow-xl md:h-[508px]"
        role="dialog"
        aria-modal="true"
        aria-labelledby={modalTitleId}
        aria-describedby={modalDescId}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-xl text-gray-500 hover:text-gray-700"
          aria-label="Fechar modal de erro"
        >
          ×
        </button>

        <div className="text-center">
          <h2 id={modalTitleId} className="text-[40px] font-bold">
            {title}
          </h2>
          <p id={modalDescId} className="text-[16px] text-[#787878]">
            {message}
          </p>
        </div>

        <LazyImage
          src={TriangleWarning}
          alt="Ícone de erro"
          className="mb-6 mt-6 h-[67px] w-[74px]"
          ariaLabel="Ícone de erro"
        />

        <Button
          intent="primary"
          className="h-[44px] w-[160px] text-[16px] font-medium normal-case"
          onClick={onRetry}
        >
          Tentar de novo
        </Button>
      </div>
    </div>
  );
}
