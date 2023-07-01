import Text, { Weight } from '@/components/typography/Text';
import Link from 'next/link';

export default function Button({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return (
    <button
      className="w-[420px] rounded-[50px] border-4 border-black h-[90px]"
      type="button"
    >
      {children}
    </button>
  );
}
