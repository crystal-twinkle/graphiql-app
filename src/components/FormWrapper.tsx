import { CommonReactProps } from '../models/common';
import { Loader } from './Loader/Loader';
import React, { FormEventHandler } from 'react';
import { useLocalization } from '../context/localization-context';

export interface FormWrapperProps extends CommonReactProps {
  title: string;
  loading: boolean;
  onSubmit: FormEventHandler<HTMLFormElement>;
  dataTestid: string;
}

export function FormWrapper({ children, title, loading, onSubmit, dataTestid }: FormWrapperProps) {
  const { translate } = useLocalization();

  return (
    <div className="flex justify-center items-center">
      <div className="p-4 border-2 border-solid rounded-md border-text w-[320px]">
        <span className="block w-full text-center font-bold text-2xl">{title}</span>
        <form autoComplete="on" onSubmit={onSubmit} data-testid={dataTestid}>
          {children}
          <button
            type="submit"
            className={`relative mt-4 p-2 cursor-pointer hover:brightness-125 hover:scale-[1.02] border-text transition-all duration-200 ease-in-out w-full py-2 border-2 rounded-md ${
              loading ? 'pointer-events-none opacity-5' : ''
            }`}
          >
            {loading ? <Loader className="w-4 h-4" /> : translate.submit}
          </button>
        </form>
      </div>
    </div>
  );
}
