const ArticleBackground = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactElement | React.ReactElement[];
}) => (
  <article
    className={`bg-white/50 dark:bg-black/50 shadow-2xl rounded-3xl dark:border-gray-500 border ${
      className || ''
    } `}
  >
    {children}
  </article>
);

export default ArticleBackground;
