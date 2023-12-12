import React from "react";
import Image, { StaticImageData } from "next/image";

interface LazyImageProps {
  src: StaticImageData;
  alt: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt }) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div
      style={{
        position: "relative",
        height: "300px",
        width: "100%",
        overflow: "hidden",
        borderRadius: "9px",
      }}
    >
      {!imageLoaded && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "#f0f0f0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Loading...
        </div>
      )}
      <Image
        onLoad={handleImageLoad}
        style={{ display: imageLoaded ? "block" : "none" }}
        width={600}
        height={300}
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default LazyImage;
