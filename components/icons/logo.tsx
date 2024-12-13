import clsx from 'clsx';

export default function LogoIcon(props: { className?: string; src: string }) {
  return (
    <img
      src={props.src}
      alt="Logo"
      className={clsx('object-contain', props.className)}
    />
  );
}
