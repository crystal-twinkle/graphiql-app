import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

function ResponseSection() {
  const result = useSelector((state: RootState) => state.result.result);

  return (
    <section className="max-h-screen overflow-auto w-1/2 px-5 py-1 whitespace-pre-wrap font-mono">
      {result}
    </section>
  );
}

export default ResponseSection;
