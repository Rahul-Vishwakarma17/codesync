# CodeSync 🚀

> A real-time collaborative coding platform where developers can create coding rooms, write code together, chat, and execute code online.

**Live Demo:** https://codesync-pi.vercel.app/  
**GitHub Repository:** https://github.com/Rahul-Vishwakarma17/codesync

---

## 📌 Overview

CodeSync is a full-stack web application designed for collaborative coding sessions.

Users can create or join a coding room using a unique room code, collaborate on code in real time, communicate through team chat, see active participants, use a whiteboard for planning, and execute JavaScript code directly from the editor.

The project was built to explore real-time communication, authentication, REST APIs, database integration, third-party API integration, and full-stack deployment.

---

## ✨ Features

### 🔐 Authentication
- User registration and login
- JWT-based authentication
- Protected routes
- Logout functionality

### 👥 Collaborative Rooms
- Create a coding room
- Join an existing room using a room code
- Copy room code
- Copy shareable room link
- View active participants
- Leave a room cleanly

### 💻 Real-Time Code Editor
- Monaco Editor integration
- Real-time code synchronization
- JavaScript coding support
- Language selection interface
- Collaborative coding inside rooms

### 💬 Team Chat
- Real-time room-based messaging
- Sender name and timestamp
- Messages shared with users in the same room

### ▶️ Code Execution
- Execute JavaScript code online
- Display program output inside the coding room
- Judge0 API integration

### 👤 Participant Presence
- Real-time participant count
- Active participant list
- Presence updates when users leave or disconnect

### 📝 Whiteboard
- Interactive drawing canvas
- Undo / Redo
- Clear canvas
- Useful for algorithms, flowcharts, and planning

> **Note:** The current whiteboard is an individual planning tool and is not synchronized between users.

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Socket.IO Client
- Monaco Editor
- React Sketch Canvas

### Backend
- Node.js
- Express.js
- Socket.IO
- JWT
- bcryptjs
- Mongoose

### Database & Services
- MongoDB Atlas
- Judge0 API

### Deployment
- Vercel — Frontend
- Render — Backend
- MongoDB Atlas — Database

---

## 🏗️ Project Structure

```text
CodeSync/
├── backend/
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── middleware/
│       ├── models/
│       ├── routes/
│       ├── services/
│       ├── sockets/
│       ├── utils/
│       ├── validators/
│       ├── app.js
│       └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── vercel.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

## 🔄 How CodeSync Works

```text
User
  │
  ▼
React Frontend
  │
  ├── REST API ──────────► Express Backend
  │                           │
  │                           ├── JWT Authentication
  │                           ├── Room APIs
  │                           └── MongoDB Atlas
  │
  └── Socket.IO ─────────► Real-Time Server
                              │
                              ├── Code Synchronization
                              ├── Chat
                              └── Participant Presence

Code Editor
  │
  └── Execute Code ──────► Backend ─────► Judge0 API
                                             │
                                             ▼
                                          Output
```

---

## 📸 Screenshots

Place the provided screenshots in a `screenshots/` folder with these filenames:

### Login
![CodeSync Login](screenshots/login.png)

### Registration
![CodeSync Registration](screenshots/register.png)

### Dashboard
![CodeSync Dashboard](screenshots/dashboard.png)

### Collaborative Coding Room
![CodeSync Room](screenshots/room.png)

### Code Output, Participants & Whiteboard
![CodeSync Output and Whiteboard](screenshots/output-whiteboard.png)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Rahul-Vishwakarma17/codesync.git
cd codesync
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create `backend/.env`:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
JUDGE0_API_URL=your_judge0_api_url
```

Start the backend:

```bash
npm run dev
```

For production:

```bash
npm start
```

### 3. Setup Frontend

Open another terminal:

```bash
cd frontend
npm install
```

Create `frontend/.env`:

```env
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

Start the frontend:

```bash
npm run dev
```

---

## 🔑 Environment Variables

### Backend

| Variable | Description |
|---|---|
| `PORT` | Backend server port |
| `MONGO_URI` | MongoDB Atlas connection string |
| `JWT_SECRET` | Secret used for JWT authentication |
| `JUDGE0_API_URL` | Judge0 API endpoint |

### Frontend

| Variable | Description |
|---|---|
| `VITE_API_URL` | Backend REST API URL |
| `VITE_SOCKET_URL` | Backend Socket.IO URL |

For production, the frontend variables point to the deployed Render backend.

> **Security:** Never commit `.env` files, database credentials, JWT secrets, or API credentials to GitHub.

---

## 🌐 Deployment

CodeSync uses separate frontend and backend deployments.

- **Frontend:** Vercel
- **Backend:** Render
- **Database:** MongoDB Atlas

### Production Architecture

```text
Vercel Frontend
      │
      ├── REST API
      │
      └── Socket.IO
              │
              ▼
       Render Backend
              │
              ├── MongoDB Atlas
              │
              └── Judge0 API
```

---

## 🧪 Current Verified Functionality

The deployed application has been tested for:

- ✅ Registration
- ✅ Login
- ✅ Logout
- ✅ Create room
- ✅ Join room using room code
- ✅ Real-time code synchronization
- ✅ Monaco code editor
- ✅ Real-time chat
- ✅ Participant presence
- ✅ Leave room
- ✅ JavaScript code execution
- ✅ Whiteboard drawing
- ✅ Vercel + Render deployment
- ✅ MongoDB Atlas integration

---

## ⚠️ Current Limitations

- The whiteboard is currently not synchronized between participants.
- JavaScript execution is the currently verified execution flow.
- Video and voice communication are not included.
- AI coding assistance and automated code review are not included.
- Contests, leaderboards, matchmaking, and payment features are not included.

---

## 🔮 Future Improvements

- 🔄 Synchronized collaborative whiteboard
- 🖱️ Live cursor and user selection indicators
- 🧩 Improved multi-language code execution
- 📁 File and project management inside rooms
- 💾 Persistent room code history
- 🔔 Real-time notifications
- 🎥 Optional voice/video communication
- 🤖 AI-powered coding assistance
- 🧪 Automated code testing

---

## 🎯 Learning Outcomes

CodeSync provided practical experience with:

- Full-stack web application development
- REST API design
- JWT authentication
- MongoDB and Mongoose
- WebSocket-based real-time communication
- Socket.IO room management
- Real-time state synchronization
- Third-party API integration
- React component architecture
- Cloud deployment
- Environment variable management
- Debugging real-time and production issues

---

## 👨‍💻 Author

**Rahul Vishwakarma**

- GitHub: https://github.com/Rahul-Vishwakarma17
- Project: https://github.com/Rahul-Vishwakarma17/codesync
- Live Demo: https://codesync-pi.vercel.app/

---

## ⭐ Support

If you find CodeSync useful or interesting, consider giving the repository a ⭐ on GitHub.
