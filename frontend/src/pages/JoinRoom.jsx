import Container from "../components/common/Container";
import JoinRoomForm from "../components/room/JoinRoomForm";

function JoinRoom() {
  return (
    <Container>
      <div className="py-12">
        <JoinRoomForm />
      </div>
    </Container>
  );
}

export default JoinRoom;