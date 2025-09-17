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
            ? 'is-active rounded px-1 py-2 text-blue hover:bg-gray-dark'
            : 'rounded px-1 py-2 text-gray-darker hover:bg-gray-dark'
        }
      >
        {children}
      </button>
    </div>
  );
};

export default ToggleOption;
