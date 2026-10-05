import { useReducer } from "react";
export type Product = {
  id: number;
  name: string;
  price: number;
};

const products: Product[] = [
  { id: 1, name: "Sneakers", price: 25000 },
  { id: 2, name: "Wristwatch", price: 18000 },
  { id: 3, name: "Backpack", price: 12000 },
  { id: 4, name: "Sunglasses", price: 7500 },
  { id: 5, name: "Headphones", price: 30000 },
];

type CartItem = Product & { qty: number };

//how the data in the cart should look like
type Cart = CartItem[];

//actions
type AddAction = { type: "add"; item: Product };
type RemoveAction = { type: "remove"; id: number };

type CartAction = AddAction | RemoveAction;
//the rule book

function handleCartItems(cart: Cart, action: CartAction): Cart {
  switch (action.type) {
    case "add":
      return [...cart, { ...action.item, qty: 1 }];
    case "remove":
      return cart.filter((item) => item.id !== action.id);

    default:
      return cart;
  }
}
const LearnReducer = () => {
  const [cart, dispatch] = useReducer(handleCartItems, []);

  return (
    <div className="mx-auto my-10 grid max-w-4xl gap-8 px-5 text-neutral-900 md:grid-cols-[2fr_1fr]">
      <section>
        <h2 className="mb-4 text-lg font-semibold">Products</h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col gap-2 rounded-xl border border-neutral-200 bg-white p-4"
            >
              <p className="font-semibold">{product.name}</p>
              <p className="text-sm text-neutral-500">
                ₦{product.price.toLocaleString()}
              </p>
              <button
                className="mt-auto rounded-lg bg-neutral-900 px-3 py-2 text-sm text-white hover:bg-neutral-700"
                onClick={() => dispatch({ type: "add", item: product })}
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="self-start rounded-xl border border-neutral-200 bg-white p-5">
        <h2 className="mb-4 text-lg font-semibold">Cart</h2>
        {cart.length === 0 ? (
          <p className="text-sm text-neutral-400">Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b border-neutral-100 py-3 last:border-b-0"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-neutral-500">
                  ₦{item.price.toLocaleString()} · Qty {item.qty}
                </p>
              </div>
              <button
                className="rounded-lg border border-red-200 px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                onClick={() => dispatch({ type: "remove", id: item.id })}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default LearnReducer;
