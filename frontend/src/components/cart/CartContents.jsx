import { RiDeleteBin3Line } from "react-icons/ri";

const CartContents = () => {
  const cartProducts = [
    {
      id: 1,
      name: "Classic White T-Shirt",
      image: "https://picsum.photos/200?random=1",
      size: "M",
      color: "White",
      price: 499,
      quantity: 1,
    },
    {
      id: 2,
      name: "Blue Denim Jacket",
      image: "https://picsum.photos/200?random=2",
      size: "L",
      color: "Blue",
      price: 1499,
      quantity: 2,
    },
    {
      id: 3,
      name: "Black Hoodie",
      image: "https://picsum.photos/200?random=3",
      size: "XL",
      color: "Black",
      price: 999,
      quantity: 1,
    },
    {
      id: 4,
      name: "Running Shoes",
      image: "https://picsum.photos/200?random=4",
      size: "42",
      color: "Gray",
      price: 1999,
      quantity: 1,
    },
  ];

  return (
    <div className="p-4">
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          {/* LEFT SIDE */}
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />

            <div>
              <h3 className="font-semibold">{product.name}</h3>

              <p className="text-sm text-gray-500">
                size: {product.size} | color: {product.color}
              </p>

              {/* QUANTITY BUTTONS */}
              <div className="flex items-center mt-2">
                <button className="border border-gray-200 rounded px-2 py-1 text-xl font-medium">
                  -
                </button>

                <span className="mx-4">{product.quantity}</span>

                <button className="border border-gray-200 rounded px-2 py-1 text-xl font-medium">
                  +
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col items-end">
            <p className="font-medium">
              ₹{product.price.toLocaleString()}
            </p>

            <button className="mt-2 text-red-500 hover:text-red-700">
              <RiDeleteBin3Line className="h-6 w-6" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
