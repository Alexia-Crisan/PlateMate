import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Circle() {
  const { id } = useParams();

  useEffect(() => {
    document.title = `Manage circle | ${id}`;
  }, [id]);

  return (
    <div>
      <h1>Manage your cirlce</h1>
      <p>{id}</p>
    </div>
  );
}
