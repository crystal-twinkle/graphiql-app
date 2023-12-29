import Button from './UI/Button';
import { RootState, useAppSelector } from '../store/store';

export function Popup() {
  const data = useAppSelector((state: RootState) => state.popup.data);

  return data ? (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 bg-dark-50"
      data-testid="popup-wrap"
    >
      <div className="w-[600px] min-h-[200px] rounded-lg m-4 p-4 flex flex-col justify-between items-center bg-light">
        <div className="flex flex-col items-center justify-center px-4 min-h-[160px] overflow-auto text-center">
          {data?.messages.map((message: string) => (
            <div key={message} className="py-1">
              {message}
            </div>
          ))}
        </div>
        <div className="mt-auto mb-5"></div>
        <Button
          type="button"
          className="flex justify-center border-2 border-text py-2 px-4 rounded-md"
          onclick={data?.submitClick}
          text={data?.submitText}
        />
      </div>
    </div>
  ) : (
    <></>
  );
}
