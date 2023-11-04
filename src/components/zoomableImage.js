import { useEffect, useRef, useState } from 'react';

const ZoomableImage = ({ src, alt }) => {
  const [scale, setScale] = useState(1);
  const imageRef = useRef(null);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const imageTop = imageRef.current.offsetTop;

    // Adjust the scaling factor based on scroll position
    const newScale = 1 + (scrollTop - imageTop + 300) / 1000;

    // Ensure the scale remains within a certain range
    if (newScale >= 1 && newScale <= 2) {
      setScale(newScale);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className=" max-w-full flex justify-center items-center h-96">
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        style={{ transform: `scale(${scale})` }}
      />
    </div>
  );
};

export default ZoomableImage;
