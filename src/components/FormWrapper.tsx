import { CommonReactProps } from '../models/common.model';

export interface FormWrapperProps extends CommonReactProps {
  title: string;
}

export function FormWrapper({ children, title }: FormWrapperProps) {
  return (
    <div className="flex justify-center items-center">
      <div className="p-4 border-2 border-solid rounded-md border-sky-500 w-[320px]">
        <span className="block w-full text-center font-bold text-2xl">{title}</span>
        {children}
      </div>
    </div>
  );
}
