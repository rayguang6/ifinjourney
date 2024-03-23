const Button = ({
    label,
    iconURL,
    backgroundColor,
    textColor,
    borderColor,
    fullWidth,
  }) => {
    return (
      <button
        className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none shadow-green
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : "bg-primary text-white border-primary"
        } rounded-lg ${fullWidth && "w-full"}`}
      >
        {label}
  
        {iconURL && (
          <img
            src={iconURL}
            alt='arrow right icon'
            className='ml-2 rounded-full bg-white w-5 h-5'
          />
        )}
      </button>
    );
  };
  
  export default Button;