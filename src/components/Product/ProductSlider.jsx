import { useState } from "react";

const ProductSlider = ({ className, images }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const imageSrc = images[imageIndex];
  const handleChangeImage = (i) => {
    setImageIndex(i);
  };
  return (
    <div className={className}>
      <div className="w-full aspect-square border mb-4 text-center">
        <img
          src={imageSrc}
          alt="Main Image"
          className="h-full object-cover inline-block"
        />
      </div>
      <ul className="grid grid-cols-4 gap-2">
        {images.map((image, i) => (
          <li
            key={i}
            className="border hover:border-indigo-500 cursor-pointer aspect-square"
            onClick={() => handleChangeImage(i)}
          >
            <img
              src={image}
              alt={`thumbnail-${i}`}
              className="w-full h-full object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSlider;
