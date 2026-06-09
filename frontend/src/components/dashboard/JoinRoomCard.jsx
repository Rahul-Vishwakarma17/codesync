import Card from "../common/Card";
import Button from "../common/Button";

function JoinRoomCard() {
  return (
    <Card>
      <h2 className="text-2xl font-bold mb-4">
        Join Room
      </h2>

      <p className="text-zinc-400 mb-6">
        Join an existing room using a room code.
      </p>

      <Button>
        Join Room
      </Button>
    </Card>
  );
}

export default JoinRoomCard;