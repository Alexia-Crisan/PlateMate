import CircleIcon from "./CircleIcon";
import { ImageUp } from "lucide-react";
import MyButton from "./MyButton";
import { useState } from "react";
import LineInput from "./LineInput";
import { useEffect, useRef } from "react";

export default function NewRecipeModal({ onClick }) {
  const [description, setDescription] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [newQuantity, setNewQuantity] = useState("");
  const [instructions, setInstructions] = useState("");

  const modalRef = useRef(null);

  function handleAddIngredient() {
    //backend stuff
    onClick();
  }

  useEffect(() => {
    function handleClickOutside(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClick();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClick]);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div
        className="bg-ogreen-500 absolute flex flex-col items-center p-8 w-[90%] rounded-xl text-white"
        ref={modalRef}
      >
        <h1 className="mb-8">Add a new recipe</h1>
        <CircleIcon Icon={ImageUp} addBorder={true} />
        <div className="w-full mb-8">
          <h2 className="mb-1">Description</h2>
          <LineInput
            type="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your recipe"
          />
        </div>
        <div className="w-full mb-8">
          <h2 className="mb-1">Ingredients</h2>
          <ol>
            <li className="flex sm:space-x-20 justify-between sm:justify-normal md:sm:space-x-16">
              <LineInput
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
                placeholder="New ingredient"
              />
              <LineInput
                value={newQuantity}
                onChange={(e) => setNewQuantity(e.target.value)}
                placeholder="x kg"
                className="max-w-16"
              />
            </li>
          </ol>
        </div>
        <div className="w-full mb-8">
          <h2 className="mb-1">Instructions</h2>
          <LineInput
            type="textarea"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Describe the instructions for your recipe"
          />
        </div>
        <MyButton
          text="Add recipe"
          color="ogreen-300"
          hoverColor="ogreen-500"
          activeColor="ogreen-600"
          onClick={handleAddIngredient}
        />
      </div>
    </div>
  );
}
