interface CancelModalProps {
  handleConfirmCancel: () => void;
  setCancelModal: (value: boolean) => void;
}

function CancelModal({
  handleConfirmCancel,
  setCancelModal,
}: CancelModalProps) {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
      <div className="rounded-lg bg-white p-8 text-center">
        <p>
          Tem certeza que deseja cancelar a publicação desta vaga? <br />
          Todos os dados informados serão perdidos.
        </p>
        <div className="mt-5 flex justify-center gap-5">
          <button
            className="rounded border border-blue px-4 py-2 text-blue"
            onClick={() => setCancelModal(false)}
          >
            Não
          </button>
          <button
            className="mr-2 rounded bg-blue px-4 py-2 text-white"
            onClick={handleConfirmCancel}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}

export default CancelModal;
