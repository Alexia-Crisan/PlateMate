import CircleIcon from "./CircleIcon";
import { CirclePlus } from "lucide-react";
import MyButton from "./MyButton";
import { useState, useEffect, useRef } from "react";
import LineInput from "./LineInput";

export default function CreateCircleModal({ onClose }) {
  const [circleName, setCircleName] = useState("");
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  function handleCreate() {
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-ogreen-500 p-8 rounded-xl w-[90%] max-w-md text-white flex flex-col items-center"
      >
        <h1 className="mb-8 text-xl font-semibold">Create a new circle</h1>
        <CircleIcon Icon={CirclePlus} addBorder={true} />

        <div className="w-full mb-6">
          <h2 className="mb-1">Circle name</h2>
          <LineInput
            value={circleName}
            onChange={(e) => setCircleName(e.target.value)}
            placeholder="e.g. Family, Uni group"
          />
        </div>

        <p className="text-sm text-white mb-6">
          Your invite code is: <span className="text-ogreen-300 font-semibold">YUE7J9</span>
        </p>

        <MyButton
            text="Create circle"
            color="ogreen-300"
            hoverColor="ogreen-400"
            activeColor="ogreen-500"
            onClick={handleCreate}
        />
      </div>
    </div>
  );
}
