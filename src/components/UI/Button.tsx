interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  icon?: string;
  text?: string;
  onclick?: () => void;
}

function Button({ type = 'button', icon, text, onclick }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onclick}
      className="flex items-center gap-1 hover:brightness-125 hover:scale-[1.02] transition-all duration-200 ease-in-out active:scale-100"
    >
      {icon && <img src={icon} alt="local-icon" className="w-8 h-8" />}
      {text}
    </button>
  );
}

export default Button;
