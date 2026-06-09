import Card from "../common/Card";

function ParticipantsPanel() {
  return (
    <Card>
      <h2 className="font-bold mb-4">
        Participants
      </h2>

      <ul className="space-y-2">
        <li>🟢 Bhavesh</li>
        <li>🟢 Rahul</li>
      </ul>
    </Card>
  );
}

export default ParticipantsPanel;