import QueryEditor from '../components/QueryEditor';
import ResponseSection from '../components/ResponseSection/ResponseSection';

export function GqlPage() {
  return (
    <div className="flex w-[95vw] p-2 bg-light rounded-md">
      <QueryEditor />
      <ResponseSection />
    </div>
  );
}
