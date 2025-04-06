import React from "react";
const selectedProducts = {
  name: "Table",
  price: 120,
  originalPrice: 150,
  disccription: "This is a Table. Material used is the red wood from the rainforest of amazon. Strong and longlasting quality. Size: 200x200 cm",
  brand: "XYZ",
  material: "Wood",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Black", "White"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=9",
      altText: "Table Black",
    },
    {
      url: "https://picsum.photos/500/500?random=0",
      altText: "Table White",
    },
  ],
};

const ProductDetails = () => {
  return (
    <div className="p-6">
      <div className="max-x-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left Thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProducts.images.map((images, index) => (
              <img
                key={index}
                src={images.url}
                alt={images.altText || `Thumbnail ${index}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
              />
            ))}
          </div>
          {/* Main Image */}

          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={selectedProducts.images[0]?.url}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Mobile Thumbnail */}
          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {selectedProducts.images.map((images, index) => (
              <img
                key={index}
                src={images.url}
                alt={images.altText || `Thumbnail ${index}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
              />
            ))}
          </div>
          {/* Right Section */}
          <div className="md:w-1/2 md:ml-10">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">{selectedProducts.name}</h1>
            <p className="text-lg text-gray-600 mb-1 line-through">{selectedProducts.originalPrice && `${selectedProducts.originalPrice}`}</p>
            <p className="text-xl text-gray-500 mb-2">{selectedProducts.price}</p>
            <p className="text-gray-600 mb-4">{selectedProducts.disccription}</p>
            <div className="mb-4">
                <p className="text-gray-700">Color:</p>
                <div className="flex gap-2 mt-2">
                {selectedProducts.colors.map((color)=>(
                        <button key={color}
                        className="w-8 h-8 rounded-full border"
                        style={{backgroundColor: color.toLocaleLowerCase(),
                            filter: "brightness(0.9)",
                        }}></button>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
