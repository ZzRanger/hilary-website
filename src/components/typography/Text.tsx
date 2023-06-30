export enum Weight {
  normal = 'font-normal',
  medium = 'font-medium',
  semibold = 'font-semibold',
  bold = 'font-bold',
}

const Text = ({
  className = '',
  weight = Weight.normal,
  children,
}: {
  className?: string;
  weight?: Weight;
  children:
    | React.ReactElement
    | React.ReactElement[]
    | string
    | (string | React.ReactElement)[];
}) => (
  <article className={`text-[30px] ${className} ${weight}`}>{children}</article>
);

export default Text;
