import Button from './UI/Button';

export function Popup() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50">
      <div className="rounded-3xl bg-amber-50 w-fit p-4 flex flex-col items-center">
        <span className="block mb-5">{message}</span>
        <Button type="button" onclick={submitClick} text={submitText} />
      </div>
    </div>
  );
}
