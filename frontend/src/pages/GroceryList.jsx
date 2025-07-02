import { useState } from "react";
import { ShoppingCart, Trash2 } from "lucide-react";
import LineItem from "../components/LineItem";

export default function GroceryListPage() {
  const [items, setItems] = useState([
    { id: 1, name: "Cream cheese", user: "User 3" },
    { id: 2, name: "Flour", user: "User 2" },
    { id: 3, name: "Sour cream", user: "User 3" },
  ]);

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleClear = () => {
    setItems([]);
  };

  return (
    <div className="flex-col justify-center flex items-center ">
      <h1 className="mb-8">Your grocery list</h1>

      <li className="space-y-4 list-none w-full">
        {items.map((item) => (
          <LineItem
            key={item.id}
            title={item.name}
            bottomText={`added by: ${item.user}`}
            leftIcon={ShoppingCart}
            rightIcon={Trash2}
            onRightIconClick={() => handleDelete(item.id)}
          />
        ))}
      </li>

      <div className="flex justify-between mt-4 w-full">
        <button className="px-6 py-3 rounded-lg shadow-md bg-ogreen-500 text-white hover:bg-ogreen-600 active:bg-ogreen-700">
          Add to list
        </button>

        <button
          onClick={handleClear}
          className="px-6 py-3 rounded-lg shadow-md bg-ored-500 text-white hover:bg-ored-600 active:bg-ored-700"
        >
          Clear list
        </button>
      </div>
    </div>
  );
}
