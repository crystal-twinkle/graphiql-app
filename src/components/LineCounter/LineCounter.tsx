interface LineCounterProps {
  value: string;
}

function LineCounter({ value }: LineCounterProps) {
  const linesAmount = value.split('\n').length;

  return (
    <div className="pl-2">
      {Array.from({ length: linesAmount }, (_, i) => (
        <p className="w-7 text-right brightness-50" key={i}>
          {i + 1}
        </p>
      ))}
    </div>
  );
}

export default LineCounter;
