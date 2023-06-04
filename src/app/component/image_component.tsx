import Image from "next/image";
type ImageType = {
  src: any;
  alt: string;
  width: any;
  height: any;
};

export const MyImage = (props: ImageType) => {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      sizes="100vh"
      style={{ width: '100%', height: 'auto' }}  // layout="fill", layout="intrinsic"
    />
  );
};
