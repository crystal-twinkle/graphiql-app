import { useLocalization } from '../context/localization-context';
import notFound from '../assets/images/404.svg';

export function NotFoundPage() {
  const { translate } = useLocalization();

  return (
    <section className="flex flex-col items-center justify-center gap-10">
      <img src={notFound} alt="Not found" />
      <div className="flex justify-center bg-amber-50 rounded-2xl p-3 mt-3 no-data">
        {translate.noSuchPage}
      </div>
    </section>
  );
}
