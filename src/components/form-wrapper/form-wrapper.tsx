import { CommonReactProps } from '../../models/common.model';

export interface FormWrapperProps extends CommonReactProps {
  title: string;
}

export function FormWrapper({ children, title }: FormWrapperProps) {
  return (
    <div className="flex justify-center items-center">
      <div className="w-6/12 p-4 border-2 border-pink-500 rounded-2xl mt-4">
        <span className="block w-full text-center font-bold text-2xl">{title}</span>
        {children}
      </div>
    </div>
  );
}
