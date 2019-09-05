export interface AppState {
  room: string;
  live: boolean;
  showCircle: boolean;
  socket?: SocketIOClient.Socket;
}

export const UPDATE_ROOM = "UPDATE_ROOM";
export const JOIN = "JOIN";
export const SET_SOCKET = "SET_SOCKET";
export const UPDATE_CIRCLE_VISIBILITY = "UPDATE_CIRCLE_VISIBILITY";

interface UpdateRoomAction {
  type: typeof UPDATE_ROOM;
  room: string;
}
interface JoinAction {
  type: typeof JOIN;
}
interface SetSocketAction {
  type: typeof SET_SOCKET;
  socket: SocketIOClient.Socket;
}
interface UpdateCircleVisibilityAction {
  type: typeof UPDATE_CIRCLE_VISIBILITY;
  showCircle: boolean;
}

export type ActionTypes =
  | UpdateRoomAction
  | JoinAction
  | SetSocketAction
  | UpdateCircleVisibilityAction;
