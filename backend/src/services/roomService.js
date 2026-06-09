// import api from "../utils/api";

// export const createRoom = async (roomData) => {
//   const token = localStorage.getItem("token");

//   const response = await api.post(
//     "/rooms",
//     roomData,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );

//   return response.data;
// };

// export const joinRoom = async (roomCode) => {
//   const token = localStorage.getItem("token");

//   const response = await api.post(
//     "/rooms/join",
//     { roomCode },
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );

//   return response.data;
// };

// export const getRoom = async (roomCode) => {
//   const token = localStorage.getItem("token");

//   const response = await api.get(
//     `/rooms/${roomCode}`,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );

//   return response.data;
// };

// export const saveRoomCode = async (
//   roomCode,
//   code
// ) => {
//   const token = localStorage.getItem("token");

//   const response = await api.put(
//     `/rooms/${roomCode}/code`,
//     { code },
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );

//   return response.data;
// };

// console.log("roomService loaded");