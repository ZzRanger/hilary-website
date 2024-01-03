import { ReactNode } from "react";

export enum Weight {
  normal = "font-normal",
  medium = "font-medium",
  semibold = "font-semibold",
  bold = "font-bold",
}

interface HTMLElementProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  weight?: Weight;
  children: ReactNode;
}

const Text: React.FC<HTMLElementProps> = ({
  className = "",
  weight = Weight.normal,
  children,
  ...props
}: HTMLElementProps) => (
  <article className={`text-[30px] ${className} ${weight}`} {...props}>
    {children}
  </article>
);

export default Text;
