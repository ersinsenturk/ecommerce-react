const Button = ({ textOnly, children, ...props }) => {
  let classes =
    "font-medium rounded-lg text-sm px-3 lg:px-5 py-1.5 lg:py-2.5 focus:outline-none whitespace-nowrap";
  if (textOnly) {
    classes += " text-gray-600";
  } else {
    classes += " text-white bg-indigo-700 hover:bg-indigo-800";
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
