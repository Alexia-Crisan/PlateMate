import { useParams } from "react-router-dom";

export default function Circle() {
  const { id } = useParams();

  return (
    <div>
      <h1>Manage your cirlce</h1>
      <p>{id}</p>
    </div>
  );
}
