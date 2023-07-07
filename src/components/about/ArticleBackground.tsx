const ArticleBackground = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactElement | React.ReactElement[];
}) => (
  <article className={`bg-gray-100 rounded-3xl ${className || ''}`}>
    {children}
  </article>
);

export default ArticleBackground;
