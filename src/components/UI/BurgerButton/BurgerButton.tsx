import './BurgerButton.css';

interface BurgerButtonProps {
  onClick: () => void;
  isOpened: boolean;
  className?: string;
}

export function BurgerButton({ onClick, isOpened, className }: BurgerButtonProps) {
  return (
    <div
      onClick={onClick}
      className={`burger ${isOpened ? 'burger_opened' : 'burger_closed'} ${className || ''}`}
    >
      <div className="burger__line"></div>
      <div className="burger__line"></div>
      <div className="burger__line"></div>
    </div>
  );
}
