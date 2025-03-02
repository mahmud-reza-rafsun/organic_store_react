import PropTypes from "prop-types";
import { useState } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { FaCartArrowDown } from "react-icons/fa6";

const Products = ({ products }) => {
  const { name, img, category, rating, price, published } = products;
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handlePurchesButton = (product) => {
    setLoading(true);
    setTimeout(() => {
      setSelectedProduct(product);
      setLoading(false);
      document.getElementById("modal_" + product.name).showModal();
    }, 1000);
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div>
      <div className="px-4 py-3 border border-gray-200 rounded-md">
        <figure className="lg:w-[234px] lg:h-[150px] w-full h-full">
          <img className="w-full rounded-md" src={img} alt={name} />
        </figure>
        <div className="pt-5 lg:mt-20 mt-0">
          <h2 className="text-md font-bold">{name}</h2>
          <div className="space-y-2 py-2 border-b border-green-200">
            <p className="text-[#131313B3] text-sm">Category: {category}</p>
            <p className="text-[#131313B3] text-sm">Price: ৳{price}</p>
            <p className="text-[#131313B3] text-sm">Rating: {rating}</p>
            <p className="text-[#131313B3] text-sm">Published: {published}</p>
          </div>

          {/* Modal */}
          <dialog id={"modal_" + name} className="modal">
            <div className="modal-box lg:max-w-[55%]">
              <form method="dialog" className="absolute right-0 -top-5">
                <button className="bg-[#8CE723] text-white w-7 h-7 cursor-pointer rounded-l-full absolute right-0 top-5 text-center">
                  ✕
                </button>
              </form>
              <div className="pb-4 text-center">
                {selectedProduct ? (
                  <div className="flex justify-center items-center gap-8">
                    <div>
                      <img
                        src={selectedProduct.img}
                        className="w-64  h-auto
                         my-2 rounded-md"
                      />
                    </div>
                    <div>
                      <div className="text-left space-y-3">
                        <h3 className="text-2xl font-semibold">
                          {selectedProduct?.name}
                        </h3>
                        <p className=" text-sm">
                          <span className="text-md">Price </span> <br />
                          <span className="text-xl font-semibold">
                            ৳{selectedProduct?.price}
                          </span>
                        </p>
                        {/* Quantity Section */}
                        <div className="flex items-center justify-center gap-4">
                          Quantity
                          <button
                            onClick={decreaseQuantity}
                            className="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:bg-[#8CE723] text-white bg-[#8BC34A] transition duration-300 relative"
                          >
                            -
                          </button>
                          <span className="text-lg font-semibold">
                            {quantity}
                          </span>
                          <button
                            onClick={increaseQuantity}
                            className="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:bg-[#8CE723] text-[#8CE723] hover:text-white  border border-[#8CE723] transition duration-300 relative"
                          >
                            +
                          </button>
                        </div>
                        <p className="text-sm">
                          Published: {selectedProduct?.published}
                        </p>
                        <p className="text-sm ">
                          Category: {selectedProduct.category}
                        </p>
                      </div>
                      <div className="flex gap-2 justify-center pt-4">
                        <button className="flex items-center text-sm cursor-pointer hover:bg-[#8CE723] text-white gap-2 bg-[#8BC34A] px-4 py-2 rounded-md transition duration-300 relative">
                          <span className="text-base">
                            <FaCartArrowDown />
                          </span>
                          <span>Add To Cart</span>
                        </button>
                        <button className="flex items-center text-sm cursor-pointer hover:bg-[#8CE723] text-[#8CE723] hover:text-white gap-2 border border-[#8CE723] px-4 py-2 rounded-md transition duration-300 relative">
                          <span className="text-base">
                            <BsBagCheckFill />
                          </span>
                          <span>Buy Now</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500">Loading...</p>
                )}
              </div>
            </div>
          </dialog>

          {/* Purchase Button with Loader */}
          <div className="mt-3 flex justify-center items-center">
            <button
              onClick={() => handlePurchesButton(products)}
              className="flex items-center text-sm cursor-pointer hover:bg-[#8CE723] text-white gap-2 bg-[#8BC34A] px-4 py-2 rounded-md transition duration-300 relative"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <span className="text-base">
                    <BsBagCheckFill />
                  </span>
                  <span>Purchase</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Products.propTypes = {
  products: PropTypes.object.isRequired,
};
export default Products;
