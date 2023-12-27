import QueryEditor from '../components/QueryEditor/QueryEditor';

export function GqlPage() {
  return (
    <div className="flex w-[95vw]  max-w-screen-xl rounded-md p-2 bg-light">
      <QueryEditor />
    </div>
  );
}
