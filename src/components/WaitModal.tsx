function WaitModal() {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
      <div className="rounded-lg bg-white p-8">
        {' '}
        <p>Aguarde, você será redirecionado em breve...</p>
      </div>
    </div>
  );
}

export default WaitModal;
