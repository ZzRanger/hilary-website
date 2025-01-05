export function LayoutWrapper({ children }: { children: JSX.Element }) {
  return (
    <div className="box-border w-full rounded-2xl border border-[#D9D9D9] bg-white/70 p-6">
      {children}
    </div>
  );
}
