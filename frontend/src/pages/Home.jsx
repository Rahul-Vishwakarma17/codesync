import { useNavigate } from "react-router-dom";

import Button from "../components/common/Button";
import Card from "../components/common/Card";
import Container from "../components/common/Container";

function Home() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleCreateRoom = () => {
    if (token) {
      navigate("/create-room");
    } else {
      navigate("/login");
    }
  };

  const handleJoinRoom = () => {
    if (token) {
      navigate("/join-room");
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-32">
        <Container>
          <div className="text-center">
            <div className="inline-block px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900 text-sm text-zinc-400 mb-6">
              🚀 Real-Time Collaborative Coding Platform
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              Code Together.
              <br />
              Learn Together.
              <br />
              Build Together.
            </h1>

            <p className="mt-8 text-lg text-zinc-400 max-w-3xl mx-auto">
              Build, learn and solve coding problems together with real-time
              collaboration, live chat, shared whiteboard and online code
              execution.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <Button onClick={handleCreateRoom}>
                Create Room
              </Button>

              <Button
                onClick={handleJoinRoom}
                className="bg-zinc-800 hover:bg-zinc-700"
              >
                Join Room
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="pb-24">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <div className="text-4xl mb-4">⚡</div>

              <h3 className="font-bold text-xl mb-2">
                Real-Time Coding
              </h3>

              <p className="text-zinc-400">
                Collaborate on code instantly with your teammates.
              </p>
            </Card>

            <Card>
              <div className="text-4xl mb-4">💬</div>

              <h3 className="font-bold text-xl mb-2">
                Live Chat
              </h3>

              <p className="text-zinc-400">
                Discuss solutions and ideas while coding together.
              </p>
            </Card>

            <Card>
              <div className="text-4xl mb-4">🎨</div>

              <h3 className="font-bold text-xl mb-2">
                Shared Whiteboard
              </h3>

              <p className="text-zinc-400">
                Explain algorithms visually using a collaborative whiteboard.
              </p>
            </Card>

            <Card>
              <div className="text-4xl mb-4">▶️</div>

              <h3 className="font-bold text-xl mb-2">
                Code Execution
              </h3>

              <p className="text-zinc-400">
                Run code directly inside coding rooms with instant output.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="pb-32">
        <Container>
          <Card className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Coding Together?
            </h2>

            <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
              Start collaborating in seconds. No installations. No setup.
              Just create a room and begin coding with your friends.
            </p>

            <div className="mt-8">
              <Button onClick={handleCreateRoom}>
                Create Your First Room
              </Button>
            </div>
          </Card>
        </Container>
      </section>
    </div>
  );
}

export default Home;