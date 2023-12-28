import QueryEditor from '../components/QueryEditor/QueryEditor';

export function GqlPage() {
  return (
    <div className="flex flex-col sm:flex-row w-[95vw] -mx-5 max-w-screen-xl rounded-md p-2 bg-light">
      <QueryEditor />
    </div>
  );
}
