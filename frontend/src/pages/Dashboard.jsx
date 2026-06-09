import Container from "../components/common/Container";

import WelcomeSection from "../components/dashboard/WelcomeSection";
import CreateRoomCard from "../components/dashboard/CreateRoomCard";
import JoinRoomCard from "../components/dashboard/JoinRoomCard";
import RecentRooms from "../components/dashboard/RecentRooms";

function Dashboard() {
  return (
    <Container>
      <div className="py-12">

        <WelcomeSection />

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <CreateRoomCard />
          <JoinRoomCard />
        </div>

        <RecentRooms />

      </div>
    </Container>
  );
}

export default Dashboard;