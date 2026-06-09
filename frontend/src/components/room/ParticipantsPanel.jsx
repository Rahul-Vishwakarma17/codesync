import Card from "../common/Card";

function ParticipantsPanel({
  participants = [],
}) {
  return (
    <Card>
      <h2 className="font-bold mb-4">
        Participants
      </h2>

      <ul className="space-y-2">
        {participants.map((user) => (
          <li key={user.socketId}>
            🟢 {user.name}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default ParticipantsPanel;