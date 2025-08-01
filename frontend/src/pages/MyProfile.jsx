import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { ConciergeBell } from "lucide-react";
import LineItem from "../components/LineItem";
import MyButton from "../components/MyButton";
import CreateCircleModal from "../components/CreateCircleModal";
import JoinCircleModal from "../components/JoinCircleModal";


export default function MyProfile() {
  const userCircles = [
    {
      title: "My uni circle",
      bottomText: "See details →",
      creator: "User 2",
    },
    {
      title: "Home",
      bottomText: "See details →",
      creator: "User 5",
    },
  ];

  const allergies = ["peanuts", "soy milk", "strawberries"];

  const [isCreateCircleModalOpen, setIsCreateCircleModalOpen] = useState(false);
  const [isJoinCircleModalOpen, setIsJoinCircleModalOpen] = useState(false);

  function openCreateCircleModal() {
  setIsCreateCircleModalOpen(true);
}

function closeCreateCircleModal() {
  setIsCreateCircleModalOpen(false);
}

function openJoinCircleModal() {
  setIsJoinCircleModalOpen(true);
}

function closeJoinCircleModal() {
  setIsJoinCircleModalOpen(false);
}


  return (
    <div className="min-h-screen p-6 flex flex-col bg-beige">
      <h2 className="text-2xl font-semibold text-center mb-4">Your profile</h2>

      <div className="flex-grow">
        <div className="flex flex-col items-center space-y-2 mb-6">
          <div className="bg-ogreen-900 rounded-full p-4">
            <FiUser className="text-white text-3xl" />
          </div>
          <p className="text-lg font-medium">Username</p>
          <p className="text-sm text-gray-600">example@gmail.com</p>

          <div className="flex space-x-4 mt-2">
            <MyButton
              text="Log out"
              color="ored-500"
              hoverColor="ored-600"
              activeColor="ored-700"
            />
            <MyButton
              text="Edit profile"
              color="ogreen-500"
              hoverColor="ogreen-600"
              activeColor="ogreen-700"
            />
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-medium text-md mb-2">
            Your allergies/dietary requirements:
          </h3>
          <div className="flex flex-wrap gap-2">
            {allergies.map((item) => (
              <span
                key={item}
                className="bg-ored-500 text-white px-3 py-1 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium text-md mb-2">Your circles:</h3>
          <div className="space-y-3 mb-4">
            {userCircles.map((circle) => (
              <LineItem
                key={circle.title}
                title={circle.title}
                leftIcon={ConciergeBell}
                rightIcon={RiLogoutBoxRLine}
                rightColorIcon="text-ored-500"
                rightColorIconHover="hover:text-ored-600"
                onRightIconClick={() => console.log(`Leave ${circle.title}`)}
                bottomElement={
                    <span className="text-ogreen-500">{`Created by User`}</span>
                }
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between space-x-4 mt-6">
        <MyButton
            text="Create new circle"
            color="ogreen-500"
            hoverColor="ogreen-600"
            activeColor="ogreen-700"
            onClick={openCreateCircleModal}
            />
            <MyButton
            text="Join a circle"
            color="ogreen-500"
            hoverColor="ogreen-600"
            activeColor="ogreen-700"
            onClick={openJoinCircleModal}
            />
      </div>

      {isCreateCircleModalOpen && (
        <CreateCircleModal onClose={closeCreateCircleModal} />
        )}

        {isJoinCircleModalOpen && (
        <JoinCircleModal onClose={closeJoinCircleModal} />
        )}
    </div>
  );
}
