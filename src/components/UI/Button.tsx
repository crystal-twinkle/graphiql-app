interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  icon?: string;
  text?: string;
  disabled?: boolean;
  onclick?: () => void;
}

function Button({ type = 'button', icon, text, disabled, onclick }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onclick}
      className={
        'flex items-center gap-1 hover:brightness-125 hover:scale-[1.02] transition-all duration-200 ease-in-out active:scale-100 ' +
        (disabled ? 'pointer-events-none opacity-50' : '')
      }
    >
      {icon && <img src={icon} alt="local-icon" className="w-8 h-8" />}
      {text}
    </button>
  );
}

export default Button;
