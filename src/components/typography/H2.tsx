const H2 = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactElement | React.ReactElement[] | string;
}) => (
  <article className={`text-[50px] font-bold ${className || ''}`}>
    {children}
  </article>
);

export default H2;
