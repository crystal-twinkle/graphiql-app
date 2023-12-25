import Button from './UI/Button';
import { RootState, useAppSelector } from '../store/store';

export function Popup() {
  const data = useAppSelector((state: RootState) => state.popup.data);

  return data ? (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 bg-dark-50">
      <div className="rounded-3xl bg-cream w-fit p-4 flex flex-col items-center bg-light">
        <span className="block mb-5">{data?.message}</span>
        <Button type="button" onclick={data?.submitClick} text={data?.submitText} />
      </div>
    </div>
  ) : (
    <></>
  );
}
