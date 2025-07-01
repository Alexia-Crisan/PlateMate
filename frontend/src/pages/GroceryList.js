import { useState } from "react";
import { ShoppingCart, Trash2 } from "lucide-react";

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
    <div className="min-h-screen flex-col justify-between flex items-center">
      <main className="mx-12 md:mx-64 py-10 ">
        <h1 className="font-semibold text-4xl mb-6 ">Your grocery list</h1>

        <div className="space-y-4 max-w-md mx-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-lg flex justify-between items-center shadow-md bg-ogreen-900"
            >
              <div className="flex items-center space-x-3">
                <ShoppingCart className="w-6 h-6 text-white" />
                <div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-ogreen-400">
                    added by: {item.user}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                aria-label={`Delete ${item.name}`}
              >
                <Trash2 className="w-5 h-5 text-ored-500" />
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-4 mt-8">
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
      </main>
    </div>
  );
}
