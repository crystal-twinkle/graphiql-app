export function DocsTitle({ title }: { title: string }) {
  return (
    <h2 title={title} className="overflow-hidden text-ellipsis text-3xl mb-4">
      {title}
    </h2>
  );
}
