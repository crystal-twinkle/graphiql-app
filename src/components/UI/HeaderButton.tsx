interface HeaderButtonProps {
  icon: string;
  text: string;
  onclick: () => void;
}

function HeaderButton({ icon, text, onclick }: HeaderButtonProps) {
  return (
    <button
      type="button"
      onClick={onclick}
      className="flex items-center gap-1 hover:brightness-125 hover:scale-[1.05] transition-all duration-200 ease-in-out"
    >
      <img src={icon} alt="local-icon" className="w-8 h-8" />
      {text}
    </button>
  );
}

export default HeaderButton;
