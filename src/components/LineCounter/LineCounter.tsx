interface LineCounterProps {
  value: string;
}

function LineCounter({ value }: LineCounterProps) {
  const linesAmount = value.split('\n').length;

  return (
    <div className="pl-2">
      {Array.from({ length: linesAmount }, (_, i) => (
        <p className="w-7 text-right" key={i}>
          {i + 1}
        </p>
      ))}
    </div>
  );
}

export default LineCounter;
