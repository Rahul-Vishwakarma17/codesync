import { useNavigate } from "react-router-dom";

import Card from "../common/Card";
import Button from "../common/Button";

function CreateRoomCard() {
  const navigate = useNavigate();

  return (
    <Card>
      <h2 className="text-2xl font-bold mb-4">
        Create Room
      </h2>

      <p className="text-zinc-400 mb-6">
        Start a collaborative coding session.
      </p>

      <Button
        onClick={() =>
          navigate("/create-room")
        }
      >
        Create Room
      </Button>
    </Card>
  );
}

export default CreateRoomCard;