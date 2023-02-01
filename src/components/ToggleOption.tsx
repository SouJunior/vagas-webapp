const ToggleOption = ({ editor, children, type, toggleType }: any) => {
    return (
        <div>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    toggleType();
                }}
                className={
                    editor.isActive(type)
                        ? 'is-active text-blue hover:bg-gray-dark py-2 px-1 rounded'
                        : 'text-gray-darker hover:bg-gray-dark py-2 px-1 rounded'
                }
            >
                {children}
            </button>
        </div>
    );
};

export default ToggleOption;
