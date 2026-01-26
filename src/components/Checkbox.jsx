const Checkbox = ({ id, text, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 rounded cursor-pointer"
      />
      <label htmlFor={id} className="ml-3 text-md cursor-pointer font-medium">
        {text}
      </label>
    </div>
  );
};

export default Checkbox;
