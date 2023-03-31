export default function SistemaRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center min-h-screen">
      {children}
    </div>
  );
}
