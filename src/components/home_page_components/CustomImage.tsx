import { useEffect, useState } from "react";

type Props = {
  uri?: string;
  alt?: string;
  className?:string
};

export const CustomImage = ({ uri, alt, className }: Props) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [uri]);

  return (
    <>
      {!loaded && <Loader />}
      <img
        className={`${className} ${loaded ? '' : 'hidden'}`}
        src={uri}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
    </>
  );
};

const Loader = () =>   <div className="flex justify-center items-center w-full h-full absolute top-0 left-0 bg-black bg-opacity-50">
    <div className="w-10 h-10 animate-spin border-4 border-t-4 border-gray-500 rounded-full border-t-white"/>
</div>
