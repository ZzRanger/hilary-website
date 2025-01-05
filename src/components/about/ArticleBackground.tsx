const ArticleBackground = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <article
    className={`rounded-3xl border bg-white/60 shadow-2xl ${className || ""} `}
  >
    {children}
  </article>
);

export default ArticleBackground;
