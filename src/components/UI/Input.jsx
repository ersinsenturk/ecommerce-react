const Input = ({ id, label, className, ...props }) => {
  const classes = className;
  return (
    <div className={`${classes}`}>
      <label htmlFor={id} className="text-gray-600 text-sm">
        {label}
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-indigo-500 block w-full p-2"
        name={id}
        id={id}
        {...props}
      />
    </div>
  );
};

export default Input;
