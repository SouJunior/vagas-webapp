function WaitModal() {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg">
                {' '}
                <p>Aguarde, você será redirecionado em breve...</p>
            </div>
        </div>
    );
}

export default WaitModal;
