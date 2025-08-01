import CircleIcon from "./CircleIcon";
import { Link } from "lucide-react";
import MyButton from "./MyButton";
import { useState, useEffect, useRef } from "react";
import LineInput from "./LineInput";

export default function JoinCircleModal({ onClose }) {
  const [inviteCode, setInviteCode] = useState("");
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

  function handleJoin() {
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-ogreen-500 p-8 rounded-xl w-[90%] max-w-md text-white flex flex-col items-center"
      >
        <h1 className="mb-8 text-xl font-semibold">Join a circle</h1>
        <CircleIcon Icon={Link} addBorder={true} />

        <div className="w-full mb-6">
          <h2 className="mb-1">Invite code</h2>
          <LineInput
            value={inviteCode}
            onChange={(e) => setInviteCode(e.target.value)}
            placeholder="e.g. YUE7J9"
          />
        </div>

        <MyButton
          text="Join circle"
          color="ogreen-300"
          hoverColor="ogreen-500"
          activeColor="ogreen-600"
          onClick={handleJoin}
        />
      </div>
    </div>
  );
}
