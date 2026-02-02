export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[1120px] px-6 md:px-12 py-24">
      {children}
    </div>
  );
}
