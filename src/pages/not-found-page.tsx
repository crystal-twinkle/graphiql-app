import { useLocalization } from '../context/localization-context';

export function NotFoundPage() {
  const { translate } = useLocalization();

  return (
    <section>
      <div className="flex justify-center bg-amber-50 rounded-2xl p-3 mt-3 no-data">
        {translate.noSuchPage}
      </div>
    </section>
  );
}
