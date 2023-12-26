interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  icon?: string;
  text?: string;
  disabled?: boolean;
  className?: string;
  onclick?: () => void;
}

function Button({ type = 'button', icon, text, disabled, className, onclick }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onclick}
      className={
        'flex items-center gap-1 hover:brightness-125 hover:scale-[1.02] transition-all duration-300 ease-in-out active:scale-[0.98] ' +
        (className || '') +
        (disabled ? 'pointer-events-none opacity-50' : '')
      }
    >
      {icon && (
        <div className="w-[32px] h-[32px]">
          <img src={icon} alt="local-icon" />
        </div>
      )}
      {text}
    </button>
  );
}

export default Button;
