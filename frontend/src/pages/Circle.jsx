import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ConciergeBell, CircleUser, Trash2 } from "lucide-react";
import CircleIcon from "../components/CircleIcon.jsx";
import MyButton from "../components/MyButton.jsx";
import LineItem from "../components/LineItem.jsx";

export default function Circle() {
  const { id } = useParams();

  // TODO: fetch the circle data from the API
  const [circle, setCircle] = useState({
    name: "Sample circle",
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
    recipes: [{}],
  });

  // TODO: show the circle's name instead of the id
  useEffect(() => {
    document.title = `Manage circle | ${id}`;
  }, [id]);

  function handleDeleteMember(member) {}

  return (
    <div className="flex flex-col items-center ">
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
              rightIcon={Trash2}
              rightColorIcon="text-ored-500"
              rightColorIconHover="hover:text-ored-600"
              onRightIconClick={() => handleDeleteMember(member)}
            />
          ))}
        </ul>
        <div className="flex justify-between mt-2">
          <MyButton text="Invite" />
          <MyButton text="Invite" />
        </div>
      </div>
      <div>
        <h2>Recipes:</h2>
      </div>
    </div>
  );
}
