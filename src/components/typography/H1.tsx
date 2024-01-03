const H1 = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactElement | React.ReactElement[] | string;
}) => (
  <article className={`text-[64px] font-extrabold ${className || ""}`}>
    {children}
  </article>
);

export default H1;
