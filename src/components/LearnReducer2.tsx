// import { useReducer } from "react";
// import type { Product } from "./LearnReducer";

// const products: Product[] = [
//   { id: 1, name: "Sneakers", price: 25000 },
//   { id: 2, name: "Wristwatch", price: 18000 },
//   { id: 3, name: "Backpack", price: 12000 },
//   { id: 4, name: "Sunglasses", price: 7500 },
//   { id: 5, name: "Headphones", price: 30000 },
// ];

// type CartItem = Product & { qty: 1 };

// //how the data should look like - the cart
// type Cart = CartItem[];

// //the actions
// type AddAction = { type: "add"; item: Product };
// type RemoveAction = { type: "remove"; id: number };

// type CartAction = AddAction | RemoveAction;

// //the rulebook
// function handleCartItems(cart: Cart, action: CartAction) {
//   switch (action.type) {
//     case "add":
//       return [...cart, { ...action.item, qty: 1 }];
//     case "remove":
//       return cart.filter((item) => item.id !== action.id);
//     default:
//       return cart;
//   }
// }

// const LearnReducer2 = () => {
//   const [cart, dispatch] = useReducer(handleCartItems, []);

//   return (
//     <div>
//       {products.map((p) => (
//         <div key={p.id}>
//           <span>{p.name}</span>
//           <span>{p.price}</span>
//           <button onClick={() => dispatch({ type: "add", item: p })}></button>
//         </div>
//       ))}

//       <div>
//         {cart.map(c=> (
//             <div>
//                 <span>
//                 </span>
//                 </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LearnReducer2;
