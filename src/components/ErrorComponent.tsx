import React from 'react';

interface FallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorComponent = ({ error, resetErrorBoundary }: FallbackProps) => {
  const change = () => {
    resetErrorBoundary();
  };

  return (
    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/5 flex flex-col items-center gap-5 border-[5px] border-red-500 border-dotted rounded-5 p-5 max-w-[450px] overflow-hidden">
      <div className="text-2xl font-medium">OOPS, something went wrong :(</div>
      <div className="text-xl text-red-700">{error.message}</div>
      <button
        className="w-32 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-no-repeat bg-cover rounded-full border-0 text-white cursor-pointer text-base px-5 py-2"
        onClick={change}
      >
        Reset
      </button>
    </div>
  );
};

export default ErrorComponent;
