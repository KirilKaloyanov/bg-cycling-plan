const Input = ({ name, type, label, errors, ...rest }) => {
  return (
    <div className="">
      <label htmlFor={name} className="">
        {label}
      </label>
      <input {...rest} id={name} name={name} type={type} className="" />
      {errors[name] && <div className="">{errors[name]}</div>}
    </div>
  );
};

export default Input;
