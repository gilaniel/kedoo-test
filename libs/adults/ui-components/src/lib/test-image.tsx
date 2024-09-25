import { HTMLAttributes } from 'react';

type TestImageProps = HTMLAttributes<HTMLImageElement> & { alt?: string };

export function TestImage({ alt, ...props }: TestImageProps) {
  return (
    <img
      src="https://freshtunes.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner.468e8c73.jpg&w=2048&q=75"
      alt={alt}
      {...props}
    />
  );
}

export default TestImage;
