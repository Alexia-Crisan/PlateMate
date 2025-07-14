import { useState } from "react";
import MyButton from "./MyButton";
import LineInput from "./LineInput"; 

export default function ViewRecipeModal({ onClick }) {
  const [description, setDescription] = useState("");
  const [instructions, setInstructions] = useState("");
  const [ingredients, setIngredients] = useState([{ name: "", quantity: "" }])

  function handleIngredientChange(index, field, value) {
    const newIngredients = [...ingredients];
    newIngredients[index][field] = value;
    setIngredients(newIngredients);
  }

  function handleAddIngredient() {
    setIngredients([...ingredients, { name: "", quantity: "" }]);
  }

  function handleSave() {
    // Save logic
    onClick();
  }

  return (
    <div className="bg-ogreen-500 absolute flex flex-col items-center p-8 w-[90%] rounded-xl text-white max-h-[90vh] overflow-auto">
      <h1 className="mb-8 text-2xl font-bold text-center">Recipe name</h1>

      <div className="mb-6 w-full">
        <h2 className="mb-1 font-semibold">Images:</h2>
        <div className="flex gap-4 mb-4">
           <div className="bg-gray-300 rounded-md w-20 h-20" />
          <div className="bg-gray-300 rounded-md w-20 h-20" />
          <div className="bg-gray-300 rounded-md w-20 h-20" />
        </div>
      </div>

      <div className="w-full mb-8">
        <h2 className="mb-1 font-semibold">Description</h2>
        <LineInput
          type="textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe your recipe"
        />
      </div>

      <div className="w-full mb-8">
        <h2 className="mb-1 font-semibold">Ingredients</h2>
        <ol>
          {ingredients.map((ing, index) => (
            <li
              key={index}
              className="flex sm:space-x-20 justify-between sm:justify-normal md:sm:space-x-16 mb-2"
            >
              <LineInput
                value={ing.name}
                onChange={(e) => handleIngredientChange(index, "name", e.target.value)}
                placeholder="Ingredient"
              />
              <LineInput
                value={ing.quantity}
                onChange={(e) => handleIngredientChange(index, "quantity", e.target.value)}
                placeholder="Qty"
                className="max-w-16"
              />
            </li>
          ))}
        </ol>
        <button
          className="mt-2 text-sm text-green-300 underline"
          onClick={handleAddIngredient}
        >
          + Add ingredient
        </button>
      </div>

      <div className="w-full mb-8">
        <h2 className="mb-1 font-semibold">Instructions</h2>
        <LineInput
          type="textarea"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="Describe the instructions for your recipe"
        />
      </div>

      <MyButton
        text="Close"
        color="ogreen-400"
        hoverColor="ogreen-500"
        activeColor="ogreen-600"
        onClick={handleSave}
      />
    </div>
  );
}
