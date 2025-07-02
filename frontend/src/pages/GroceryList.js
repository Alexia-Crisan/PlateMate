import { useState } from "react";
import { ShoppingCart, Trash2, Check} from "lucide-react";
import LineItem from '../components/LineItem';

export default function GroceryListPage() {
  const [items, setItems] = useState([
    { id: 1, name: "Cream cheese", user: "User 3" },
    { id: 2, name: "Flour", user: "User 2" },
    { id: 3, name: "Sour cream", user: "User 3" },
  ]);

  const [addingItem, setAddingItem] = useState(null);

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleClear = () => {
    setItems([]);
    setAddingItem(null);
  };

  const handleAddClick = () => {
    if (addingItem) return; 

    const newId = items.length ? items[items.length - 1].id + 1 : 1;
    setAddingItem({ id: newId, name: "", saved: false });
  };

  const handleInputChange = (e) => {
    setAddingItem({ ...addingItem, name: e.target.value });
  };

  const handleSaveNewItem = () => {
    if (!addingItem.name.trim()) return;

    setItems([...items, { ...addingItem, saved: true, user: "User 3" }]);
    setAddingItem(null);
  };

  return (
    <div className="min-h-screen flex-col justify-between flex items-center">
      <main className="mx-12 md:mx-64 py-10 ">
        <h1 className="font-semibold text-4xl mb-6 ">Your grocery list</h1>

        <div className="space-y-4 max-w-md mx-auto">
          {items.map((item) => (
            <LineItem
              key={item.id}
              title={item.name}
              bottomText={`added by: ${item.user}`}
              leftIcon={ShoppingCart}
              rightIcon={Trash2}
              rightColorIcon="text-ored-500"
              rightColorIconHover="hover:text-ored-600"
              onRightIconClick={() => handleDelete(item.id)}
            />
          ))}

          {addingItem && (
            <LineItem
              key={addingItem.id}
              title={
                <input
                  type="text"
                  value={addingItem.name}
                  onChange={handleInputChange}
                  placeholder="Ingredient name"
                  className="border-b focus:outline-none"
                  autoFocus
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    borderBottom: "1px solid #A7C957",
                    outline: "none",
                    padding: "4px 0",
                    color: "inherit",
                    fontSize: "inherit",
                  }}
                />
              }
              bottomText="new ingredient"
              leftIcon={ShoppingCart}
              rightIcon={Check}
              rightColorIcon="text-ogreen-300"
              rightColorIconHover="hover:text-ogreen-400"
              onRightIconClick={handleSaveNewItem}
            />
          )}
        </div>

        <div className="flex justify-center space-x-4 mt-8">
          <button 
            onClick={handleAddClick}
            className="px-6 py-3 rounded-lg shadow-md bg-ogreen-500 text-white hover:bg-ogreen-600 active:bg-ogreen-700">
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
