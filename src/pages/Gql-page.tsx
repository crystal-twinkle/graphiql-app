import QueryEditor from '../components/QueryEditor/QueryEditor';

export function GqlPage() {
  return (
    <div className="flex w-[95vw] h-full max-w-screen-xl -mx-5 p-2 bg-light">
      <QueryEditor />
    </div>
  );
}