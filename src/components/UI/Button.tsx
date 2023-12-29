import { Loader } from '../Loader/Loader';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  icon?: string;
  text?: string;
  prefix?: string;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onclick?: () => void;
  dataTestid?: string;
}

function Button({
  type = 'button',
  icon,
  text,
  disabled,
  loading,
  className,
  prefix,
  onclick,
  dataTestid,
}: ButtonProps) {
  return (
    <button
      title={text}
      type={type}
      onClick={onclick}
      data-testid={dataTestid}
      className={
        'flex items-center gap-1 hover:brightness-125 hover:scale-[1.02] transition-all duration-300 ease-in-out active:scale-[0.98] ' +
        (className || '') +
        (disabled ? 'pointer-events-none opacity-50' : '')
      }
    >
      {loading ? (
        <Loader className="w-8 h-8 p-2" />
      ) : (
        icon && (
          <div className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px]">
            <img src={icon} alt="local-icon" />
          </div>
        )
      )}
      {prefix ? <span className="mr-1">{prefix}</span> : <></>}
      <span>{text}</span>
    </button>
  );
}

export default Button;
