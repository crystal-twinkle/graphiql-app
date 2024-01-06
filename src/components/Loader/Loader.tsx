import './Loader.css';

export function Loader({ className }: { className: string }) {
  return <span className={'loader ' + (className || '')} />;
}
