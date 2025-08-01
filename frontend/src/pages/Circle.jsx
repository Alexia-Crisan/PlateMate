import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ConciergeBell, CircleUser, Trash2, Crown, Cookie } from "lucide-react";
import CircleIcon from "../components/CircleIcon.jsx";
import MyButton from "../components/MyButton.jsx";
import LineItem from "../components/LineItem.jsx";
import NewRecipeModal from "../components/NewRecipeModal.jsx";
import ViewRecipeModal from "../components/ViewRecipeModal.jsx";

export default function Circle() {
  const { id } = useParams();

  // TODO: fetch the circle data from the API
  const [circle, setCircle] = useState({
    name: "Circle name",
    inviteCode: "SI8Y5W",
    members: [
      {
        username: "john_doe",
      },
      {
        username: "sample_user",
      },
      {
        username: "iuzar",
      },
    ],
    createdBy: "john_doe",
    recipes: [
      {
        name: "Chocolate Chip Cookies",
        createdBy: "john_doe",
      },
      {
        name: "Banana Bread",
        createdBy: "sample_user",
      },
    ],
  });

  // TODO: show the circle's name instead of the id
  useEffect(() => {
    document.title = `Manage circle | ${id}`;
  }, [id]);

  function handleDeleteMember(memberToRemove) {
    setCircle((prevCircle) => ({
      ...prevCircle,
      members: prevCircle.members.filter(
        (member) => member.username !== memberToRemove.username
      ),
    }));
    console.log(`Deleted member: ${memberToRemove.username}`);
  }

  function handleDeleteCircle() {}

  const [isModalOpen, setIsModalOpen] = useState(false);
  function openAddRecipeModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    console.log("Closed recipe modal");
  }

  const [isReciepeModalOpen, setIsReciepeModalOpen] = useState(false);
  function openReciepeModalOpen() {
    setIsReciepeModalOpen(true);
  }

  function handleCloseRecipeModal() {
    setIsReciepeModalOpen(false);
    console.log("Closed recipe modal");
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-8">Manage your cirlce</h1>
      <CircleIcon Icon={ConciergeBell} bottomText={circle.name} />
      <div className="w-full">
        <h2 className="mb-4">Members:</h2>
        <ul>
          {circle.members.map((member, index) => (
            <LineItem
              key={index}
              title={member.username}
              leftIcon={CircleUser}
              rightIcon={circle.createdBy === member.username ? Crown : Trash2}
              rightColorIcon={
                circle.createdBy === member.username
                  ? "text-oyellow-500"
                  : "text-ored-500"
              }
              rightColorIconHover={
                circle.createdBy === member.username
                  ? "text-oyellow-500"
                  : "text-ored-600"
              }
              onRightIconClick={
                circle.createdBy === member.username
                  ? () => {}
                  : () => handleDeleteMember(member)
              }
            />
          ))}
        </ul>
        <div className="flex justify-between mt-2">
          <MyButton
            text={`Invite code: ${circle.inviteCode}`}
            color="ogreen-500"
            hoverColor="ogreen-600"
            activeColor="ogreen-700"
          />
          <MyButton
            text="Delete circle"
            color="ored-500"
            hoverColor="ored-600"
            activeColor="ored-700"
            onClick={handleDeleteCircle}
          />
        </div>
      </div>
      <div className="w-full mt-8">
        <h2>Recipes:</h2>
        <ul>
          {circle.recipes.map((recipe, index) => (
            <LineItem
              key={index}
              title={recipe.name}
              leftIcon={Cookie}
              rightIcon={Trash2}
              rightColorIcon="text-ored-500"
              rightColorIconHover="text-ored-600"
              bottomElement={
                <button
                  onClick={openReciepeModalOpen}
                  className="text-left w-full bg-transparent p-0 m-0 border-none outline-none cursor-pointer"
                >
                  <div className="flex flex-col">
                    <span className="text-ogreen-500">{`Created by ${recipe.createdBy}`}</span>
                    <span className="text-ogreen-400">See details</span>
                  </div>
                </button>
              }
            />
          ))}
        </ul>
        <div className="flex justify-between mt-2">
          <MyButton
            text="Add recipe"
            color="ogreen-500"
            hoverColor="ogreen-600"
            activeColor="ogreen-700"
            onClick={openAddRecipeModal}
          />
        </div>
      </div>

      {isModalOpen && <NewRecipeModal onClick={handleCloseModal} />}
      {isReciepeModalOpen && (
        <ViewRecipeModal onClick={handleCloseRecipeModal} />
      )}
    </div>
  );
}
