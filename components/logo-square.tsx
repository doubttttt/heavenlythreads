import clsx from 'clsx';
import Image from 'next/image';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div
      className={clsx(
        'flex flex-none items-center justify-center',
        {
          'h-[40px] w-[40px]': !size,
          'h-[30px] w-[30px]': size === 'sm'
        }
      )}
    >
      <Image
        src="/favicon.ico"
        alt="Logo"
        width={40}
        height={40}
        layout="intrinsic"
      />
    </div>
  );
}
