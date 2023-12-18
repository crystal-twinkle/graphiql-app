import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

function ResponseSection() {
  const result = useSelector((state: RootState) => state.result.result);

  return (
    <section className="max-h-screen overflow-auto w-1/2 p-5 whitespace-pre-wrap">{result}</section>
  );
}

export default ResponseSection;
