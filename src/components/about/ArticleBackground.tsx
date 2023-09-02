const ArticleBackground = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <article
    className={`bg-white/60 dark:bg-black/60 shadow-2xl rounded-3xl dark:border-gray-500 border ${
      className || ''
    } `}
  >
    {children}
  </article>
);

export default ArticleBackground;
