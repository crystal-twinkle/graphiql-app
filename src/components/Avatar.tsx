import { User } from '@firebase/auth';

export function Avatar({ user }: { user: User }) {
  const generateColor = () => {
    const first = [...String(user.email?.charCodeAt(0))].pop();
    const second = [...String(user.email?.charCodeAt(1))].pop();

    return `#${first}${second}0000`;
  };
  return (
    <div
      className="rounded-full px-2.5 py-1 bg-amber-400 border-sky-500 border-2"
      style={{ background: generateColor() }}
    >
      {user.email?.charAt(0).toUpperCase()}
    </div>
  );
}
