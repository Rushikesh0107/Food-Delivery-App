import React from 'react';

function Button({
  children,
  type = 'button',
  bgColor = 'bg-green-700',
  textColor = 'text-white',
  className = '',
  ...props
}) {
  return (
    <button
      type={type}
      className={`px-4 py-2 md:px-6 md:py-2 font-bold text-lg md:text-xl rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
