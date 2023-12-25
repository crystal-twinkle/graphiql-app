import Button from './UI/Button';
import { RootState, useAppSelector } from '../store/store';

export function Popup() {
  const data = useAppSelector((state: RootState) => state.popup.data);

  return data ? (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 bg-dark-50">
      <div className="rounded-3xl bg-cream w-fit max-w-5xl h-fit max-h-96 m-4 p-4 flex flex-col items-center bg-light">
        <div className="w-full px-4 overflow-auto ">
          {data?.messages.map((message: string) => <div className="py-1">{message}</div>)}
        </div>
        <div className="block mb-5"></div>
        <Button
          type="button"
          className="flex justify-center w-full border-2 border-text py-2 rounded-md"
          onclick={data?.submitClick}
          text={data?.submitText}
        />
      </div>
    </div>
  ) : (
    <></>
  );
}
