import {
  UPDATE_ROOM,
  JOIN,
  SET_SOCKET,
  UPDATE_CIRCLE_VISIBILITY
} from "./types";

export function updateRoom(room: string) {
  return {
    type: UPDATE_ROOM,
    room
  };
}
export function join() {
  return {
    type: JOIN
  };
}
export function setSocket(socket: SocketIOClient.Socket) {
  return {
    type: SET_SOCKET,
    socket
  };
}
export function updateCircleVisibility(showCircle: boolean) {
  return {
    type: UPDATE_CIRCLE_VISIBILITY,
    showCircle
  };
}
