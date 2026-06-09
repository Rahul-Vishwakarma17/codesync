import Container from "../components/common/Container";
import CreateRoomForm from "../components/room/CreateRoomForm";

function CreateRoom() {
  return (
    <Container>
      <div className="py-12">
        <CreateRoomForm />
      </div>
    </Container>
  );
}

export default CreateRoom;